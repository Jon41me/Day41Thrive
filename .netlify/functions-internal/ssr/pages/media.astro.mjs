import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderComponent } from '../chunks/astro/server_MQ-OKnVF.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DWONt-1M.mjs';
import { $ as $$Header } from '../chunks/Header_DgcknLtB.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$FloatingActionButton } from '../chunks/FloatingActionButton_DlOUReT-.mjs';
export { renderers } from '../renderers.mjs';

const $$PodcastIntro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="podcast-intro section" data-astro-cid-2tkkp2ld> <div class="container" data-astro-cid-2tkkp2ld> <h1 class="animated-title" data-astro-cid-2tkkp2ld>Day 41 Thrive Podcast</h1> <h2 class="subtitle" data-astro-cid-2tkkp2ld>The Failure Formula</h2> <div class="intro-content" data-astro-cid-2tkkp2ld> <p data-astro-cid-2tkkp2ld>Welcome to the Day 41 Thrive Podcast</p> <p data-astro-cid-2tkkp2ld>Leadership is a journey filled with challenges, victories, and growth—and that's exactly what we explore on the Day 41 Thrive Podcast. Inspired by the idea that true transformation begins after the storm, we dive deep into the real stories of leaders who've faced adversity, learned from their struggles, and emerged stronger.</p> <p data-astro-cid-2tkkp2ld>Whether you're a seasoned leader, an entrepreneur, or just stepping into leadership for the first time, our episodes offer practical wisdom, inspiring stories, and actionable insights to help you thrive in your personal and professional life.</p> <p data-astro-cid-2tkkp2ld>Join us as we uncover the lessons learned on the other side of resilience, one story at a time. Because thriving isn't just about surviving—it's about stepping boldly into Day 41 and beyond.</p> </div> </div> </section> `;
}, "/Users/sandy/Downloads/project 2/src/components/media/PodcastIntro.astro", void 0);

