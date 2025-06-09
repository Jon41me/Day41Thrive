import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from './astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const menuItems = [
  {
    href: "#about",
    text: "Our Story",
    isNav: true
  },
  {
    href: "/growth-gauge",
    text: "Growth Gauge",
    isNav: false
  },
  {
    href: "/work-with-us",
    text: "Work With Us",
    isNav: false,
    children: [
      { href: "/programs", text: "Programs", isNav: false },
      { href: "/partners", text: "Partners", isNav: false }
    ]
  },
  {
    href: "#",
    text: "Thrive Wire",
    isNav: false,
    children: [
      { href: "/blog", text: "Blog", isNav: false },
      { href: "/media", text: "Media", isNav: false },
      { href: "/join-us", text: "Join Us", isNav: false },
      { href: "/swag", text: "SWAG", isNav: false },
      { href: "/thrivers", text: "Thrivers", isNav: false },
      { href: "/dont-guess", text: "Don't GUESS", isNav: false }
    ]
  },
  {
    href: "/contact",
    text: "Contact Us",
    isNav: false
  }
];

const $$Astro = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, text, isNav, className = "", style = "", children } = Astro2.props;
  const dataNav = isNav ? href.replace(/^[/#]+/, "") : "";
  const finalHref = isNav ? `/${href}` : href;
  const hasChildren = children && children.length > 0;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`nav-item-wrapper ${className}`, "class")} data-astro-cid-y7ifrq6m> <a${addAttribute(finalHref, "href")}${addAttribute(`nav-item ${hasChildren ? "has-dropdown" : ""}`, "class")}${addAttribute(dataNav, "data-nav")}${addAttribute(style, "style")} data-astro-cid-y7ifrq6m> ${text} </a> ${hasChildren && renderTemplate`<div class="dropdown-menu" data-astro-cid-y7ifrq6m> ${children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="dropdown-item" data-astro-cid-y7ifrq6m>${child.text}</a>`)} </div>`} </div> `;
}, "/Users/sandy/Downloads/project 2/src/components/navigation/NavLink.astro", void 0);

const $$DesktopNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="desktop-nav" role="navigation" data-astro-cid-zw4rvf2k> <div class="nav-links" data-astro-cid-zw4rvf2k> ${menuItems.map((item) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { ...item, "data-astro-cid-zw4rvf2k": true })}`)} </div> </nav>  `;
}, "/Users/sandy/Downloads/project 2/src/components/navigation/DesktopNav.astro", void 0);

const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-nav-overlay" id="mobileNavOverlay" data-astro-cid-4oojkzht> <nav class="mobile-nav" role="navigation" data-astro-cid-4oojkzht> <div class="mobile-nav-content" data-astro-cid-4oojkzht> ${menuItems.map((item, index) => renderTemplate`<div class="mobile-menu-item"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-4oojkzht> ${renderComponent($$result, "NavLink", $$NavLink, { ...item, "data-astro-cid-4oojkzht": true })} ${item.children && renderTemplate`<div class="mobile-submenu" data-astro-cid-4oojkzht> ${item.children.map((child) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { ...child, "className": "mobile-submenu-item", "data-astro-cid-4oojkzht": true })}`)} </div>`} </div>`)} </div> </nav> </div> `;
}, "/Users/sandy/Downloads/project 2/src/components/navigation/MobileNav.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <nav class="nav-container" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2> <span class="logo-text" data-astro-cid-3ef6ksr2>Day 41 Thrive</span> </a> ${renderComponent($$result, "DesktopNav", $$DesktopNav, { "data-astro-cid-3ef6ksr2": true })} <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileNavOverlay" data-astro-cid-3ef6ksr2> <span class="menu-line" data-astro-cid-3ef6ksr2></span> <span class="menu-line" data-astro-cid-3ef6ksr2></span> <span class="menu-line" data-astro-cid-3ef6ksr2></span> </button> </nav> </div> ${renderComponent($$result, "MobileNav", $$MobileNav, { "data-astro-cid-3ef6ksr2": true })} </header>  `;
}, "/Users/sandy/Downloads/project 2/src/components/Header.astro", void 0);

export { $$Header as $ };
