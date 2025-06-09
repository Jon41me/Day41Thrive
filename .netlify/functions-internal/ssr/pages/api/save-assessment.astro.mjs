import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabaseUrl = "https://pguplwzxbkomfnojulay.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBndXBsd3p4YmtvbWZub2p1bGF5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODU1ODAwNSwiZXhwIjoyMDY0MTM0MDA1fQ.rI7j4g21kopIMdD2rIJPwU9Vjll_7JtX7vvj1L2p3yM";
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
const POST = async ({ request }) => {
  try {
    const { assessmentId, token, answers, questionId, userEmail } = await request.json();
    console.log("Save assessment request:", { assessmentId, token, hasAnswers: !!answers && Object.keys(answers).length > 0, questionId, userEmail });
    if (!assessmentId || !token) {
      console.error("Missing assessmentId or token");
      return new Response(
        JSON.stringify({
          error: "Missing assessmentId or token",
          details: "Both assessmentId and token are required",
          code: "MISSING_PARAMS"
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
    const { data: assessmentData, error: assessmentError } = await supabaseAdmin.from("assessments").select("id, user_id").eq("id", assessmentId).eq("token", token).single();
    if (assessmentError) {
      console.error("Error verifying assessment:", assessmentError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid assessment or token",
          details: assessmentError.message || "Assessment not found",
          code: assessmentError.code || "NOT_FOUND"
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
    const { error: updateError } = await supabaseAdmin.from("assessments").update({
      last_question_id: questionId,
      status: "in_progress"
    }).eq("id", assessmentId);
    if (answers && Object.keys(answers).length > 0) {
      try {
        await supabaseAdmin.from("answers").delete().eq("assessment_id", assessmentId);
        const answersToInsert = [];
        for (const [questionKey, answer] of Object.entries(answers)) {
          const { data: questionData, error: questionError } = await supabaseAdmin.from("questions").select("id").eq("question_key", questionKey).single();
          if (questionError) {
            console.error(`Error finding question with key ${questionKey}:`, questionError);
            continue;
          }
          let formattedAnswer = answer;
          if (Array.isArray(answer)) {
            formattedAnswer = JSON.stringify(answer);
          } else if (typeof answer === "object" && answer !== null) {
            formattedAnswer = JSON.stringify(answer);
          }
          answersToInsert.push({
            assessment_id: assessmentId,
            question_id: questionData.id,
            answer: formattedAnswer
          });
        }
        if (answersToInsert.length > 0) {
          const { error: answersError } = await supabaseAdmin.from("answers").insert(answersToInsert);
          if (answersError) {
            console.error("Error inserting answers:", answersError);
          }
        }
      } catch (answersError) {
        console.error("Error processing answers:", answersError);
      }
    }
    if (updateError) {
      console.error("Error updating assessment:", updateError);
      return new Response(
        JSON.stringify({
          success: true,
          message: "Progress partially saved. Some data may not have been updated.",
          details: updateError.message,
          code: updateError.code
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
    let email = userEmail;
    if (!email) {
      try {
        const { data: userData, error: userError } = await supabaseAdmin.from("users").select("email").eq("id", assessmentData.user_id).single();
        if (!userError && userData) {
          email = userData.email;
        }
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    }
    const baseUrl = new URL(request.url).origin;
    const resumeUrl = `${baseUrl}/assessment/resume?assessmentId=${assessmentId}&token=${token}`;
    return new Response(
      JSON.stringify({
        success: true,
        resumeUrl,
        email
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
    console.error("Error saving assessment:", error);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Progress may have been saved. Please continue with your assessment.",
        error: error instanceof Error ? error.message : "Unknown error",
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
