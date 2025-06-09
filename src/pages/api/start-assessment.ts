import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with environment variables
const supabaseUrl = "https://pguplwzxbkomfnojulay.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM";

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing required environment variables for Supabase connection');
}

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("request", request)
   
    const userData = await request.json();
   
    // First, create or get the user
    const { data: user, error: userError } = await supabaseAdmin
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
      }, { 
        onConflict: 'email',
        ignoreDuplicates: false
      })
     .select()
  .single();

    if (userError) {
      console.error('Error creating/updating user:', userError);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to create/update user', 
          details: userError.message,
          code: userError.code 
        }),
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    }

    // Generate a unique token for the assessment
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Create the assessment
    const { data: assessmentData, error: assessmentError } = await supabaseAdmin
      .from('assessments')
      .insert({
        user_id: user.id,
        type: 'kbyg',
        status: 'in_progress',
        token: token
      })
      .select('id')
      .single();

    if (assessmentError) {
      console.error('Error creating assessment:', assessmentError);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to create assessment', 
          details: assessmentError.message,
          code: assessmentError.code 
        }),
        { 
          status: 500, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    }

    // Also send to Zapier webhook as a backup
    try {
      const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/4197949/2xaumqg/';
      await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: userData,
          timestamp: new Date().toISOString()
        })
      });
    } catch (webhookError) {
      // Log webhook error but don't prevent successful response
      console.error('Webhook submission error:', webhookError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        assessmentId: assessmentData.id,
        token: token
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  } catch (error) {
    console.error('Error starting assessment:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to start assessment', 
        details: error.message,
        code: error.code || 'UNKNOWN_ERROR'
      }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  }
};