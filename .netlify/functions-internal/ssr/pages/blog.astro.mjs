import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, date, author, description, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="blog-card" data-astro-cid-e3grugc2> <div class="card-content" data-astro-cid-e3grugc2> <h3 class="title" data-astro-cid-e3grugc2><a${addAttribute(`/blog/${encodeURIComponent(slug)}`, "href")} data-astro-cid-e3grugc2>${title}</a></h3> <div class="meta" data-astro-cid-e3grugc2> <span class="date" data-astro-cid-e3grugc2>${date}</span> <span class="author" data-astro-cid-e3grugc2>${author}</span> </div> <p class="description" data-astro-cid-e3grugc2>${description}</p> <a${addAttribute(`/blog/${encodeURIComponent(slug)}`, "href")} class="read-more" data-astro-cid-e3grugc2>Read More →</a> </div> </article> `;
}, "/Users/sandy/Downloads/project 2/src/components/BlogCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const blogs = [
    {
      title: "How to Get 10x Effort From Your Employees",
      date: "June 10, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform your team from doing the bare minimum to giving extraordinary effort. Learn practical strategies for unlocking commitment, activating identity, and creating a culture where people thrive.",
      slug: "how-to-get-10x-effort-from-your-employees"
    },
    {
      title: "There's No Such Thing as a Bad Lead",
      date: "June 3, 2025",
      author: "Jonathon Broce",
      description: "Discover why every lead is an opportunity and how to transform your sales mindset. Learn practical strategies for maximizing every interaction, turning repairs into relationships, and building a culture that values every customer touchpoint.",
      slug: "no-such-thing-as-bad-lead"
    },
    {
      title: "From Checklists to Champions: Training Teams That Think Like Owners",
      date: "May 27, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform your team from task-followers to problem-solvers. Learn practical strategies for empowering your team to think like owners and take initiative without constant direction.",
      slug: "from-checklists-to-champions"
    },
    {
      title: "Stop Selling Roofs. Start Selling Peace of Mind.",
      date: "May 20, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform your roofing sales approach by focusing on peace of mind rather than just materials. Learn how product choices and manufacturer warranties create total customer confidence and higher margins.",
      slug: "stop-selling-roofs-start-selling-peace-of-mind"
    },
    {
      title: "7 KPIs That Tell You the Truth About Your Business",
      date: "May 13, 2025",
      author: "Jonathon Broce",
      description: "Discover the key performance indicators that reveal the real health of your business. Learn which metrics matter most and how to use data to make better leadership decisions.",
      slug: "7-kpis-that-tell-truth-about-your-business"
    },
    {
      title: "How to Build a Business That Doesn't Need You Every Day",
      date: "May 6, 2025",
      author: "Jonathon Broce",
      description: "Learn how to shift from being the hero to the host in your business. Discover practical strategies for building systems, empowering your team, and creating a company that thrives without your constant presence.",
      slug: "how-to-build-business-that-doesnt-need-you"
    },
    {
      title: "New Beginnings: How Leadership Lights the Path to Thriving",
      date: "April 30, 2025",
      author: "Jonathon Broce",
      description: "Discover how leadership turns new beginnings into opportunities for growth. Learn practical strategies for navigating change, building momentum, and leading with clarity through life's transitions.",
      slug: "new-beginnings-leadership-lights-path"
    },
    {
      title: "Build Better Leadership with the G.U.E.S.S. Framework",
      date: "April 23, 2025",
      author: "Jonathon Broce",
      description: "Discover how to become a leader people want to follow with our proven G.U.E.S.S. Framework. Learn practical strategies for growing yourself, unleashing potential, enhancing operations, and building team alignment.",
      slug: "build-better-leadership-guess-framework"
    },
    {
      title: "Work Smarter, Not Harder: The Contractor's Blueprint for Sustainable Growth",
      date: "April 17, 2025",
      author: "Jonathon Broce",
      description: "Discover how to build a thriving contracting business without burning out. Learn practical strategies for systemizing operations, leveraging your team, and working smarter\u2014not just harder.",
      slug: "work-smarter-not-harder"
    },
    {
      title: "Win with Warranties and Product Enhancements: Elevate Your Roofing Business",
      date: "April 10, 2025",
      author: "Jonathon Broce",
      description: "Discover how to leverage manufacturer-backed warranties and premium product enhancements to win more deals, reduce risk, and build long-term customer trust. Learn proven strategies for selling peace of mind and protection.",
      slug: "win-with-warranties-product-enhancements"
    },
    {
      title: "Flip the Script \u2013 Become a Storm Catcher with Day 41 Thrive",
      date: "April 4, 2025",
      author: "Jonathon Broce",
      description: "Learn how to transition from an insurance-dependent model to a thriving retail roofing business. Discover proven strategies for building a sustainable, high-margin company that doesn't rely on storm damage claims.",
      slug: "flip-script-become-storm-catcher"
    },
    {
      title: "Optimizing Canvassing with Lead Scout: A Data-Driven Approach to Generating More Roofing Sales",
      date: "March 31, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform your canvassing strategy with Lead Scout. Learn proven techniques to track, optimize, and scale your door-to-door sales efforts while integrating with the Profit Multiplier Formula and Get The Referral (GTR).",
      slug: "optimizing-canvassing-with-leadscout"
    },
    {
      title: "Maximizing Referrals and Lowering Costs with Get The Referral (GTR): A Complete Strategy",
      date: "March 25, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform your business with a powerful referral-driven strategy using Get The Referral (GTR). Learn to engage customers, optimize sales commissions, and create a sustainable growth engine through automated referral tracking and incentives.",
      slug: "maximizing-referrals-with-gtr"
    },
    {
      title: "The Profit Multiplier Formula: How to Outwork and Outsmart the Big Players in Roofing",
      date: "March 19, 2025",
      author: "Jonathon Broce",
      description: "Learn how to compete with industry giants without breaking the bank. Our proven Profit Multiplier Formula combines strategic canvassing, local marketing, and smart branding to maximize every job opportunity.",
      slug: "profit-multiplier-formula"
    },
    {
      title: "Choosing the Right Roofing CRM: A Comparative Analysis of ServiceTitan, JobNimbus, and Roofr",
      date: "March 14, 2025",
      author: "Jonathon Broce",
      description: "Explore an in-depth comparison of leading roofing CRM solutions. Learn which platform best suits your business needs, from ServiceTitan's enterprise capabilities to Roofr's innovative estimation tools.",
      slug: "choosing-right-roofing-crm"
    },
    {
      title: "The Power of Your Network: How Strategic Partnerships and Doing the Right Thing Lead to Success",
      date: "March 7, 2025",
      author: "Jonathon Broce",
      description: "Discover how building genuine relationships and strategic partnerships can create opportunities you could never achieve alone. Learn why giving more than you take and doing the right thing always pays off in business and leadership.",
      slug: "power-of-your-network"
    },
    {
      title: "A New Journey, A New Team: Building a Culture That Thrives",
      date: "February 28, 2025",
      author: "Jonathon Broce",
      description: "Discover the importance of building a strong culture first when starting a new journey. Learn how the right team with shared values creates the foundation for success and how past experiences shape a stronger future.",
      slug: "new-journey-new-team-building-culture"
    },
    {
      title: 'The Truth About Roofing "Gurus": What to Look for in Real Industry Leaders',
      date: "February 23, 2025",
      author: "Jonathon Broce",
      description: "Learn how to identify authentic roofing industry leaders from self-proclaimed experts. Discover the nine critical questions to ask before trusting anyone with your business growth and why real expertise comes from experience, not just talk.",
      slug: "truth-about-roofing-gurus"
    },
    {
      title: "Seeing the Team Win Through Tragedy: The True Blessing of Leadership",
      date: "February 21, 2025",
      author: "Jonathon Broce",
      description: "Discover the profound impact of watching your team rise during challenging times. Learn how true leadership is revealed when tragedy strikes and how these moments forge unbreakable bonds and unexpected growth.",
      slug: "seeing-team-win-through-tragedy"
    },
    {
      title: "Facing Leadership Woes: Be the Buffalo That Runs Into the Storm",
      date: "February 14, 2025",
      author: "Jonathon Broce",
      description: "Discover why the best leaders don't avoid challenges but charge straight into them. Learn how to develop the buffalo mindset that helps you navigate leadership storms and emerge stronger on the other side.",
      slug: "facing-leadership-woes-be-the-buffalo"
    },
    {
      title: "The Power of Your Inner Circle: Leadership, Gratitude, and the People Who Lift You Up",
      date: "February 7, 2025",
      author: "Jonathon Broce",
      description: "Explore how the people you surround yourself with shape your leadership journey. Learn why your inner circle matters and how gratitude for these relationships strengthens your ability to lead effectively.",
      slug: "power-of-your-inner-circle"
    },
    {
      title: "The Failure Formula: Turning Setbacks into Strengths",
      date: "January 28, 2025",
      author: "Jonathon Broce",
      description: "Discover how to transform failures into opportunities for growth and leadership excellence. Learn practical strategies for embracing setbacks, finding wisdom in mistakes, and leading with resilience through life's challenges.",
      slug: "failure-formula-turning-setbacks-into-strengths"
    }
  ];
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Day 41 Thrive - Blog", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<main class="blog-page" data-astro-cid-5tznm7mj> <section class="blog-hero" data-astro-cid-5tznm7mj> <div class="gradient-overlay" data-astro-cid-5tznm7mj></div> <div class="container" data-astro-cid-5tznm7mj> <h1 class="animated-title" data-astro-cid-5tznm7mj>Leadership Insights</h1> <p class="hero-description" data-astro-cid-5tznm7mj>Discover stories, strategies, and insights to help you navigate through storms and emerge stronger. Join us on the journey from survival to thriving.</p> </div> </section> <section class="blog-content" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="sort-controls" data-astro-cid-5tznm7mj> <label for="sort-order" data-astro-cid-5tznm7mj>Sort by:</label> <select id="sort-order" class="sort-select" data-astro-cid-5tznm7mj> <option value="newest" data-astro-cid-5tznm7mj>Newest First</option> <option value="oldest" data-astro-cid-5tznm7mj>Oldest First</option> </select> </div> <div class="blog-grid" data-astro-cid-5tznm7mj> ${sortedBlogs.map((blog) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { ...blog, "data-astro-cid-5tznm7mj": true })}`)} </div> </div> </section> <section class="personal-blog-section" data-astro-cid-5tznm7mj> <div class="container" data-astro-cid-5tznm7mj> <div class="personal-blog-card" data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>Go See Jon Broce's Personal Blog</h2> <p data-astro-cid-5tznm7mj>Explore more leadership insights, personal stories, and growth strategies on Jon's personal blog.</p> <a href="https://jonathonbroce.com/blog" class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-5tznm7mj>
Visit Jon's Blog
</a> </div> </div> </section> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/blog/index.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
