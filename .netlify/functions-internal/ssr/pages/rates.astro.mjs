import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$PricingCard } from '../chunks/PricingCard_DAUTlrB4.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Rates = createComponent(($$result, $$props, $$slots) => {
  const packages = [
    {
      title: "G.U.E.S.S. Foundations",
      description: "Online self-guided training modules designed to help you master the principles of the G.U.E.S.S. Framework at your own pace. This package is perfect for leaders who prefer flexibility and independent learning.",
      pricing: {
        monthly: "$199",
        sixMonth: "$899 (Saves $295)"
      }
    },
    {
      title: "G.U.E.S.S. Masterclass",
      description: "Everything included in Foundations, plus weekly 1-hour group webinars segmented by customer group to foster collaboration and provide personalized guidance in a community setting. Ideal for leaders looking for more interaction and accountability.",
      pricing: {
        monthly: "$499",
        sixMonth: "$2,199 (Saves $795)"
      }
    },
    {
      title: "G.U.E.S.S. Accelerator",
      description: "All the benefits of Masterclass, combined with 1-on-1 weekly coaching sessions tailored to your specific goals and challenges. This package provides intensive, personalized support to fast-track your leadership growth and business results.",
      pricing: {
        monthly: "$2,299",
        sixMonth: "$12,699 (Saves $1,095)"
      }
    },
    {
      title: "G.U.E.S.S. Enterprise Transformation",
      description: "The ultimate transformation package. Includes everything in Accelerator, plus 4 on-site days per month for 12 months, providing hands-on, in-depth support to align and elevate your entire organization. Perfect for enterprises aiming for comprehensive change and high-impact results.",
      pricing: {
        monthly: "Custom Pricing",
        sixMonth: "Starts at $175,000"
      }
    },
    {
      title: "VIP Custom Package",
      description: "For organizations requiring a completely customized approach. Includes bespoke training programs, unlimited access to coaching, and tailored solutions designed specifically for your unique challenges and goals.",
      pricing: {
        monthly: "Contact for Custom Solution"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Day 41 Thrive - Investment Options", "data-astro-cid-v2bdsrr5": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-v2bdsrr5": true })} ${maybeRenderHead()}<main class="rates-page" data-astro-cid-v2bdsrr5> <section class="section" aria-labelledby="rates-title" data-astro-cid-v2bdsrr5> <div class="container" data-astro-cid-v2bdsrr5> <h1 id="rates-title" data-astro-cid-v2bdsrr5>Your Leadership Investment</h1> <p class="intro" data-astro-cid-v2bdsrr5>At Day 41 Thrive, we believe investing in your leadership and team development is the first step toward achieving extraordinary results. Our tailored packages are designed to meet you where you are and help you grow into the leader and organization you aspire to be.</p> <div class="pricing-grid" data-astro-cid-v2bdsrr5> ${packages.map((pkg) => renderTemplate`${renderComponent($$result2, "PricingCard", $$PricingCard, { ...pkg, "data-astro-cid-v2bdsrr5": true })}`)} </div> <div class="cta-section" data-astro-cid-v2bdsrr5> <h2 data-astro-cid-v2bdsrr5>Choose Your Investment in Success</h2> <p data-astro-cid-v2bdsrr5>Your leadership journey begins with the decision to invest in your future. Whether you're building a foundation or ready for a full-scale transformation, Day 41 Thrive has a package designed to help you achieve your goals.</p> <div class="contact-info" data-astro-cid-v2bdsrr5> <a href="mailto:day41thrive@gmail.com" class="contact-link" data-astro-cid-v2bdsrr5>📩 day41thrive@gmail.com</a> <a href="tel:877-DAY-41ME" class="contact-link" data-astro-cid-v2bdsrr5>📞 877-DAY-41ME</a> </div> <div class="founder-links" data-astro-cid-v2bdsrr5> <a href="https://www.jonathonbroce.com" target="_blank" rel="noopener noreferrer" class="founder-link" data-astro-cid-v2bdsrr5>
Jonathon Broce - www.jonathonbroce.com
</a> <a href="https://www.jeffvalder.com" target="_blank" rel="noopener noreferrer" class="founder-link" data-astro-cid-v2bdsrr5>
Jeff Valder - www.jeffvalder.com
</a> </div> <p class="closing" data-astro-cid-v2bdsrr5>Let's thrive together!</p> </div> </div> </section> </main> ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/rates.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/rates.astro";
const $$url = "/rates";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Rates,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
