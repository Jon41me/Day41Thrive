export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const userData = JSON.parse(sessionStorage.getItem("assessmentData") || "{}");
    const questions = [];
    const responses = [];
    sections.forEach((section) => {
      section.questions.forEach((question) => {
        questions.push(question.question);
        let response = answers[question.id];
        if (Array.isArray(response)) {
          response = response.join(", ");
        } else if (typeof response === "object" && response !== null) {
          response = Object.entries(response).map(([key, value]) => `${key}: ${value}%`).join(", ");
        }
        responses.push(response || "");
      });
    });
    const fullData = {
      data: {
        questions,
        responses,
        userData
      },
      submittedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const zapierWebhookUrl = "https://hooks.zapier.com/hooks/catch/4197949/2pws7oe/";
    await fetch(zapierWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fullData),
      mode: "no-cors"
    });
    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error submitting assessment:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit assessment" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
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
