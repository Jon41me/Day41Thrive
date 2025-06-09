import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://pguplwzxbkomfnojulay.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM";
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
const POST = async ({ request }) => {
  try {
    const { questionKey } = await request.json();
    if (!questionKey) {
      return new Response(
        JSON.stringify({
          error: "Missing questionKey parameter",
          details: "The questionKey parameter is required",
          code: "MISSING_PARAM"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    const { data, error } = await supabaseAdmin.from("questions").select("id").eq("question_key", questionKey).single();
    if (error) {
      console.error(`Error finding question with key ${questionKey}:`, error);
      return new Response(
        JSON.stringify({
          id: "00000000-0000-0000-0000-000000000000",
          warning: `Could not find question with key ${questionKey}`,
          details: error.message,
          code: error.code
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    return new Response(
      JSON.stringify({ id: data.id }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } catch (error) {
    console.error("Error getting question ID:", error);
    return new Response(
      JSON.stringify({
        id: "00000000-0000-0000-0000-000000000000",
        warning: "Error processing request, using default ID",
        details: error instanceof Error ? error.message : "Unknown error",
        code: "HANDLED_ERROR"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
