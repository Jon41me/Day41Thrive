import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                                    */
export { renderers } from '../../renderers.mjs';

const $$LeadershipConsulting = createComponent(($$result, $$props, $$slots) => {
  const trainingPrograms = [
    {
      title: "Leadership and Owner Training",
      description: "Take your leadership skills to the next level with training designed specifically for business owners and executives."
    },
    {
      title: "Kind, True, Helpful Communication",
      description: "Learn to communicate with intention using our proven framework for clear, respectful, and efficient team interactions."
    },
    {
      title: "Customer Conflict Resolution",
      description: "Master proven techniques to handle customer concerns and turn challenges into opportunities."
    },
    {
      title: "Employee Accountability",
      description: "Implement structured evaluation methods that drive employee growth while maintaining fairness."
    },
    {
      title: "Empowering Decision-Making",
      description: "Build trust and reduce micromanagement by empowering your team to make informed decisions."
    },
    {
      title: "AEP Model Implementation",
      description: "Evaluate team members based on Attitude, Effort, and Performance for measurable accountability."
    }
  ];
  const benefits = [
    "Build stronger, more accountable teams that require less oversight.",
    "Improve communication and conflict resolution skills.",
    "Foster a positive work culture where employees take ownership.",
    "Create clear expectations and measurable performance standards.",
    "Develop confident leaders who can grow with your business."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beyond 41 \u2013 Because thriving starts on Day 41 and never stops. - Day 41 Thrive", "data-astro-cid-7c5zns65": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-7c5zns65": true })} ${maybeRenderHead()}<main class="program-page" data-astro-cid-7c5zns65> <section class="hero" data-astro-cid-7c5zns65> <div class="gradient-overlay" data-astro-cid-7c5zns65></div> <div class="container" data-astro-cid-7c5zns65> <h1 class="animated-title" data-astro-cid-7c5zns65>Beyond 41 – Because thriving starts on Day 41 and never stops.</h1> <p class="hero-description" data-astro-cid-7c5zns65>Elevate Your Leadership: Build a High-Performance Team</p> </div> </section> <section class="intro-section" data-astro-cid-7c5zns65> <div class="container" data-astro-cid-7c5zns65> <div class="intro-card" data-astro-cid-7c5zns65> <h2 data-astro-cid-7c5zns65>Explore Our Programs</h2> <p data-astro-cid-7c5zns65>At DAY 41 THRIVE, we believe that great leadership is the foundation of any successful business. Whether you're a business owner, executive, or team leader, effective leadership is the key to growth, accountability, and long-term success.</p> </div> </div> </section> <section class="programs-section" data-astro-cid-7c5zns65> <div class="container" data-astro-cid-7c5zns65> <h2 data-astro-cid-7c5zns65>Our Leadership Training Programs</h2> <p class="section-intro" data-astro-cid-7c5zns65>We offer a comprehensive leadership development approach that focuses on building strong, self-sufficient teams while fostering a culture of accountability, clarity, and growth.</p> <div class="programs-grid" data-astro-cid-7c5zns65> ${trainingPrograms.map((program) => renderTemplate`<div class="program-card" data-astro-cid-7c5zns65> <h3 data-astro-cid-7c5zns65>${program.title}</h3> <p data-astro-cid-7c5zns65>${program.description}</p> </div>`)} </div> </div> </section> <section class="benefits-section" data-astro-cid-7c5zns65> <div class="container" data-astro-cid-7c5zns65> <h2 data-astro-cid-7c5zns65>Why Choose DAY 41 THRIVE Leadership Consulting?</h2> <div class="benefits-grid" data-astro-cid-7c5zns65> ${benefits.map((benefit) => renderTemplate`<div class="benefit-card" data-astro-cid-7c5zns65> <p data-astro-cid-7c5zns65>${benefit}</p> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-7c5zns65> <div class="container" data-astro-cid-7c5zns65> <h2 data-astro-cid-7c5zns65>Ready to Elevate Your Leadership?</h2> <p data-astro-cid-7c5zns65>Our customized leadership consulting programs are designed to fit the unique challenges of your business.</p> <a href="mailto:hello@day41thrive.com" class="btn" data-astro-cid-7c5zns65>Start Your Leadership Journey</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-7c5zns65": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/programs/leadership-consulting.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/programs/leadership-consulting.astro";
const $$url = "/programs/leadership-consulting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$LeadershipConsulting,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
