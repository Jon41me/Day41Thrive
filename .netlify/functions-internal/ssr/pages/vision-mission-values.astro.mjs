import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                                 */
export { renderers } from '../renderers.mjs';

const $$VisionMissionValues = createComponent(($$result, $$props, $$slots) => {
  const thriveValues = [
    {
      letter: "T",
      title: "Transparency",
      emoji: "\u{1F50D}",
      tagline: "Clarity builds trust.",
      description: "We believe in open, honest, and direct communication. Transparency fosters strong relationships, accountability, and informed decision-making\u2014allowing businesses to grow with confidence."
    },
    {
      letter: "H",
      title: "Humility",
      emoji: "\u{1F91D}",
      tagline: "Stay grounded, stay growing.",
      description: "We lead with a learner's mindset. By recognizing that there's always room for improvement, we approach every challenge with openness, adaptability, and a commitment to continuous growth."
    },
    {
      letter: "R",
      title: "Resilience",
      emoji: "\u26A1",
      tagline: "Strength through challenges.",
      description: "Scaling a business isn't easy\u2014but we thrive under pressure. We embrace obstacles as opportunities, push through setbacks, and build companies that are prepared to withstand any storm."
    },
    {
      letter: "I",
      title: "Inspiration",
      emoji: "\u{1F680}",
      tagline: "Lead by example, uplift by action.",
      description: "We ignite motivation and passion in those we serve. By demonstrating excellence and a relentless pursuit of success, we inspire businesses to reach their full potential."
    },
    {
      letter: "V",
      title: "Value-Driven Impact",
      emoji: "\u{1F3AF}",
      tagline: "Results that matter.",
      description: "Every decision, strategy, and action we take is focused on delivering measurable, meaningful impact. We don't chase vanity metrics\u2014we create real value that drives sustainable growth."
    },
    {
      letter: "E",
      title: "Empowerment",
      emoji: "\u{1F4A1}",
      tagline: "Unlocking potential at every level.",
      description: "Our mission is to equip leaders and teams with the tools, confidence, and strategies to take ownership of their success. We empower businesses to operate independently, scale effectively, and thrive long-term."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Vision, Mission, & Core Values - Day 41 Thrive", "data-astro-cid-ueedjnbp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ueedjnbp": true })} ${maybeRenderHead()}<main class="vision-mission-page" data-astro-cid-ueedjnbp> <section class="hero" data-astro-cid-ueedjnbp> <div class="gradient-overlay" data-astro-cid-ueedjnbp></div> <div class="container" data-astro-cid-ueedjnbp> <h1 class="animated-title" data-astro-cid-ueedjnbp>Vision, Mission, & Core Values</h1> </div> </section> <section class="vision-section" data-astro-cid-ueedjnbp> <div class="container" data-astro-cid-ueedjnbp> <div class="content-card" data-astro-cid-ueedjnbp> <h2 data-astro-cid-ueedjnbp>Vision Statement</h2> <p class="vision-quote" data-astro-cid-ueedjnbp>"Empowering construction businesses to scale with clarity, efficiency, and purpose—making the complicated simple."</p> <p data-astro-cid-ueedjnbp>At DAY 41 Thrive, we envision a world where construction-related companies no longer struggle with inefficiencies, leadership gaps, and operational bottlenecks. We streamline growth by providing expert leadership, proven systems, and strategic execution—so business owners can focus on what they do best while we take care of the rest.</p> <div class="thrive-mindset" data-astro-cid-ueedjnbp> <h3 data-astro-cid-ueedjnbp>We achieve this by fostering a THRIVE mindset:</h3> <ul data-astro-cid-ueedjnbp> <li data-astro-cid-ueedjnbp>✅ Transparency – We build trust through clear and honest communication.</li> <li data-astro-cid-ueedjnbp>✅ Humility – We embrace a growth mindset, always learning and adapting.</li> <li data-astro-cid-ueedjnbp>✅ Resilience – We navigate challenges with strength and determination.</li> <li data-astro-cid-ueedjnbp>✅ Inspiration – We lead by example and ignite motivation in others.</li> <li data-astro-cid-ueedjnbp>✅ Value-Driven Impact – We focus on results that truly matter.</li> <li data-astro-cid-ueedjnbp>✅ Empowerment – We equip businesses with the tools to scale confidently.</li> </ul> </div> </div> </div> </section> <section class="mission-section" data-astro-cid-ueedjnbp> <div class="container" data-astro-cid-ueedjnbp> <div class="content-card" data-astro-cid-ueedjnbp> <h2 data-astro-cid-ueedjnbp>Mission Statement</h2> <p class="mission-quote" data-astro-cid-ueedjnbp>"To provide construction businesses with the leadership, strategy, and systems needed to scale effectively—covering every angle. Through fractional executive services, hands-on consulting, and business optimization, we help owners navigate complexity, eliminate inefficiencies, and build companies that thrive."</p> <p data-astro-cid-ueedjnbp>At DAY 41 Thrive, we don't just advise—we execute. We don't just create strategies—we implement them. We make the complicated simple.</p> </div> </div> </section> <section class="values-section" data-astro-cid-ueedjnbp> <div class="container" data-astro-cid-ueedjnbp> <h2 data-astro-cid-ueedjnbp>DAY 41 Thrive Core Values – THRIVE</h2> <p class="values-intro" data-astro-cid-ueedjnbp>DAY 41 Thrive is built on a foundation that helps businesses THRIVE—not just survive. Our values shape how we lead, strategize, and execute, ensuring that we bring clarity, efficiency, and impact to every business we serve.</p> <div class="values-grid" data-astro-cid-ueedjnbp> ${thriveValues.map((value) => renderTemplate`<div class="value-card" data-astro-cid-ueedjnbp> <div class="value-header" data-astro-cid-ueedjnbp> <span class="value-letter" data-astro-cid-ueedjnbp>${value.letter}</span> <h3 data-astro-cid-ueedjnbp> <span class="value-title" data-astro-cid-ueedjnbp>${value.title}</span> <span class="value-emoji" data-astro-cid-ueedjnbp>${value.emoji}</span> </h3> <p class="value-tagline" data-astro-cid-ueedjnbp>"${value.tagline}"</p> </div> <p class="value-description" data-astro-cid-ueedjnbp>${value.description}</p> </div>`)} </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-ueedjnbp": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/vision-mission-values.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/vision-mission-values.astro";
const $$url = "/vision-mission-values";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$VisionMissionValues,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
