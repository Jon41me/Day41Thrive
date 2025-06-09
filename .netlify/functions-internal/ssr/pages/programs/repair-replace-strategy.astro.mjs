import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                                      */
export { renderers } from '../../renderers.mjs';

const $$RepairReplaceStrategy = createComponent(($$result, $$props, $$slots) => {
  const inspectionApproach = [
    {
      title: "Comprehensive Roof Inspection",
      items: [
        "Document problem areas with photos and videos",
        "Show homeowners the condition of their shingles, flashing, and underlayment"
      ]
    },
    {
      title: "Attic Inspection",
      items: [
        "Identify ventilation, moisture, and insulation issues",
        "Show how these issues can cause long-term structural damage"
      ]
    },
    {
      title: "Educate the Homeowner",
      items: [
        "Present a side-by-side comparison of repair costs vs. replacement value",
        "Explain that small repairs are often temporary solutions"
      ]
    },
    {
      title: "Highlight Long-Term Benefits",
      items: [
        "Emphasize warranty coverage with full replacement",
        "Show the cost savings over time"
      ]
    }
  ];
  const sellingPoints = [
    {
      message: "We'll Start with a Repair First",
      explanation: "This lowers resistance and helps the homeowner feel in control."
    },
    {
      message: "Only 25% of Roofs Qualify for Repairs",
      explanation: "This frames replacement as a natural and expected outcome."
    },
    {
      message: "A Repair Might Buy You Time, But It Won't Solve the Problem",
      explanation: "Show them the long-term cost of repeated repairs."
    },
    {
      message: "Your Roof Protects Everything Under It",
      explanation: "Reinforce the investment mindset by discussing home value."
    },
    {
      message: "A Replacement Comes with Peace of Mind",
      explanation: "Highlight warranties and the elimination of future problems."
    }
  ];
  const benefits = [
    {
      title: "Eases Homeowner Anxiety",
      description: "Customers are more comfortable saying yes to a small repair rather than committing to a major investment immediately."
    },
    {
      title: "Builds Credibility",
      description: "Offering repairs shows that your company isn't just pushing a sale; it proves that you are honest, knowledgeable, and have the homeowner's best interest in mind."
    },
    {
      title: "Creates a Natural Transition",
      description: "A full inspection often reveals that a replacement is the more cost-effective and permanent solution."
    },
    {
      title: "Gets Your Foot in the Door",
      description: "Repairs allow you to establish a relationship with the homeowner and lay the groundwork for a future sale."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Repair vs. Replace Strategy - Day 41 Thrive", "data-astro-cid-4ppmh3o7": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-4ppmh3o7": true })} ${maybeRenderHead()}<main class="program-page" data-astro-cid-4ppmh3o7> <section class="hero" data-astro-cid-4ppmh3o7> <div class="gradient-overlay" data-astro-cid-4ppmh3o7></div> <div class="container" data-astro-cid-4ppmh3o7> <h1 class="animated-title" data-astro-cid-4ppmh3o7>Repair vs. Replace Strategy</h1> <p class="hero-description" data-astro-cid-4ppmh3o7>Maximize Lead Generation & Convert Repairs into Replacements</p> </div> </section> <section class="intro-section" data-astro-cid-4ppmh3o7> <div class="container" data-astro-cid-4ppmh3o7> <div class="intro-card" data-astro-cid-4ppmh3o7> <h2 data-astro-cid-4ppmh3o7>Explore the Strategy</h2> <p data-astro-cid-4ppmh3o7>At DAY 41 THRIVE, we teach contractors how to use repair services as a strategic entry point while transitioning homeowners toward full roof replacements. Most homeowners prefer to fix rather than replace due to cost concerns and anxiety about large-scale projects. However, only about 25% of roofs are truly repairable, making the transition to replacement the natural next step when handled correctly.</p> </div> </div> </section> <section class="strategy-section" data-astro-cid-4ppmh3o7> <div class="container" data-astro-cid-4ppmh3o7> <h2 data-astro-cid-4ppmh3o7>The Repair-First Mentality: A Strategic Sales Approach</h2> <p class="section-intro" data-astro-cid-4ppmh3o7>Many contractors struggle to sell replacements upfront, but repairs provide a non-threatening way to build trust and open the conversation. The key is to position the repair as an opportunity for a full roof and attic inspection, allowing you to educate the homeowner on the long-term risks and benefits of a full replacement.</p> <div class="benefits-grid" data-astro-cid-4ppmh3o7> ${benefits.map((benefit) => renderTemplate`<div class="benefit-card" data-astro-cid-4ppmh3o7> <h3 data-astro-cid-4ppmh3o7>${benefit.title}</h3> <p data-astro-cid-4ppmh3o7>${benefit.description}</p> </div>`)} </div> </div> </section> <section class="inspection-section" data-astro-cid-4ppmh3o7> <div class="container" data-astro-cid-4ppmh3o7> <h2 data-astro-cid-4ppmh3o7>The Full Inspection Approach</h2> <p class="section-intro" data-astro-cid-4ppmh3o7>To successfully transition from repair to replacement, every appointment must include a full roof and attic inspection. The goal is to educate the homeowner and help them understand why a replacement is often the smarter long-term choice.</p> <div class="inspection-grid" data-astro-cid-4ppmh3o7> ${inspectionApproach.map((approach) => renderTemplate`<div class="inspection-card" data-astro-cid-4ppmh3o7> <h3 data-astro-cid-4ppmh3o7>${approach.title}</h3> <ul data-astro-cid-4ppmh3o7> ${approach.items.map((item) => renderTemplate`<li data-astro-cid-4ppmh3o7>${item}</li>`)} </ul> </div>`)} </div> </div> </section> <section class="messaging-section" data-astro-cid-4ppmh3o7> <div class="container" data-astro-cid-4ppmh3o7> <h2 data-astro-cid-4ppmh3o7>Selling the Replacement: The Right Messaging</h2> <p class="section-intro" data-astro-cid-4ppmh3o7>Homeowners need logical and emotional reassurance before committing to a full replacement. Your role is to guide them through the decision-making process in a way that feels natural and stress-free.</p> <div class="messaging-grid" data-astro-cid-4ppmh3o7> ${sellingPoints.map((point) => renderTemplate`<div class="message-card" data-astro-cid-4ppmh3o7> <h3 data-astro-cid-4ppmh3o7>"${point.message}"</h3> <p data-astro-cid-4ppmh3o7>${point.explanation}</p> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-4ppmh3o7> <div class="container" data-astro-cid-4ppmh3o7> <h2 data-astro-cid-4ppmh3o7>Ready to Transform Your Business?</h2> <p data-astro-cid-4ppmh3o7>Let's build a lead generation strategy that doesn't just bring in customers but also maximizes every sales opportunity.</p> <a href="mailto:hello@day41thrive.com" class="btn" data-astro-cid-4ppmh3o7>Get Started Today</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-4ppmh3o7": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/programs/repair-replace-strategy.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/programs/repair-replace-strategy.astro";
const $$url = "/programs/repair-replace-strategy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RepairReplaceStrategy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
