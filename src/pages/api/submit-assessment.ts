import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with service role key (only on the server)
const supabaseUrl = 'https://pguplwzxbkomfnojulay.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM';
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    let { userData, answers, assessmentId, token } = await request.json();
    
    // Always send to Zapier webhook as a backup first
    try {
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/4197949/2pws7oe/';
      
      // Create questions and responses arrays for Zapier
      const questions: string[] = [];
      const responses: (string | number)[] = [];
      let formattedResponse = null;

      // Format the answers for Zapier
      for (const [questionKey, answer] of Object.entries(answers)) {
        questions.push(questionKey);
        
         formattedResponse = answer;
        
        // Format array responses as comma-separated string
        if (Array.isArray(answer)) {
          formattedResponse = answer.join(', ');
        }
        // Format percentage grid responses
        else if (typeof answer === 'object' && answer !== null) {
          formattedResponse = Object.entries(answer)
            .map(([key, value]) => `${key}: ${value}%`)
            .join(', ');
        }
        
        responses.push(formattedResponse || '');
      }

      // Create the final data structure for Zapier
      const fullData = {
        data: {
          questions,
          responses,
          userData
        },
        submittedAt: new Date().toISOString()
      };

      await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullData),
        mode: 'no-cors'
      });
    } catch (zapierError) {
      console.error('Error sending to Zapier (backup):', zapierError);
      // Continue with database operations even if Zapier fails
    }

    // Now try to save to the database
    let userId;
    let assessmentData;

    // If assessmentId and token are provided, verify and use existing assessment
    if (assessmentId && token) {
      const { data: existingAssessment, error: assessmentError } = await supabaseAdmin
        .from('assessments')
        .select('id, user_id')
        .eq('id', assessmentId)
        .eq('token', token)
        .single();

      if (assessmentError || !existingAssessment) {
        console.error('Error verifying assessment:', assessmentError);
        return new Response(
          JSON.stringify({ 
            success: true, // Return success anyway since we sent to Zapier
            message: 'Data saved to backup system',
            zapierOnly: true
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }

      userId = existingAssessment.user_id;
      assessmentData = existingAssessment;

      // Update the assessment status to completed
      await supabaseAdmin
        .from('assessments')
        .update({
          status: 'completed',
          completed_at: new Date().toISOString()
        })
        .eq('id', assessmentId);
    } else {
      // Create or get the user if no existing assessment
      try {
        const { data: userData2, error: userError } = await supabaseAdmin
          .from('users')
          .upsert({
            first_name: userData.firstName,
            last_name: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            position: userData.position,
            company: userData.company || '',
            website: userData.website || '',
            zip_code: userData.zipCode || '',
            locations: parseInt(userData.locations || '1')
          }, { onConflict: 'email' })
          .select('id')
          .single();

        if (userError) {
          throw userError;
        }

        userId = userData2.id;

        // Generate a unique token for the assessment
        const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        // Create the assessment
        const { data: newAssessment, error: assessmentError } = await supabaseAdmin
          .from('assessments')
          .insert({
            user_id: userId,
            type: 'kbyg',
            status: 'completed',
            completed_at: new Date().toISOString(),
            token: newToken
          })
          .select('id')
          .single();

        if (assessmentError) {
          throw assessmentError;
        }

        assessmentData = newAssessment;
        token = newToken;
      } catch (dbError) {
        console.error('Database error:', dbError);
        return new Response(
          JSON.stringify({ 
            success: true, // Return success anyway since we sent to Zapier
            message: 'Data saved to backup system',
            zapierOnly: true
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Try to save answers to the database
    try {
      // Delete any existing answers for this assessment to avoid duplicates
      await supabaseAdmin
        .from('answers')
        .delete()
        .eq('assessment_id', assessmentData.id);

      // Format the answers for database insertion
      const answersToInsert = [];
      
      for (const [questionKey, answer] of Object.entries(answers)) {
        // Get the question ID from the database
        const { data: questionData, error: questionError } = await supabaseAdmin
          .from('questions')
          .select('id, question_text')
          .eq('question_key', questionKey)
          .single();

        if (questionError) {
          console.error(`Error finding question with key ${questionKey}:`, questionError);
          continue;
        }

        let formattedAnswer = answer;
        
        // Format array responses as JSON string
        if (Array.isArray(answer)) {
          formattedAnswer = JSON.stringify(answer);
        }
        // Format percentage grid responses
        else if (typeof answer === 'object' && answer !== null) {
          formattedAnswer = JSON.stringify(answer);
        }
        
        answersToInsert.push({
          assessment_id: assessmentData.id,
          question_id: questionData.id,
          answer: formattedAnswer
        });
      }

      // Insert all answers
      if (answersToInsert.length > 0) {
        const { error: answersError } = await supabaseAdmin
          .from('answers')
          .insert(answersToInsert);

        if (answersError) {
          throw answersError;
        }
      }
    } catch (answersError) {
      console.error('Error saving answers:', answersError);
      // Continue with success response even if answers saving fails
      // since we already have the data in Zapier
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        assessmentId: assessmentData.id,
        token: token
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error submitting assessment:', error);
    return new Response(
      JSON.stringify({ 
        success: true, // Return success anyway since we sent to Zapier
        message: 'Data saved to backup system',
        zapierOnly: true,
        error: error.message
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};