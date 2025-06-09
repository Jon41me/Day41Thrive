import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$PricingCard } from '../chunks/PricingCard_DAUTlrB4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Plans = createComponent(($$result, $$props, $$slots) => {
  const packages = [
    {
      title: "THRIVE Foundations",
      description: "Online self-guided training modules designed to help you master the principles of the THRIVE Framework at your own pace. This package is perfect for leaders who prefer flexibility and independent learning.",
      pricing: {
        weekly: "$41",
        monthly: "$175"
      }
    },
    {
      title: "THRIVE Masterclass",
      description: "Everything included in Foundations ($41/week) plus weekly 1-hour group webinars segmented by customer group to foster collaboration and provide personalized guidance in a community setting. Masterclass $41 + Foundations $41 = $82 week. Ideal for leaders looking for more interaction and accountability.",
      pricing: {
        weekly: "$82",
        monthly: "$350"
      }
    },
    {
      title: "THRIVE Accelerator",
      description: "All the benefits of Masterclass, combined with 1-on-1 weekly coaching sessions tailored to your specific goals and challenges. Foundations $41 + Masterclass $41 + Accelerator $410 = $492 week. This package provides intensive, personalized support to fast-track your leadership growth and business results.",
      pricing: {
        weekly: "$492",
        monthly: "$2,132"
      }
    },
    {
      title: "THRIVE Enterprise Transformation",
      description: "The ultimate transformation package includes everything in Foundations, Masterclass, and Accelerator, plus 4 FULL on-site days per month for 6 - 12 months, providing hands-on, in-depth support to align and elevate your entire organization. It is perfect for enterprises aiming for comprehensive change and high-impact results.",
      pricing: {
        weekly: "$9,500",
        monthly: "$41,000"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Day 41 Thrive - Investment Plans", "data-astro-cid-lqkqhd7h": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-lqkqhd7h": true })} ${maybeRenderHead()}<main class="rates-page" data-astro-cid-lqkqhd7h> <section class="section" aria-labelledby="rates-title" data-astro-cid-lqkqhd7h> <div class="container" data-astro-cid-lqkqhd7h> <h1 id="rates-title" data-astro-cid-lqkqhd7h>Your Leadership Investment</h1> <p class="intro" data-astro-cid-lqkqhd7h>At Day 41 Thrive, we believe investing in your leadership and team development is the first step toward achieving extraordinary results. Our tailored packages are designed to meet you where you are and help you grow into the leader and organization you aspire to be.</p> <div class="pricing-grid" data-astro-cid-lqkqhd7h> ${packages.map((pkg) => renderTemplate`${renderComponent($$result2, "PricingCard", $$PricingCard, { ...pkg, "data-astro-cid-lqkqhd7h": true })}`)} </div> <div class="cta-section" data-astro-cid-lqkqhd7h> <h2 data-astro-cid-lqkqhd7h>Choose Your Investment in Success</h2> <p data-astro-cid-lqkqhd7h>Your leadership journey begins with the decision to invest in your future. Whether you're building a foundation or ready for a full-scale transformation, Day 41 Thrive has a package designed to help you achieve your goals.</p> <a href="/contact" class="btn" data-astro-cid-lqkqhd7h>Contact Us</a> </div> </div> </section> </main> ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/plans.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/plans.astro";
const $$url = "/plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Plans,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
