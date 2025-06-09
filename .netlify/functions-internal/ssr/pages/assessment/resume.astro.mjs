import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
import { s as supabase } from '../../chunks/supabase_BwhYzpiX.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resume;
  const assessmentId = Astro2.url.searchParams.get("assessmentId");
  const token = Astro2.url.searchParams.get("token");
  let assessmentData = null;
  let userData = null;
  let error = null;
  if (assessmentId && token) {
    const { data, error: assessmentError } = await supabase.from("assessments").select("id, user_id, status, last_question_id").eq("id", assessmentId).eq("token", token).single();
    if (assessmentError) {
      console.error("Error verifying assessment:", assessmentError);
      error = "Invalid assessment or token. Please start a new assessment.";
    } else {
      assessmentData = data;
      const { data: user, error: userError } = await supabase.from("users").select("first_name, last_name, email").eq("id", assessmentData.user_id).single();
      if (userError) {
        console.error("Error fetching user data:", userError);
      } else {
        userData = user;
      }
    }
  } else {
    error = "Missing assessment ID or token. Please start a new assessment.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resume Assessment - Day 41 Thrive", "data-astro-cid-lfrgdqaf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-lfrgdqaf": true })} ${maybeRenderHead()}<main class="resume-page" data-astro-cid-lfrgdqaf> <section class="resume-section" data-astro-cid-lfrgdqaf> <div class="container" data-astro-cid-lfrgdqaf> <div class="resume-card" data-astro-cid-lfrgdqaf> ${error ? renderTemplate`<div class="error-content" data-astro-cid-lfrgdqaf> <h1 data-astro-cid-lfrgdqaf>Error</h1> <p data-astro-cid-lfrgdqaf>${error}</p> <a href="/assessment/start" class="btn" data-astro-cid-lfrgdqaf>Start a New Assessment</a> </div>` : renderTemplate`<div class="resume-content" data-astro-cid-lfrgdqaf> <h1 data-astro-cid-lfrgdqaf>Resume Your Assessment</h1> ${userData && renderTemplate`<p class="welcome-message" data-astro-cid-lfrgdqaf>Welcome back, ${userData.first_name}!</p>`} <p data-astro-cid-lfrgdqaf>You have an assessment in progress. Would you like to continue where you left off?</p> <div class="status-info" data-astro-cid-lfrgdqaf> <p data-astro-cid-lfrgdqaf><strong data-astro-cid-lfrgdqaf>Status:</strong> ${assessmentData?.status === "in_progress" ? "In Progress" : "Completed"}</p> </div> <div class="action-buttons" data-astro-cid-lfrgdqaf> <a${addAttribute(`/assessment/questions?assessmentId=${assessmentId}&token=${token}`, "href")} class="btn resume-btn" data-astro-cid-lfrgdqaf>
Continue Assessment
</a> <a href="/assessment/start" class="btn new-btn" data-astro-cid-lfrgdqaf>
Start a New Assessment
</a> </div> </div>`} </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-lfrgdqaf": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/assessment/resume.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/assessment/resume.astro";
const $$url = "/assessment/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
