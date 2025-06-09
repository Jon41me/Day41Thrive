import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Swag = createComponent(($$result, $$props, $$slots) => {
  const SHOP_URL = "https://day41thrive.shop";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Day 41 Thrive - Swag Store", "data-astro-cid-vladnoqm": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-vladnoqm": true })} ${maybeRenderHead()}<main class="swag-page" data-astro-cid-vladnoqm> <section class="swag-hero" data-astro-cid-vladnoqm> <div class="gradient-overlay" data-astro-cid-vladnoqm></div> <div class="container" data-astro-cid-vladnoqm> <h1 class="animated-title" data-astro-cid-vladnoqm>Day 41 Thrive Swag</h1> <p class="hero-description" data-astro-cid-vladnoqm>Your journey of thriving begins here! Whether you're taking on new challenges, celebrating leadership victories, or simply living with purpose, our exclusive swag is here to inspire and empower every step of the way.</p> <div class="hero-cta" data-astro-cid-vladnoqm> <a${addAttribute(SHOP_URL, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-vladnoqm>Shop Now</a> </div> </div> </section> <section class="swag-content" data-astro-cid-vladnoqm> <div class="container" data-astro-cid-vladnoqm> <div class="intro-section" data-astro-cid-vladnoqm> <h2 data-astro-cid-vladnoqm>Why Day 41 Thrive?</h2> <p data-astro-cid-vladnoqm>Day 41 represents more than a moment—it's a mindset. It's the point where effort meets breakthrough, where persistence pays off, and where leaders and dreamers discover their true potential. Our swag is designed to remind you of this journey and help you share the message with the world.</p> </div> <div class="features-section" data-astro-cid-vladnoqm> <h2 data-astro-cid-vladnoqm>What You'll Find Here</h2> <div class="features-grid" data-astro-cid-vladnoqm> <div class="feature-card" data-astro-cid-vladnoqm> <h3 data-astro-cid-vladnoqm>Inspirational Apparel</h3> <p data-astro-cid-vladnoqm>Premium T-shirts and hoodies featuring motivational designs that embody the spirit of thriving.</p> </div> <div class="feature-card" data-astro-cid-vladnoqm> <h3 data-astro-cid-vladnoqm>Everyday Essentials</h3> <p data-astro-cid-vladnoqm>From mugs that fuel your mornings to tote bags that carry your purpose, our practical swag keeps the Day 41 spirit alive.</p> </div> <div class="feature-card" data-astro-cid-vladnoqm> <h3 data-astro-cid-vladnoqm>Fun Extras</h3> <p data-astro-cid-vladnoqm>Stickers, notebooks, and other goodies to spread positivity and keep you inspired throughout your day.</p> </div> </div> </div> <div class="purpose-section" data-astro-cid-vladnoqm> <h2 data-astro-cid-vladnoqm>Designed with Purpose</h2> <p data-astro-cid-vladnoqm>Each piece in our collection is thoughtfully designed with empowering messages and bold graphics, so you can wear and share your story. Every purchase supports the Day 41 mission to inspire leaders, foster growth, and celebrate the victories—big and small.</p> </div> <div class="movement-section" data-astro-cid-vladnoqm> <h2 data-astro-cid-vladnoqm>Join the Thrive Movement</h2> <p data-astro-cid-vladnoqm>Ready to thrive? Gear up and show the world your commitment to growth, grit, and greatness. Check out our latest designs, and don't forget to tag us on social media to share how you're thriving in Day 41 fashion!</p> <div class="cta-buttons" data-astro-cid-vladnoqm> <a${addAttribute(SHOP_URL, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-vladnoqm>Browse the Collection</a> </div> <p class="tagline" data-astro-cid-vladnoqm>Because thriving isn't just a phase—it's a lifestyle.</p> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-vladnoqm": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/swag.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/swag.astro";
const $$url = "/swag";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Swag,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
