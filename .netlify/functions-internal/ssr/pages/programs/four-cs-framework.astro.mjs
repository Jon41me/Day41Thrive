import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                                */
export { renderers } from '../../renderers.mjs';

const $$FourCsFramework = createComponent(($$result, $$props, $$slots) => {
  const pillars = [
    {
      title: "Capture",
      subtitle: "Marketing",
      description: "The first step in any successful business is capturing the attention of your ideal audience. With a focused marketing strategy, you can ensure that the right people find your services at the right time.",
      points: [
        "Branding that stands out in your market.",
        "Digital marketing strategies, including SEO, PPC, and social media campaigns.",
        "Lead generation systems to keep your pipeline full.",
        "Capture ensures you are not just getting leads but the right leads."
      ]
    },
    {
      title: "Convert",
      subtitle: "Sales",
      description: "Once you have captured attention, it is time to convert those prospects into paying customers. Our sales systems and training programs are designed to help your team close more deals with confidence.",
      points: [
        "Proven sales presentations tailored to your industry.",
        'Exclusive trademarked systems, like "We Do This Every Shingle Day!"',
        "Customer engagement strategies that foster trust and loyalty.",
        "Convert empowers your team to maximize every opportunity."
      ]
    },
    {
      title: "Create",
      subtitle: "Production",
      description: "Production is where your business truly shines. It is not just about delivering a product or service\u2014it is about creating an exceptional experience that keeps customers coming back.",
      points: [
        "Streamlined production processes for efficiency and quality.",
        "Scheduling and resource management to meet deadlines.",
        "Customer satisfaction strategies to ensure every job is a success.",
        "Create helps you build a reputation for excellence."
      ]
    },
    {
      title: "Control",
      subtitle: "Admin",
      description: "Effective administration and management are the backbone of any thriving business. By implementing the right tools and systems, you can take control of your operations and make data-driven decisions.",
      points: [
        "Financial management, including budgeting and forecasting.",
        "Tracking KPIs to measure performance.",
        "Workflow automation to save time and reduce errors.",
        "Control gives you the clarity to grow with confidence."
      ]
    }
  ];
  const benefits = [
    {
      title: "Streamlined Processes",
      description: "Optimize your operations for maximum efficiency."
    },
    {
      title: "Increased Revenue",
      description: "Boost your bottom line through better marketing and sales."
    },
    {
      title: "Better Control",
      description: "Gain clarity and confidence in your business decisions."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The 4 C's of Business Framework - Day 41 Thrive", "data-astro-cid-aip2zaxb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-aip2zaxb": true })} ${maybeRenderHead()}<main class="program-page" data-astro-cid-aip2zaxb> <section class="hero" data-astro-cid-aip2zaxb> <div class="gradient-overlay" data-astro-cid-aip2zaxb></div> <div class="container" data-astro-cid-aip2zaxb> <h1 class="animated-title" data-astro-cid-aip2zaxb>The 4 C's of Business Framework</h1> <p class="hero-description" data-astro-cid-aip2zaxb>Transforming Construction and Home Service Companies</p> </div> </section> <section class="intro-section" data-astro-cid-aip2zaxb> <div class="container" data-astro-cid-aip2zaxb> <div class="intro-card" data-astro-cid-aip2zaxb> <h2 data-astro-cid-aip2zaxb>Explore the Framework</h2> <p data-astro-cid-aip2zaxb>At DAY 41 THRIVE, we understand that running a successful construction or home service business requires a solid foundation and a clear process. The 4 C's—Capture, Convert, Create, Control—represent the essential pillars of a thriving business.</p> </div> </div> </section> <section class="pillars-section" data-astro-cid-aip2zaxb> <div class="container" data-astro-cid-aip2zaxb> <div class="pillars-grid" data-astro-cid-aip2zaxb> ${pillars.map((pillar) => renderTemplate`<div class="pillar-card" data-astro-cid-aip2zaxb> <div class="pillar-header" data-astro-cid-aip2zaxb> <h2 data-astro-cid-aip2zaxb> <span class="pillar-letter" data-astro-cid-aip2zaxb>${pillar.title[0]}</span> ${pillar.title} </h2> <h3 data-astro-cid-aip2zaxb>${pillar.subtitle}</h3> </div> <p class="pillar-description" data-astro-cid-aip2zaxb>${pillar.description}</p> <ul class="pillar-points" data-astro-cid-aip2zaxb> ${pillar.points.map((point) => renderTemplate`<li data-astro-cid-aip2zaxb>${point}</li>`)} </ul> </div>`)} </div> </div> </section> <section class="benefits-section" data-astro-cid-aip2zaxb> <div class="container" data-astro-cid-aip2zaxb> <h2 data-astro-cid-aip2zaxb>Why the 4 C's Framework Works</h2> <div class="benefits-grid" data-astro-cid-aip2zaxb> ${benefits.map((benefit) => renderTemplate`<div class="benefit-card" data-astro-cid-aip2zaxb> <h3 data-astro-cid-aip2zaxb>${benefit.title}</h3> <p data-astro-cid-aip2zaxb>${benefit.description}</p> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-aip2zaxb> <div class="container" data-astro-cid-aip2zaxb> <h2 data-astro-cid-aip2zaxb>Ready to Master the 4 C's?</h2> <p data-astro-cid-aip2zaxb>Let us work together to capture opportunities, convert prospects, create excellence, and take control of your business growth.</p> <a href="mailto:hello@day41thrive.com" class="btn" data-astro-cid-aip2zaxb>Get Started Today</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-aip2zaxb": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/programs/four-cs-framework.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/programs/four-cs-framework.astro";
const $$url = "/programs/four-cs-framework";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$FourCsFramework,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
