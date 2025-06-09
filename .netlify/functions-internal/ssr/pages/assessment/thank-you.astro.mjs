import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank You - Day 41 Thrive", "data-astro-cid-b6razrja": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-b6razrja": true })} ${maybeRenderHead()}<main class="thank-you-page" data-astro-cid-b6razrja> <section class="thank-you-section" data-astro-cid-b6razrja> <div class="container" data-astro-cid-b6razrja> <div class="thank-you-card" data-astro-cid-b6razrja> <h1 data-astro-cid-b6razrja>Thank You for Completing the Growth Gauge!</h1> <p class="message" data-astro-cid-b6razrja>We appreciate you taking the time to share your business insights with us. A member of our team will review your responses and reach out to you shortly to discuss how we can help your business thrive.</p> <div class="next-steps" data-astro-cid-b6razrja> <h2 data-astro-cid-b6razrja>What's Next?</h2> <ul data-astro-cid-b6razrja> <li data-astro-cid-b6razrja>Our team will analyze your responses</li> <li data-astro-cid-b6razrja>We'll prepare personalized recommendations</li> <li data-astro-cid-b6razrja>A team member will contact you within 1-2 business days</li> </ul> </div> <div class="hirebus-intro" data-astro-cid-b6razrja> <h2 data-astro-cid-b6razrja>Discover Your Leadership Style</h2> <p data-astro-cid-b6razrja>
Take the Hirebus Assessment to uncover your strengths, leadership style, and communication preferences. 
        This short personality survey helps us better support you and ensures our recommendations truly fit your goals.
</p> </div> <div class="cta-buttons" data-astro-cid-b6razrja> <a href="https://app.hirebus.com/survey/register?co=day41thrive" class="btn hirebus-btn" target="_blank" rel="noopener noreferrer" data-astro-cid-b6razrja>
Take the Hirebus Assessment
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-b6razrja": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/assessment/thank-you.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/assessment/thank-you.astro";
const $$url = "/assessment/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$ThankYou,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
