import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$DontGuess = createComponent(($$result, $$props, $$slots) => {
  const BOOK_URL = "https://www.lulu.com/shop/jonathon-broce/dont-guess-thrive-through-storms/paperback/product-459p5j7.html?page=1&pageSize=4";
  const frameworkPoints = [
    {
      letter: "G",
      title: "Grow",
      description: "Plant your SEED and build a solid foundation."
    },
    {
      letter: "U",
      title: "Unleash",
      description: "RISE to unlock potential without micromanaging."
    },
    {
      letter: "E",
      title: "Enhance",
      description: "Find your FLOW and stop spinning your wheels."
    },
    {
      letter: "S",
      title: "Strategize",
      description: "Plan SMART and stop reacting impulsively."
    },
    {
      letter: "S",
      title: "Synchronize",
      description: "Build a cohesive TEAM that works together seamlessly."
    }
  ];
  const bookBenefits = [
    {
      title: "Practical Tools",
      description: "Real-world tactics to grow yourself and your team."
    },
    {
      title: "Relatable Stories",
      description: "Laugh, cringe, and learn from Jonathon's experiences."
    },
    {
      title: "Memorable Framework",
      description: "G.U.E.S.S. is easy to remember and apply."
    },
    {
      title: "Permission to Be Imperfect",
      description: "Embrace your flaws and still thrive."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Don't GUESS - Day 41 Thrive", "data-astro-cid-o7sw4phm": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-o7sw4phm": true })} ${maybeRenderHead()}<main class="dont-guess-page" data-astro-cid-o7sw4phm> <section class="hero" data-astro-cid-o7sw4phm> <div class="gradient-overlay" data-astro-cid-o7sw4phm></div> <div class="container" data-astro-cid-o7sw4phm> <h1 class="animated-title" data-astro-cid-o7sw4phm>🌪️ Don't GUESS, Thrive Through Storms</h1> <p class="subtitle" data-astro-cid-o7sw4phm>Your Leadership Survival Guide</p> <p class="hero-description" data-astro-cid-o7sw4phm>Life throws storms at all of us—tight deadlines, team conflicts, unexpected challenges. But instead of guessing your way through the chaos, why not have a game plan? That's where Jonathon Broce's Don't GUESS, Thrive Through Storms comes in.</p> <div class="hero-cta" data-astro-cid-o7sw4phm> <a${addAttribute(BOOK_URL, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-o7sw4phm>GET A COPY</a> </div> </div> </section> <section class="intro-section" data-astro-cid-o7sw4phm> <div class="container" data-astro-cid-o7sw4phm> <div class="intro-card" data-astro-cid-o7sw4phm> <p data-astro-cid-o7sw4phm>This isn't your typical leadership book filled with jargon and fluff. Jonathon keeps it real with humor, honesty, and practical advice that you can actually use. Whether you're a new manager facing your first crisis or a seasoned leader juggling multiple responsibilities, this book offers insights to help you navigate the storm.</p> </div> </div> </section> <section class="framework-section" data-astro-cid-o7sw4phm> <div class="container" data-astro-cid-o7sw4phm> <h2 data-astro-cid-o7sw4phm>🚀 The G.U.E.S.S. Framework</h2> <p class="section-intro" data-astro-cid-o7sw4phm>Jonathon introduces the G.U.E.S.S. framework to guide you:</p> <div class="framework-grid" data-astro-cid-o7sw4phm> ${frameworkPoints.map((point) => renderTemplate`<div class="framework-card" data-astro-cid-o7sw4phm> <div class="letter" data-astro-cid-o7sw4phm>${point.letter}</div> <h3 data-astro-cid-o7sw4phm>${point.title}</h3> <p data-astro-cid-o7sw4phm>${point.description}</p> </div>`)} </div> <p class="framework-outro" data-astro-cid-o7sw4phm>Each step is filled with actionable strategies, relatable stories, and a touch of sarcasm to keep things interesting.</p> </div> </section> <section class="benefits-section" data-astro-cid-o7sw4phm> <div class="container" data-astro-cid-o7sw4phm> <h2 data-astro-cid-o7sw4phm>📘 Why You Need This Book</h2> <div class="benefits-grid" data-astro-cid-o7sw4phm> ${bookBenefits.map((benefit) => renderTemplate`<div class="benefit-card" data-astro-cid-o7sw4phm> <h3 data-astro-cid-o7sw4phm>${benefit.title}</h3> <p data-astro-cid-o7sw4phm>${benefit.description}</p> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-o7sw4phm> <div class="container" data-astro-cid-o7sw4phm> <div class="cta-card" data-astro-cid-o7sw4phm> <p data-astro-cid-o7sw4phm>If you're ready to stop winging it and start leading with purpose, this book is your compass through the storm.</p> <a${addAttribute(BOOK_URL, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-o7sw4phm>GET A COPY</a> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-o7sw4phm": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/dont-guess.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/dont-guess.astro";
const $$url = "/dont-guess";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DontGuess,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
