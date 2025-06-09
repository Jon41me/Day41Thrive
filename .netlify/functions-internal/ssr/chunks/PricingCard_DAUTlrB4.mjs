import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$PricingCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PricingCard;
  const { title, description, pricing } = Astro2.props;
  function createEmailSubject(title2) {
    return encodeURIComponent(`Interest in ${title2} Package`);
  }
  function createEmailBody(title2, description2, pricing2) {
    const body = `
Hello Day 41 Thrive team,

I am interested in the ${title2} package.

Package Details:
- Program: ${title2}
- Description: ${description2}
- Investment: ${pricing2.weekly} weekly / ${pricing2.monthly} monthly

I would like to learn more about this program and discuss how it can help me achieve my leadership goals.

Looking forward to your response.

Best regards`;
    return encodeURIComponent(body);
  }
  return renderTemplate`${maybeRenderHead()}<div class="pricing-card" data-astro-cid-5mb67dfd> <div class="card-content" data-astro-cid-5mb67dfd> <div class="card-info" data-astro-cid-5mb67dfd> <h3 data-astro-cid-5mb67dfd>${title}</h3> <p class="description" data-astro-cid-5mb67dfd>${description}</p> </div> <div class="pricing-details" data-astro-cid-5mb67dfd> <div class="price-container" data-astro-cid-5mb67dfd> <div class="price" data-astro-cid-5mb67dfd> <span class="amount" data-astro-cid-5mb67dfd>${pricing.weekly}</span> <span class="period" data-astro-cid-5mb67dfd>per week</span> </div> <div class="price" data-astro-cid-5mb67dfd> <span class="amount" data-astro-cid-5mb67dfd>${pricing.monthly}</span> <span class="period" data-astro-cid-5mb67dfd>per month</span> </div> </div> <div class="button-container" data-astro-cid-5mb67dfd> <a${addAttribute(`mailto:hello@day41thrive.com?subject=${createEmailSubject(title)}&body=${createEmailBody(title, description, pricing)}`, "href")} class="btn invest-btn" data-astro-cid-5mb67dfd>
Invest In Your Team
</a> </div> </div> <p class="disclaimer" data-astro-cid-5mb67dfd>*Billed monthly. Minimum 6-month commitment required.</p> </div> </div> `;
}, "/Users/sandy/Downloads/project 2/src/components/PricingCard.astro", void 0);

export { $$PricingCard as $ };
