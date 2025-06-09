import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://pguplwzxbkomfnojulay.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM";
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});
const POST = async ({ request }) => {
  try {
    console.log("request", request);
    const userData = await request.json();
    const { data: user, error: userError } = await supabaseAdmin.from("users").upsert({
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
      phone: userData.phone,
      position: userData.position,
      company: userData.company || "",
      website: userData.website || "",
      zip_code: userData.zipCode || "",
      locations: parseInt(userData.locations || "1")
    }, {
      onConflict: "email",
      ignoreDuplicates: false
    }).select().single();
    if (userError) {
      console.error("Error creating/updating user:", userError);
      return new Response(
        JSON.stringify({
          error: "Failed to create/update user",
          details: userError.message,
          code: userError.code
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const { data: assessmentData, error: assessmentError } = await supabaseAdmin.from("assessments").insert({
      user_id: user.id,
      type: "kbyg",
      status: "in_progress",
      token
    }).select("id").single();
    if (assessmentError) {
      console.error("Error creating assessment:", assessmentError);
      return new Response(
        JSON.stringify({
          error: "Failed to create assessment",
          details: assessmentError.message,
          code: assessmentError.code
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        }
      );
    }
    try {
      const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/4197949/2xaumqg/";
      await fetch(zapierWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          formData: userData,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        })
      });
    } catch (webhookError) {
      console.error("Webhook submission error:", webhookError);
    }
    return new Response(
      JSON.stringify({
        success: true,
        assessmentId: assessmentData.id,
        token
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  } catch (error) {
    console.error("Error starting assessment:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to start assessment",
        details: error.message,
        code: error.code || "UNKNOWN_ERROR"
      }),
      {
        status: 500,
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
