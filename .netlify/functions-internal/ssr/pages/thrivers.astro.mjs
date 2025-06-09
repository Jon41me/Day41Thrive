import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Thrivers = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      id: "7SQLE_2kCnk",
      name: "Bruce Boyd",
      title: "CEO",
      company: "BulletpROOF",
      description: "Bruce Boyd at BulletpROOF is a driven entrepreneur and industry expert focused on building resilient businesses and equipping leaders with the mindset and tools to thrive."
    },
    {
      id: "H82DiczKLFo",
      name: "Crystal Harwell",
      title: "Xactimate Certified Trainer",
      company: "",
      description: "Crystal Harwell shares her transformative journey and success story working with Day 41 Thrive's coaching programs."
    },
    {
      id: "Mcy6u4mq7M4",
      name: "Kent Panovec",
      title: "COO",
      company: "Maven Roofing",
      description: "Kent at Maven Roofing is a passionate industry leader dedicated to delivering top-quality roofing solutions while mentoring and empowering others to succeed in business and leadership."
    },
    {
      id: "21mfrs1dw6k",
      name: "Chuck Thokey",
      title: "Founder",
      company: "TOP REP",
      description: "Chuck Thokey at Top Rep is a top sales trainer, keynote speaker, and mentor, dedicated to helping sales professionals and business leaders dominate their industries with proven strategies."
    },
    {
      id: "bLh2kusX9qQ",
      name: "Rema Hilal",
      title: "General Manager",
      company: "",
      description: "Rema Hilal brings her expertise and leadership to Maycon Construction, demonstrating how Day 41 Thrive's principles can transform business operations and drive exceptional results."
    },
    {
      id: "21mfrs1dw6k",
      name: "Chuck Thokey",
      title: "Founder",
      company: "TOP REP",
      description: "Chuck Thokey at Top Rep is a top sales trainer, keynote speaker, and mentor, dedicated to helping sales professionals and business leaders dominate their industries with proven strategies."
    },
    {
      id: "n8m8KrnjiTE",
      name: "Andy Meredith",
      title: "Owner",
      company: "Meredith Cleaning",
      description: "Andy Meredith is rising as a powerful leader through Day 41 Thrive, embracing its principles to sharpen his skills, inspire others, and drive success with confidence and purpose."
    },
    {
      id: "J1Rr-YXisN8",
      name: "Erich Vozzella",
      title: "Sales Leader",
      company: "",
      description: "Erich Vozzella demonstrates the power of Day 41 Thrive's coaching programs through his journey of personal growth and leadership development, inspiring others to reach their full potential."
    },
    {
      id: "KqUutcpAsp0",
      name: "Sean Wisenbarger",
      title: "Production Manager",
      company: "",
      description: "Sean Wisenbarger shares his success story and the transformative impact of Day 41 Thrive's coaching programs on his leadership journey and business growth."
    },
    {
      id: "xbQhE9iJTCU",
      name: "Kasey Luft",
      title: "Owner",
      company: "Clientric",
      description: "Kasey Luft and Day 41 Thrive collaborated to streamline and optimize business processes, creating efficient systems that drive growth, scalability, and long-term success."
    },
    {
      id: "ywLi9rAt0Bo",
      name: "John Stokes",
      title: "CEO",
      company: "Guaranteed Estimates",
      description: "John Stokes has been working with Day 41 Thrive for years, leveraging its insights and strategies to refine leadership, strengthen business operations, and drive lasting success."
    },
    {
      id: "0pANXXKI_5k",
      name: "Brick Boss",
      title: "CEO",
      company: "Boss Roofing",
      description: "Brick at Boss Roofing has been a close friend and mentee for years, growing alongside Day 41 Thrive through shared leadership insights, mentorship, and a commitment to building a thriving business."
    },
    {
      id: "PRIKkrOoc1g",
      name: "IV Dickson",
      title: "Chief Innovation Officer (CIO)",
      company: "",
      description: "IV Dickson demonstrates the transformative power of Day 41 Thrive's coaching programs, sharing his journey of growth and success in leadership and business development."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thrivers - Day 41 Thrive", "data-astro-cid-ksstbckd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ksstbckd": true })} ${maybeRenderHead()}<main class="thrivers-page" data-astro-cid-ksstbckd> <section class="hero" data-astro-cid-ksstbckd> <div class="gradient-overlay" data-astro-cid-ksstbckd></div> <div class="container" data-astro-cid-ksstbckd> <h1 class="animated-title" data-astro-cid-ksstbckd>Thrivers 🚀</h1> <p class="hero-description" data-astro-cid-ksstbckd>Welcome to the Thrivers page—where leaders, entrepreneurs, and game-changers share how Day 41 Thrive is transforming the way they grow, lead, and succeed.</p> <p class="hero-subtitle" data-astro-cid-ksstbckd>From industry experts to business owners, these voices prove that thriving isn't just a goal—it's a mindset. Watch their stories, get inspired, and join the movement!</p> <div class="hero-cta" data-astro-cid-ksstbckd> <p class="cta-text" data-astro-cid-ksstbckd>💡 Are you ready to thrive beyond survival?</p> <p class="cta-subtext" data-astro-cid-ksstbckd>👉 Check out the latest testimonials below!</p> </div> </div> </section> <section class="testimonials-section" data-astro-cid-ksstbckd> <div class="container" data-astro-cid-ksstbckd> <div class="testimonials-grid" data-astro-cid-ksstbckd> ${testimonials.map((testimonial) => renderTemplate`<div class="testimonial-card" data-astro-cid-ksstbckd> <div class="video-container" data-astro-cid-ksstbckd> <iframe${addAttribute(`https://www.youtube.com/embed/${testimonial.id}`, "src")}${addAttribute(`${testimonial.name}'s Testimonial`, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" data-astro-cid-ksstbckd></iframe> </div> <div class="testimonial-content" data-astro-cid-ksstbckd> <h3 data-astro-cid-ksstbckd>${testimonial.name}</h3> <p class="title" data-astro-cid-ksstbckd>${testimonial.title}</p> <p class="company" data-astro-cid-ksstbckd>${testimonial.company}</p> <p class="description" data-astro-cid-ksstbckd>${testimonial.description}</p> </div> </div>`)} </div> </div> </section> <section class="cta-section" data-astro-cid-ksstbckd> <div class="container" data-astro-cid-ksstbckd> <div class="cta-card" data-astro-cid-ksstbckd> <h2 data-astro-cid-ksstbckd>Ready to Join the Thrivers?</h2> <p data-astro-cid-ksstbckd>Transform your business and leadership journey with Day 41 Thrive.</p> <a href="/contact" class="btn" data-astro-cid-ksstbckd>Contact Us Today</a> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-ksstbckd": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/thrivers.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/thrivers.astro";
const $$url = "/thrivers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Thrivers,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
