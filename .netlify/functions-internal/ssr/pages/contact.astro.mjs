import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us - Day 41 Thrive", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-uw5kdbxl": true })} ${maybeRenderHead()}<main class="contact-page" data-astro-cid-uw5kdbxl> <section class="hero" data-astro-cid-uw5kdbxl> <div class="gradient-overlay" data-astro-cid-uw5kdbxl></div> <div class="container" data-astro-cid-uw5kdbxl> <h1 class="animated-title" data-astro-cid-uw5kdbxl>Let's Thrive Together</h1> <p class="hero-description" data-astro-cid-uw5kdbxl>Ready to transform your leadership and business? Reach out to us today and take the first step towards extraordinary results.</p> </div> </section> <section class="contact-section" data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> <div class="contact-options" data-astro-cid-uw5kdbxl> <div class="contact-card" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Contact Us Directly</h2> <div class="contact-methods" data-astro-cid-uw5kdbxl> <a href="tel:877-329-4163" class="contact-link" data-astro-cid-uw5kdbxl> <span class="icon" data-astro-cid-uw5kdbxl>📞</span> <span class="text" data-astro-cid-uw5kdbxl>877-DAY-41-ME</span> </a> <a href="mailto:hello@day41thrive.com" class="contact-link" data-astro-cid-uw5kdbxl> <span class="icon" data-astro-cid-uw5kdbxl>📧</span> <span class="text" data-astro-cid-uw5kdbxl>hello@day41thrive.com</span> </a> </div> </div> </div> <div class="form-container" data-astro-cid-uw5kdbxl> <iframe src="https://app.hellobonsai.com/f/863fcba0283093e?embed=true" frameborder="0" width="100%" height="100%" style="border: none;" data-astro-cid-uw5kdbxl>
                    </iframe> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-uw5kdbxl": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/contact.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
