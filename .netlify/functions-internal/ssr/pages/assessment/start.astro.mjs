import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Start = createComponent(async ($$result, $$props, $$slots) => {
  const positions = [
    "Owner",
    "CEO",
    "COO",
    "GM",
    "Sales Manager",
    "Production Manager",
    "Individual Contributor",
    "Employee"
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Start Assessment - Day 41 Thrive", "data-astro-cid-ukuh7rsk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ukuh7rsk": true })} ${maybeRenderHead()}<main class="assessment-page" data-astro-cid-ukuh7rsk> <section class="assessment-section" data-astro-cid-ukuh7rsk> <div class="container" data-astro-cid-ukuh7rsk> <div class="assessment-card" data-astro-cid-ukuh7rsk> <div class="progress-bar" data-astro-cid-ukuh7rsk> <div class="progress" style="width: 5%;" data-astro-cid-ukuh7rsk></div> <span class="progress-text" data-astro-cid-ukuh7rsk>Step 1 of 42</span> </div> <h1 data-astro-cid-ukuh7rsk>Let's Get Started</h1> <p class="intro-text" data-astro-cid-ukuh7rsk>First, we'll need some basic information about you and your business.</p> <form id="basicInfoForm" class="assessment-form" data-astro-cid-ukuh7rsk> <div class="form-grid" data-astro-cid-ukuh7rsk> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="firstName" data-astro-cid-ukuh7rsk>First Name*</label> <input type="text" id="firstName" name="firstName" required placeholder="Enter your first name" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="lastName" data-astro-cid-ukuh7rsk>Last Name*</label> <input type="text" id="lastName" name="lastName" required placeholder="Enter your last name" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="position" data-astro-cid-ukuh7rsk>Position*</label> <select id="position" name="position" required data-astro-cid-ukuh7rsk> <option value="" data-astro-cid-ukuh7rsk>Select your position</option> ${positions.map((position) => renderTemplate`<option${addAttribute(position, "value")} data-astro-cid-ukuh7rsk>${position}</option>`)} </select> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="email" data-astro-cid-ukuh7rsk>Email Address*</label> <input type="email" id="email" name="email" required placeholder="Enter your email address" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="phone" data-astro-cid-ukuh7rsk>Cell Phone*</label> <input type="tel" id="phone" name="phone" required placeholder="Enter your cell phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Phone number format: XXX-XXX-XXXX" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="zipCode" data-astro-cid-ukuh7rsk>Zip Code (Headquarters)*</label> <input type="text" id="zipCode" name="zipCode" required placeholder="Enter headquarters zip code" pattern="[0-9]{5}" title="5-digit zip code" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="website" data-astro-cid-ukuh7rsk>Website</label> <input type="url" id="website" name="website" placeholder="Enter your website URL" data-astro-cid-ukuh7rsk> </div> <div class="form-group" data-astro-cid-ukuh7rsk> <label for="locations" data-astro-cid-ukuh7rsk>Number of Locations*</label> <input type="number" id="locations" name="locations" required placeholder="# of Google Business Profiles" min="1" data-astro-cid-ukuh7rsk> </div> </div> <div class="form-footer" data-astro-cid-ukuh7rsk> <p class="privacy-note" data-astro-cid-ukuh7rsk>
Your information is secure and will never be shared with third parties.
</p> <div class="submit-wrapper" data-astro-cid-ukuh7rsk> <button type="submit" class="btn next-btn" data-astro-cid-ukuh7rsk>
Continue to Assessment
<span class="arrow" data-astro-cid-ukuh7rsk>→</span> </button> <p class="error-message" id="errorMessage" data-astro-cid-ukuh7rsk></p> </div> </div> </form> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-ukuh7rsk": true })} ` })}  `;
}, "/Users/sandy/Downloads/project 2/src/pages/assessment/start.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/assessment/start.astro";
const $$url = "/assessment/start";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Start,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
