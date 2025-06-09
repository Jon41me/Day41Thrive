import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Programs = createComponent(($$result, $$props, $$slots) => {
  const programs = [
    {
      title: "Beyond 41 \u2013 Because thriving starts on Day 41 and never stops.",
      description: "Build high-performance teams and develop effective leadership skills.",
      link: "/programs/leadership-consulting"
    },
    {
      title: "The G.U.E.S.S. Framework",
      description: "Master our comprehensive leadership model for action and success through Growth, Unleashing potential, Enhancement, Strategy, and Synchronization.",
      link: "/programs/guess-framework"
    },
    {
      title: "Repair vs. Replace Strategy",
      description: "Learn how to maximize lead generation and convert repair opportunities into full replacements.",
      link: "/programs/repair-replace-strategy"
    },
    {
      title: "Flip the Script",
      description: "Transform your business from insurance-dependent to retail-focused and thrive year-round.",
      link: "/programs/flip-script"
    },
    {
      title: "The 4 C's of Business Framework",
      description: "Master the essential pillars of business success: Capture, Convert, Create, and Control.",
      link: "/programs/four-cs-framework"
    },
    {
      title: "Winning Sales Compass",
      description: "Empower your team with proven sales systems and training to close more deals and build lasting customer relationships.",
      link: "/programs/winning-sales-compass"
    },
    {
      title: "The Profit Multiplier Formula",
      description: "Turning one job into many with a multi-channel approach that keeps your brand in front of homeowners.",
      link: "/programs/omni-local-marketing"
    },
    {
      title: "Win with Warranties",
      description: "Elevating value and peace of mind with industry-leading warranty programs that protect your business and delight your customers.",
      link: "/programs/gaf-golden-pledge"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Programs - Day 41 Thrive", "data-astro-cid-iru3ew3w": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-iru3ew3w": true })} ${maybeRenderHead()}<main class="programs-page" data-astro-cid-iru3ew3w> <section class="hero" data-astro-cid-iru3ew3w> <div class="gradient-overlay" data-astro-cid-iru3ew3w></div> <div class="container" data-astro-cid-iru3ew3w> <h1 class="animated-title" data-astro-cid-iru3ew3w>Our Programs</h1> <p class="hero-description" data-astro-cid-iru3ew3w>Discover our comprehensive suite of programs designed to help you and your team thrive in today's challenging business environment.</p> </div> </section> <section class="scaling-framework-section" data-astro-cid-iru3ew3w> <div class="container" data-astro-cid-iru3ew3w> <div class="scaling-card" data-astro-cid-iru3ew3w> <h2 class="scaling-title" data-astro-cid-iru3ew3w>We help Contractors with the proven framework to scale from $2M to $10M in under 3 years</h2> <p class="scaling-description" data-astro-cid-iru3ew3w>Our proven methodologies and strategic frameworks are specifically designed to help construction and home service businesses achieve sustainable growth and operational excellence.</p> </div> </div> </section> <section class="programs-section" data-astro-cid-iru3ew3w> <div class="container" data-astro-cid-iru3ew3w> <div class="programs-grid" data-astro-cid-iru3ew3w> ${programs.map((program) => renderTemplate`<div class="program-card" data-astro-cid-iru3ew3w> <h2 data-astro-cid-iru3ew3w>${program.title}</h2> <p data-astro-cid-iru3ew3w>${program.description}</p> <a${addAttribute(program.link, "href")} class="btn" data-astro-cid-iru3ew3w>Learn More</a> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-iru3ew3w> <div class="container" data-astro-cid-iru3ew3w> <h2 data-astro-cid-iru3ew3w>Ready to Transform Your Business?</h2> <p data-astro-cid-iru3ew3w>Let's discuss how our programs can help you achieve your goals.</p> <a href="/contact" class="btn" data-astro-cid-iru3ew3w>Contact Us</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-iru3ew3w": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/programs.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/programs.astro";
const $$url = "/programs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Programs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
