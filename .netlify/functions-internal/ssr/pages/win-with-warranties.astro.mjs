import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
/* empty css                                               */
export { renderers } from '../renderers.mjs';

const $$WinWithWarranties = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Redirecting...", "data-astro-cid-ore7tf46": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="redirect-message" data-astro-cid-ore7tf46> <p data-astro-cid-ore7tf46>Redirecting to Win with Warranties program...</p> <p data-astro-cid-ore7tf46>If you are not redirected automatically, <a href="/programs/gaf-golden-pledge" data-astro-cid-ore7tf46>click here</a>.</p> </div> ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/win-with-warranties.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/win-with-warranties.astro";
const $$url = "/win-with-warranties";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$WinWithWarranties,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
