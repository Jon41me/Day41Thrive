import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$JoinUs = createComponent(($$result, $$props, $$slots) => {
  const CIRCLE_URL = "https://day-41-thrive.circle.so/join?invitation_token=00e0eb87337bfcf606225f4193d423053b195615-8d4d3589-3159-4ea7-b1bc-25f17e8c5106";
  const NEWSLETTER_URL = "https://app.hellobonsai.com/f/ac1e0dfad328dcc";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Join Us - Day 41 Thrive", "data-astro-cid-dewcpc2h": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-dewcpc2h": true })} ${maybeRenderHead()}<main class="join-page" data-astro-cid-dewcpc2h> <section class="hero" data-astro-cid-dewcpc2h> <div class="gradient-overlay" data-astro-cid-dewcpc2h></div> <div class="container" data-astro-cid-dewcpc2h> <h1 class="animated-title" data-astro-cid-dewcpc2h>Join Us</h1> <p class="hero-description" data-astro-cid-dewcpc2h>Welcome to Day 41 Thrive — where leaders come together to sharpen their thinking, share hard-won lessons, and push each other toward real growth. Whether you're looking for a place to connect or simply want top-tier insights delivered to your inbox, you're in the right place.</p> </div> </section> <section class="community-section" data-astro-cid-dewcpc2h> <div class="container" data-astro-cid-dewcpc2h> <div class="community-card" data-astro-cid-dewcpc2h> <h2 data-astro-cid-dewcpc2h>Join the Day 41 Thrive Community Circle</h2> <p class="intro" data-astro-cid-dewcpc2h>Looking for a space where leadership conversations actually matter?</p> <p data-astro-cid-dewcpc2h>The Day 41 Thrive Community Circle is a free space where leaders, entrepreneurs, and growth-minded individuals come together to connect, share, and learn from each other.</p> <ul class="benefits-list" data-astro-cid-dewcpc2h> <li data-astro-cid-dewcpc2h>Join real-time conversations with like-minded leaders</li> <li data-astro-cid-dewcpc2h>Access free webinars and exclusive trainings</li> <li data-astro-cid-dewcpc2h>Be part of a community that is here to lift each other up</li> </ul> <div class="free-note" data-astro-cid-dewcpc2h> <p data-astro-cid-dewcpc2h>It's completely free to join — because we believe leadership doesn't thrive in isolation.</p> <p data-astro-cid-dewcpc2h>Click below to hop into the circle and start the conversations that spark real growth.</p> </div> <a${addAttribute(CIRCLE_URL, "href")} class="btn join-btn" target="_blank" rel="noopener noreferrer" data-astro-cid-dewcpc2h>
Join Circle
</a> </div> <div class="newsletter-card" data-astro-cid-dewcpc2h> <h2 data-astro-cid-dewcpc2h>Subscribe to the Day 41 Thrive Monthly Newsletter</h2> <p class="intro" data-astro-cid-dewcpc2h>Want leadership insights, strategies, and tools delivered once a month — with no spam or fluff?</p> <p data-astro-cid-dewcpc2h>Sign up for the Day 41 Thrive Monthly Newsletter and get:</p> <ul class="benefits-list" data-astro-cid-dewcpc2h> <li data-astro-cid-dewcpc2h>One thoughtfully curated email each month</li> <li data-astro-cid-dewcpc2h>Actionable tips and strategies you can apply right away</li> <li data-astro-cid-dewcpc2h>Early access to upcoming events, trainings, and special offers</li> </ul> <div class="simple-note" data-astro-cid-dewcpc2h> <p data-astro-cid-dewcpc2h>We keep it simple: one email, once a month. No inbox clutter, just meaningful leadership content.</p> </div> <a${addAttribute(NEWSLETTER_URL, "href")} class="btn subscribe-btn" target="_blank" rel="noopener noreferrer" data-astro-cid-dewcpc2h>
Join Newsletter
</a> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-dewcpc2h": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/join-us.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/join-us.astro";
const $$url = "/join-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$JoinUs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
