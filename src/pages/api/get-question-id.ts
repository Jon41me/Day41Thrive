import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with direct values
const supabaseUrl = 'https://pguplwzxbkomfnojulay.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM';

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export const POST: APIRoute = async ({ request }) => {
  try {
    const { questionKey } = await request.json();
    
    if (!questionKey) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing questionKey parameter',
          details: 'The questionKey parameter is required',
          code: 'MISSING_PARAM' 
        }),
        { 
          status: 400, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    }
    
    // Get the question ID from the database
    const { data, error } = await supabaseAdmin
      .from('questions')
      .select('id')
      .eq('question_key', questionKey)
      .single();

    if (error) {
      console.error(`Error finding question with key ${questionKey}:`, error);
      
      // Return a successful response with a default ID to prevent blocking the user
      return new Response(
        JSON.stringify({ 
          id: '00000000-0000-0000-0000-000000000000',
          warning: `Could not find question with key ${questionKey}`,
          details: error.message,
          code: error.code 
        }),
        { 
          status: 200, 
          headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          } 
        }
      );
    }

    return new Response(
      JSON.stringify({ id: data.id }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  } catch (error) {
    console.error('Error getting question ID:', error);
    
    // Return a successful response with a default ID to prevent blocking the user
    return new Response(
      JSON.stringify({ 
        id: '00000000-0000-0000-0000-000000000000',
        warning: 'Error processing request, using default ID',
        details: error instanceof Error ? error.message : 'Unknown error',
        code: 'HANDLED_ERROR'
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        } 
      }
    );
  }
};