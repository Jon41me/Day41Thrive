import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Partners = createComponent(async ($$result, $$props, $$slots) => {
  const partners = [
    {
      name: "HireBus",
      description: `We make hiring less guesswork, more "heck yes!" Get instant insights into who's a fit, who's a flop, and who's your next rockstar.`,
      status: "active",
      link: "https://hirebus.com/thrive"
    },
    {
      name: "Ugly Roof",
      description: "We help roofing companies transform their company to become repair and rejuvenation experts",
      status: "active",
      link: "https://uglyroof.com"
    },
    {
      name: "LeadScout",
      description: `Lead Scout is the "capture opportunity" app for door-to-door pros. Tag homes, track leads, and send follow-ups\u2014all from your phone. It's like having a sales assistant in your pocket.`,
      status: "active",
      link: "https://leadscoutapp.com"
    },
    {
      name: "Get The Referral",
      description: "They built the ultimate referral machine. Their app turns happy customers into lead-generating champs\u2014with tracking, rewards, and real-time updates baked in.",
      status: "active",
      link: "https://www.getthereferral.com"
    },
    {
      name: "Clientric",
      description: "Clientric helps roofing businesses nail their CRM game. From lead to invoice, they patch up your process leaks and shingle-handedly boost your bottom line.",
      status: "active",
      link: "https://clientric.co"
    },
    {
      name: "Saenz Global",
      description: "Let Saenz Global handle your roofing admin tasks\u2014so you can focus on nailing more sales and raising the roof on your business.",
      status: "active",
      link: "https://www.saenzglobal.com"
    },
    {
      name: "Roofr",
      description: "Roofr is your all-in-one roofing platform. From instant measurements to slick proposals, they help you close deals faster and look like a pro doing it.",
      status: "active",
      link: "https://www.roofr.com"
    },
    {
      name: "Guaranteed Estimates",
      description: "Leads in. Deals out. Automated follow-ups so smooth, you'd think you hired a sales ninja.",
      status: "active",
      link: "https://guaranteedestimates.com"
    },
    {
      name: "Roofing Success Podcast",
      description: "Raise the roof on your business with insights from pros who've nailed it.",
      status: "active",
      link: "https://roofingsuccesspodcast.com"
    },
    {
      name: "Dope Marketing",
      description: "Dope Marketing helps roofing companies dominate their local markets with proven digital marketing strategies and automated lead generation systems.",
      status: "active",
      link: "https://www.dopemarketingllc.com"
    },
    {
      name: "System Thrive",
      description: "Transformational leadership program empowering entrepreneurs and teams to thrive beyond life's challenges.",
      status: "active",
      link: "https://systemthrive.com"
    },
    {
      name: "Jeff Valder Coaching",
      description: "Expert personal development and life coaching to help you unlock your full potential, overcome obstacles, and create lasting positive change in your life.",
      status: "active",
      link: "https://jeffvalder.com"
    },
    {
      name: "Paperoute",
      description: "Innovative digital solutions for modern businesses.",
      status: "active",
      link: "https://paperoute.com"
    },
    {
      name: "Distinguished Partner",
      description: "This partnership opportunity awaits the right company.",
      status: "coming-soon"
    },
    {
      name: "Elite Collaborator",
      description: "Premium partnership position available for industry leaders.",
      status: "coming-soon"
    },
    {
      name: "Visionary Partner",
      description: "Be part of shaping the future of the industry.",
      status: "coming-soon"
    },
    {
      name: "Growth Partner",
      description: "Exciting partnership opportunity coming soon!",
      status: "coming-soon"
    },
    {
      name: "Trusted Affiliate",
      description: "Your company could be featured here as a trusted partner.",
      status: "coming-soon"
    },
    {
      name: "Business Alliance",
      description: "Join our network of successful industry partners.",
      status: "coming-soon"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Partners - Day 41 Thrive", "data-astro-cid-6odhiasn": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-6odhiasn": true })} ${maybeRenderHead()}<main class="partners-page" data-astro-cid-6odhiasn> <section class="hero" data-astro-cid-6odhiasn> <div class="gradient-overlay" data-astro-cid-6odhiasn></div> <div class="container" data-astro-cid-6odhiasn> <h1 class="animated-title" data-astro-cid-6odhiasn>Partners & Affiliates</h1> <p class="hero-description" data-astro-cid-6odhiasn>Join our growing network of industry leaders and innovators who are transforming the future of business together.</p> </div> </section> <section class="partners-section" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <div class="partners-grid" data-astro-cid-6odhiasn> ${partners.map((partner) => renderTemplate`<div class="partner-card" data-astro-cid-6odhiasn> <h3 data-astro-cid-6odhiasn>${partner.name}</h3> <p data-astro-cid-6odhiasn>${partner.description}</p> ${partner.status === "active" ? renderTemplate`<a${addAttribute(partner.link, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-6odhiasn>
Learn More
</a>` : renderTemplate`<span class="coming-soon" data-astro-cid-6odhiasn>Coming Soon</span>`} </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-6odhiasn> <div class="container" data-astro-cid-6odhiasn> <h2 data-astro-cid-6odhiasn>Become a Partner</h2> <p data-astro-cid-6odhiasn>Interested in joining our network of industry leaders? Contact us to learn more about partnership opportunities.</p> <a href="/#contact" class="btn" data-astro-cid-6odhiasn>Contact Us</a> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-6odhiasn": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/partners.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/partners.astro";
const $$url = "/partners";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Partners,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
