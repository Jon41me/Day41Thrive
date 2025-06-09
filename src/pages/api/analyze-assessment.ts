import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Get the stored data
    const userData = JSON.parse(sessionStorage.getItem('assessmentData') || '{}');
    
    // Create questions and responses arrays
    const questions: string[] = [];
    const responses: (string | number)[] = [];

    // Format the answers into a structured format
    sections.forEach(section => {
      section.questions.forEach(question => {
        questions.push(question.question);
        
        let response = answers[question.id];
        
        // Format array responses as comma-separated string
        if (Array.isArray(response)) {
          response = response.join(', ');
        }
        // Format percentage grid responses
        else if (typeof response === 'object' && response !== null) {
          response = Object.entries(response)
            .map(([key, value]) => `${key}: ${value}%`)
            .join(', ');
        }
        
        responses.push(response || '');
      });
    });

    // Create the final data structure
    const fullData = {
      data: {
        questions,
        responses,
        userData
      },
      submittedAt: new Date().toISOString()
    };

    // Send to Zapier webhook
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/4197949/2pws7oe/';
    await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fullData),
      mode: 'no-cors'
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error submitting assessment:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to submit assessment' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};