const $$PodcastGrid = createComponent(($$result, $$props, $$slots) => {
  const recentPodcasts = [
    // Add your recent podcasts here
  ];
  const popularPodcasts = [
    // Add your popular podcasts here
  ];
  return renderTemplate`${maybeRenderHead()}<section class="podcast-grid section" data-astro-cid-grfakwve> <div class="container" data-astro-cid-grfakwve> <div class="grid-section" data-astro-cid-grfakwve> <h2 class="animated-title" data-astro-cid-grfakwve>Recent Episodes</h2> <div class="podcast-list" data-astro-cid-grfakwve> ${recentPodcasts.map((podcast) => renderTemplate`<div class="podcast-card" data-astro-cid-grfakwve> <h3 data-astro-cid-grfakwve>${podcast.title}</h3> <p class="date" data-astro-cid-grfakwve>${podcast.date}</p> <p class="description" data-astro-cid-grfakwve>${podcast.description}</p> <a${addAttribute(podcast.link, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-grfakwve>
Listen Now
</a> </div>`)} </div> </div> <div class="grid-section" data-astro-cid-grfakwve> <h2 class="animated-title" data-astro-cid-grfakwve>Most Popular Episodes</h2> <div class="podcast-list" data-astro-cid-grfakwve> ${popularPodcasts.map((podcast) => renderTemplate`<div class="podcast-card" data-astro-cid-grfakwve> <h3 data-astro-cid-grfakwve>${podcast.title}</h3> <p class="date" data-astro-cid-grfakwve>${podcast.date}</p> <p class="description" data-astro-cid-grfakwve>${podcast.description}</p> <a${addAttribute(podcast.link, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-grfakwve>
Listen Now
</a> </div>`)} </div> </div> </div> </section> `;
}, "/Users/sandy/Downloads/project 2/src/components/media/PodcastGrid.astro", void 0);

const $$MediaFeatures = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      type: "video",
      title: "The Truth About Leadership & Culture",
      host: "Ascend Digital Agency",
      date: "2025",
      description: "Join Jonathon Broce for an insightful discussion on authentic leadership and building a thriving company culture that drives sustainable business growth.",
      videoId: "4kzAyuBjzGI"
    },
    {
      type: "video",
      title: "Jon Broce on The Patrick Carr Show",
      host: "Patrick Carr",
      date: "2024",
      description: "Join Jon Broce as he shares his journey from farm life to industry leader, discussing servant leadership, faith, and transforming challenges into opportunities.",
      videoId: "L8BJ8YFqnso"
    },
    {
      type: "video",
      title: "EPISODE 5 - The Weekend That Could Change Your Life Forever (w/Jeff Valder)",
      host: "Man-Up Adventure Camp",
      date: "2024",
      description: "Join Jeff Valder in this transformative episode from Man-Up Adventure Camp as he shares insights about life-changing experiences and personal growth.",
      videoId: "sRnT-usmIuw"
    },
    {
      type: "podcast",
      title: "Episode 43 - Life Leaves Us All Clues (w/ Jeff Valder)",
      host: "Reggie Brock",
      date: "May 31, 2023",
      description: "Join host Reggie Brock and Jeff Valder as they explore how life provides us with valuable clues and lessons that shape our journey and leadership.",
      videoId: "yruiH6Xnhl4"
    },
    {
      type: "video",
      title: "Roofing's Harsh Reality: The Gold Rush is Gone\u2014Will Your Business Make It?",
      host: "Roofing Success Podcast",
      date: "2025",
      description: "Jonathon Broce discusses the changing landscape of the roofing industry and provides strategic insights on how businesses can adapt and thrive in the new reality.",
      videoId: "4nOpMfKyYOU"
    },
    {
      type: "video",
      title: "Episode 19 - Lead From the Front",
      host: "Culture-Neer Podcast",
      date: "2024",
      description: "Jonathon Broce shares powerful insights on frontline leadership and creating a culture of accountability and excellence in your organization.",
      videoId: "xH0SMiP0gd0"
    },
    {
      type: "video",
      title: "Coming Soon",
      date: "2024",
      description: "New content coming soon! Stay tuned for more leadership insights and transformative stories.",
      videoId: "dQw4w9WgXcQ"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="media-features" data-astro-cid-4gmdntuk> <div class="container" data-astro-cid-4gmdntuk> <h2 class="animated-title" data-astro-cid-4gmdntuk>Featured Media</h2> <div class="features-grid" data-astro-cid-4gmdntuk> ${features.map((feature) => renderTemplate`<div class="feature-card" data-astro-cid-4gmdntuk> <div class="video-container" data-astro-cid-4gmdntuk> <iframe${addAttribute(`https://www.youtube.com/embed/${feature.videoId}`, "src")}${addAttribute(feature.title, "title")} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" data-astro-cid-4gmdntuk></iframe> </div> <div class="card-content" data-astro-cid-4gmdntuk> <div class="card-header" data-astro-cid-4gmdntuk> <span class="feature-type" data-astro-cid-4gmdntuk>${feature.type}</span> <span class="date" data-astro-cid-4gmdntuk>${feature.date}</span> </div> <h3 data-astro-cid-4gmdntuk>${feature.title}</h3> ${feature.host && renderTemplate`<p class="host" data-astro-cid-4gmdntuk>Hosted by ${feature.host}</p>`} <p class="description" data-astro-cid-4gmdntuk>${feature.description}</p> </div> </div>`)} </div> </div> </section> `;
}, "/Users/sandy/Downloads/project 2/src/components/media/MediaFeatures.astro", void 0);

const $$Media = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Day 41 Thrive - Media & Podcast", "data-astro-cid-h6iffge2": true }, { "default": ($$result2) => renderTemplate` <link rel="icon" type="image/svg+xml" href="/media-favicon.svg"> ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-h6iffge2": true })} ${maybeRenderHead()}<main class="media-page" data-astro-cid-h6iffge2> <div class="container" data-astro-cid-h6iffge2> ${renderComponent($$result2, "PodcastIntro", $$PodcastIntro, { "data-astro-cid-h6iffge2": true })} ${renderComponent($$result2, "MediaFeatures", $$MediaFeatures, { "data-astro-cid-h6iffge2": true })} <section class="book-section" data-astro-cid-h6iffge2> <h2 class="animated-title" data-astro-cid-h6iffge2>The Failure Formula</h2> <div class="book-content" data-astro-cid-h6iffge2> <p data-astro-cid-h6iffge2><em data-astro-cid-h6iffge2>The Failure Formula</em> is a bold guide for leaders who want to thrive through every challenge. Built on the T.H.R.I.V.E. framework—<em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Transparency</strong></em>, <em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Humility</strong></em>, <em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Resilience</strong></em>, <em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Inspiration</strong></em>, <em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Value-Driven Impact</strong></em>, and <em data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2>Empowerment</strong></em>—this book equips you with the tools to embrace failure as a catalyst for growth.</p> <blockquote class="book-quote" data-astro-cid-h6iffge2>
Discover how to lead with <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Transparency</strong></em>, openly facing challenges to foster trust and connection. Cultivate <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Humility</strong></em>, owning your missteps and turning them into powerful lessons. Develop <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Resilience</strong></em> to weather any storm and emerge stronger. Through relatable stories and actionable insights, you'll find <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Inspiration</strong></em> to reframe setbacks, uncover opportunities, and stay motivated.

                        Focus on delivering <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Value-Driven Impact</strong></em> in every decision, ensuring your leadership leaves a lasting legacy. Most importantly, learn to <em data-astro-cid-h6iffge2><strong class="highlight" data-astro-cid-h6iffge2>Empower</strong></em> yourself and your team to face adversity with confidence, adapt to change, and turn challenges into triumphs.
</blockquote> <p data-astro-cid-h6iffge2><strong data-astro-cid-h6iffge2><em data-astro-cid-h6iffge2>The Failure Formula</em> is not just a book—it's your map to transforming failure into strength and leading with purpose through life's most defining moments.</strong></p> <div class="book-cta" data-astro-cid-h6iffge2> <p data-astro-cid-h6iffge2>Coming soon! Join our waiting list to be notified when the book launches.</p> <a href="#contact" class="btn" data-astro-cid-h6iffge2>Contact Us to Learn More</a> </div> </div> </section> ${renderComponent($$result2, "PodcastGrid", $$PodcastGrid, { "data-astro-cid-h6iffge2": true })} </div> </main> ${renderComponent($$result2, "FloatingActionButton", $$FloatingActionButton, { "data-astro-cid-h6iffge2": true })} ` })} `;
}, "/Users/sandy/Downloads/project 2/src/pages/media.astro", void 0);

const $$file = "/Users/sandy/Downloads/project 2/src/pages/media.astro";
const $$url = "/media";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Media,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
