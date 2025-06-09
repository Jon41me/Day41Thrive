import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$GrowthGauge = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      icon: "\u{1F3AF}",
      title: "Uncover Hidden Opportunities",
      description: "Identify untapped growth potential in your business"
    },
    {
      icon: "\u{1F4CA}",
      title: "Get Actionable Insights",
      description: "Receive our experience based expertise tailored to your situation"
    },
    {
      icon: "\u26A1",
      title: "Quick Implementation",
      description: "Complete in just 11 minutes and get instant results"
    },
    {
      icon: "\u{1F512}",
      title: "100% Free Assessment",
      description: "No credit card required, no strings attached"
    }
  ];
  const areas = [
    {
      letter: "C",
      title: "Capture",
      subtitle: "Marketing",
      description: "Evaluate your lead generation and brand presence"
    },
    {
      letter: "C",
      title: "Convert",
      subtitle: "Sales",
      description: "Analyze your sales process and closing strategies"
    },
    {
      letter: "C",
      title: "Create",
      subtitle: "Production",
      description: "Review your operational efficiency and delivery"
    },
    {
      letter: "C",
      title: "Control",
      subtitle: "Admin",
      description: "Assess your systems, processes, and financial health"
    },
    {
      letter: "+1",
      title: "Culture",
      subtitle: "People",
      description: "Measure team alignment and leadership effectiveness"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Growth Gauge - Day 41 Thrive", "data-astro-cid-7m7rif4n": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-7m7rif4n": true })} ${maybeRenderHead()}<main class="growth-gauge-page" data-astro-cid-7m7rif4n> <section class="hero" data-astro-cid-7m7rif4n> <div class="gradient-overlay" data-astro-cid-7m7rif4n></div> <div class="container" data-astro-cid-7m7rif4n> <div class="hero-content" data-astro-cid-7m7rif4n> <h1 class="animated-title" data-astro-cid-7m7rif4n> <span class="highlight" data-astro-cid-7m7rif4n>KNOW BEFORE YOU GROW</span> <span class="subtitle" data-astro-cid-7m7rif4n>FREE Growth Gauge</span> </h1> <p class="hero-description" data-astro-cid-7m7rif4n>
Discover exactly where your contracting business stands and what it needs to scale—in just 11 minutes. These next 11 minutes could save you 11 years or more!
</p> <div class="cta-primary" data-astro-cid-7m7rif4n> <a href="/assessment/start" class="btn start-btn" data-astro-cid-7m7rif4n>Start Growth Gauge</a> <p class="no-credit-card" data-astro-cid-7m7rif4n>No credit card required • Instant results</p> </div> </div> </div> </section> <section class="benefits-section" data-astro-cid-7m7rif4n> <div class="container" data-astro-cid-7m7rif4n> <div class="benefits-grid" data-astro-cid-7m7rif4n> ${benefits.map((benefit) => renderTemplate`<div class="benefit-card" data-astro-cid-7m7rif4n> <span class="benefit-icon" data-astro-cid-7m7rif4n>${benefit.icon}</span> <h3 data-astro-cid-7m7rif4n>${benefit.title}</h3> <p data-astro-cid-7m7rif4n>${benefit.description}</p> </div>`)} </div> </div> </section> <section class="framework-section" data-astro-cid-7m7rif4n> <div class="container" data-astro-cid-7m7rif4n> <h2 data-astro-cid-7m7rif4n>The 4+1 C's Framework</h2> <p class="framework-intro" data-astro-cid-7m7rif4n>Get a comprehensive analysis across these 5 critical areas:</p> <div class="areas-grid" data-astro-cid-7m7rif4n> ${areas.map((area) => renderTemplate`<div class="area-card" data-astro-cid-7m7rif4n> <div class="area-header" data-astro-cid-7m7rif4n> <span class="area-letter" data-astro-cid-7m7rif4n>${area.letter}</span> <div class="area-titles" data-astro-cid-7m7rif4n> <h3 data-astro-cid-7m7rif4n>${area.title}</h3> <span class="area-subtitle" data-astro-cid-7m7rif4n>${area.subtitle}</span> </div> </div> <p data-astro-cid-7m7rif4n>${area.description}</p> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-7m7rif4n> <div class="container" data-astro-cid-7m7rif4n> <div class="cta-card" data-astro-cid-7m7rif4n> <h2 data-astro-cid-7m7rif4n>Ready to Scale Your Business?</h2> <p class="cta-description" data-astro-cid-7m7rif4n>
Join the contractors who've used this assessment to identify their growth opportunities and build stronger businesses.
</p> <div class="cta-features" data-astro-cid-7m7rif4n> <span data-astro-cid-7m7rif4n>✓ 41 Strategic Questions</span> <span data-astro-cid-7m7rif4n>✓ Experience Based Analysis</span> <span data-astro-cid-7m7rif4n>✓ Actionable Next Steps</span> </div> <a href="/assessment/start" class="btn start-btn" data-astro-cid-7m7rif4n>Start Growth Gauge</a> <p class="time-estimate" data-astro-cid-7m7rif4n>⏱️ Takes only 11 minutes to complete</p> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-7m7rif4n": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/growth-gauge.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/growth-gauge.astro";
const $$url = "/growth-gauge";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$GrowthGauge,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
