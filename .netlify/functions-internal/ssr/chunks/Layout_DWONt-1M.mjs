import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent, f as renderHead, g as renderSlot, b as createAstro } from './astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$SocialMediaLinks = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@Day41Thrive",
      icon: "\u{1F4FA}"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/day41thrive",
      icon: "\u{1F465}"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/day_41_thrive/",
      icon: "\u{1F4F8}"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="social-links" data-astro-cid-gvuvvhur> <h4 data-astro-cid-gvuvvhur>Connect With Us</h4> <div class="social-icons" data-astro-cid-gvuvvhur> ${socialLinks.map((link) => renderTemplate`<a${addAttribute(link.url, "href")} target="_blank" rel="noopener noreferrer" class="social-link"${addAttribute(`Follow us on ${link.name}`, "aria-label")} data-astro-cid-gvuvvhur> <span class="icon" data-astro-cid-gvuvvhur>${link.icon}</span> <span class="name" data-astro-cid-gvuvvhur>${link.name}</span> </a>`)} </div> </div> `;
}, "/Users/sandy/Downloads/project 2/src/components/SocialMediaLinks.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> ${renderComponent($$result, "SocialMediaLinks", $$SocialMediaLinks, { "data-astro-cid-sz7xmlte": true })} <nav class="footer-nav" data-astro-cid-sz7xmlte> <a href="/privacy" class="footer-link" data-astro-cid-sz7xmlte>Privacy Policy</a> <span class="separator" data-astro-cid-sz7xmlte>|</span> <a href="/#contact" class="footer-link" data-astro-cid-sz7xmlte>Contact</a> </nav> <p class="copyright" data-astro-cid-sz7xmlte>
© ${currentYear} Day 41 Thrive. All Rights Reserved.
</p> </div> </footer> `;
}, "/Users/sandy/Downloads/project 2/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Day 41 Thrive - Leadership for Life Beyond the Storm"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body> <div class="page-wrapper"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/sandy/Downloads/project 2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
