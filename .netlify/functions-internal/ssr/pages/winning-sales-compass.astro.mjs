import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
/* empty css                                                 */
export { renderers } from '../renderers.mjs';

const $$WinningSalesCompass = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Redirecting...", "data-astro-cid-6zy5e6kx": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="redirect-message" data-astro-cid-6zy5e6kx> <p data-astro-cid-6zy5e6kx>Redirecting to Winning Sales Compass program...</p> <p data-astro-cid-6zy5e6kx>If you are not redirected automatically, <a href="/programs/winning-sales-compass" data-astro-cid-6zy5e6kx>click here</a>.</p> </div> ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/winning-sales-compass.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/winning-sales-compass.astro";
const $$url = "/winning-sales-compass";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$WinningSalesCompass,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
