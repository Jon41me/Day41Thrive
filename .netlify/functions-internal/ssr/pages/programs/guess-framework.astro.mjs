import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$GuessFramework = createComponent(($$result, $$props, $$slots) => {
  const framework = [
    {
      letter: "G",
      title: "Grow",
      subtitle: "Plant Your SEED \u{1F331}",
      points: [
        {
          title: "Self-Reflect",
          description: "Identify areas for improvement and recognize your strengths."
        },
        {
          title: "Expand",
          description: "Broaden your knowledge, seek mentorship, and explore new ideas."
        },
        {
          title: "Evolve",
          description: "Adapt to challenges, embrace change, and refine your skills."
        },
        {
          title: "Develop",
          description: "Take intentional steps toward your goals with consistent action."
        }
      ]
    },
    {
      letter: "U",
      title: "Unleash",
      subtitle: "RISE to Your Potential \u{1F680}",
      points: [
        {
          title: "Recognize",
          description: "Identify hidden talents and strengths within your team."
        },
        {
          title: "Inspire",
          description: "Motivate and encourage action with a compelling vision."
        },
        {
          title: "Support",
          description: "Provide guidance, resources, and a safe space for growth."
        },
        {
          title: "Empower",
          description: "Delegate responsibilities and trust your team to take ownership."
        }
      ]
    },
    {
      letter: "E",
      title: "Enhance",
      subtitle: "Find Your FLOW \u26A1",
      points: [
        {
          title: "Focus",
          description: "Prioritize the tasks that move the needle."
        },
        {
          title: "Leverage",
          description: "Use technology, tools, and systems to work smarter."
        },
        {
          title: "Optimize",
          description: "Streamline processes and eliminate inefficiencies."
        },
        {
          title: "Work Smart",
          description: "Avoid burnout by balancing effort with results."
        }
      ]
    },
    {
      letter: "S",
      title: "Strategize",
      subtitle: "SMART Planning for Success \u{1F4C8}",
      points: [
        {
          title: "Specific",
          description: "Define clear and precise goals."
        },
        {
          title: "Measurable",
          description: "Establish key performance indicators (KPIs) to track progress."
        },
        {
          title: "Achievable",
          description: "Set realistic goals that push the team forward."
        },
        {
          title: "Relevant",
          description: "Align objectives with the bigger picture."
        },
        {
          title: "Time-bound",
          description: "Set deadlines to create accountability and momentum."
        }
      ]
    },
    {
      letter: "S",
      title: "Synchronize",
      subtitle: "Build Your TEAM \u{1F91D}",
      points: [
        {
          title: "Trust",
          description: "Foster open communication and reliability."
        },
        {
          title: "Engage",
          description: "Actively involve every team member."
        },
        {
          title: "Align",
          description: "Ensure everyone is working toward a shared vision."
        },
        {
          title: "Mobilize",
          description: "Take coordinated action to achieve goals."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The G.U.E.S.S. Framework - Day 41 Thrive", "data-astro-cid-66oktjcp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-66oktjcp": true })} ${maybeRenderHead()}<main class="program-page" data-astro-cid-66oktjcp> <section class="hero" data-astro-cid-66oktjcp> <div class="gradient-overlay" data-astro-cid-66oktjcp></div> <div class="container" data-astro-cid-66oktjcp> <h1 class="animated-title" data-astro-cid-66oktjcp>The G.U.E.S.S. Framework</h1> <p class="hero-description" data-astro-cid-66oktjcp>A Leadership Model for Action and Success</p> </div> </section> <section class="intro-section" data-astro-cid-66oktjcp> <div class="container" data-astro-cid-66oktjcp> <div class="intro-card" data-astro-cid-66oktjcp> <h2 data-astro-cid-66oktjcp>Leadership Excellence Through G.U.E.S.S.</h2> <p data-astro-cid-66oktjcp>Leadership is not just about making decisions—it's about inspiring growth, unlocking potential, optimizing efficiency, developing clear strategies, and fostering teamwork. That's where the G.U.E.S.S. Framework comes in.</p> <div class="framework-overview" data-astro-cid-66oktjcp> <div class="letter-grid" data-astro-cid-66oktjcp> ${framework.map((item) => renderTemplate`<div class="letter-item" data-astro-cid-66oktjcp> <span class="letter" data-astro-cid-66oktjcp>${item.letter}</span> <span class="word" data-astro-cid-66oktjcp>${item.title}</span> </div>`)} </div> </div> </div> </div> </section> <section class="framework-section" data-astro-cid-66oktjcp> <div class="container" data-astro-cid-66oktjcp> ${framework.map((item) => renderTemplate`<div class="framework-card" data-astro-cid-66oktjcp> <div class="card-header" data-astro-cid-66oktjcp> <span class="letter" data-astro-cid-66oktjcp>${item.letter}</span> <div class="title-group" data-astro-cid-66oktjcp> <h2 data-astro-cid-66oktjcp>${item.title}</h2> <h3 data-astro-cid-66oktjcp>${item.subtitle}</h3> </div> </div> <div class="points-grid" data-astro-cid-66oktjcp> ${item.points.map((point) => renderTemplate`<div class="point-card" data-astro-cid-66oktjcp> <h4 data-astro-cid-66oktjcp>${point.title}</h4> <p data-astro-cid-66oktjcp>${point.description}</p> </div>`)} </div> </div>`)} </div> </section> <section class="cta-section" data-astro-cid-66oktjcp> <div class="container" data-astro-cid-66oktjcp> <h2 data-astro-cid-66oktjcp>Ready to Transform Your Leadership?</h2> <p data-astro-cid-66oktjcp>The G.U.E.S.S. Framework isn't just a theory—it's an actionable model for leadership success. Start your journey to becoming a more effective leader today.</p> <a href="mailto:hello@day41thrive.com" class="btn" data-astro-cid-66oktjcp>Schedule a Consultation</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-66oktjcp": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/programs/guess-framework.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/programs/guess-framework.astro";
const $$url = "/programs/guess-framework";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$GuessFramework,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
