import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CySP4gbj.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/analyze-assessment.astro.mjs');
const _page2 = () => import('./pages/api/get-question-id.astro.mjs');
const _page3 = () => import('./pages/api/save-assessment.astro.mjs');
const _page4 = () => import('./pages/api/start-assessment.astro.mjs');
const _page5 = () => import('./pages/api/submit-assessment.astro.mjs');
const _page6 = () => import('./pages/assessment/questions.astro.mjs');
const _page7 = () => import('./pages/assessment/resume.astro.mjs');
const _page8 = () => import('./pages/assessment/start.astro.mjs');
const _page9 = () => import('./pages/assessment/thank-you.astro.mjs');
const _page10 = () => import('./pages/blog/7-kpis-that-tell-truth-about-your-business.astro.mjs');
const _page11 = () => import('./pages/blog/build-better-leadership-guess-framework.astro.mjs');
const _page12 = () => import('./pages/blog/choosing-right-roofing-crm.astro.mjs');
const _page13 = () => import('./pages/blog/facing-leadership-woes-be-the-buffalo.astro.mjs');
const _page14 = () => import('./pages/blog/failure-formula-turning-setbacks-into-strengths.astro.mjs');
const _page15 = () => import('./pages/blog/flip-script-become-storm-catcher.astro.mjs');
const _page16 = () => import('./pages/blog/from-checklists-to-champions.astro.mjs');
const _page17 = () => import('./pages/blog/how-to-build-business-that-doesnt-need-you.astro.mjs');
const _page18 = () => import('./pages/blog/how-to-get-10x-effort-from-your-employees.astro.mjs');
const _page19 = () => import('./pages/blog/maximizing-referrals-with-gtr.astro.mjs');
const _page20 = () => import('./pages/blog/new-beginnings-leadership-lights-path.astro.mjs');
const _page21 = () => import('./pages/blog/new-journey-new-team-building-culture.astro.mjs');
const _page22 = () => import('./pages/blog/no-such-thing-as-bad-lead.astro.mjs');
const _page23 = () => import('./pages/blog/optimizing-canvassing-with-leadscout.astro.mjs');
const _page24 = () => import('./pages/blog/power-of-your-inner-circle.astro.mjs');
const _page25 = () => import('./pages/blog/power-of-your-network.astro.mjs');
const _page26 = () => import('./pages/blog/profit-multiplier-formula.astro.mjs');
const _page27 = () => import('./pages/blog/seeing-team-win-through-tragedy.astro.mjs');
const _page28 = () => import('./pages/blog/stop-selling-roofs-start-selling-peace-of-mind.astro.mjs');
const _page29 = () => import('./pages/blog/truth-about-roofing-gurus.astro.mjs');
const _page30 = () => import('./pages/blog/turning-struggles-into-strengths.astro.mjs');
const _page31 = () => import('./pages/blog/ultimate-guide-leadership-training.astro.mjs');
const _page32 = () => import('./pages/blog/why-we-started-day41-thrive.astro.mjs');
const _page33 = () => import('./pages/blog/win-with-warranties-product-enhancements.astro.mjs');
const _page34 = () => import('./pages/blog/work-smarter-not-harder.astro.mjs');
const _page35 = () => import('./pages/blog.astro.mjs');
const _page36 = () => import('./pages/brand-ambassador.astro.mjs');
const _page37 = () => import('./pages/contact.astro.mjs');
const _page38 = () => import('./pages/dont-guess.astro.mjs');
const _page39 = () => import('./pages/growth-gauge.astro.mjs');
const _page40 = () => import('./pages/join-us.astro.mjs');
const _page41 = () => import('./pages/know-before-you-grow.astro.mjs');
const _page42 = () => import('./pages/media.astro.mjs');
const _page43 = () => import('./pages/partners.astro.mjs');
const _page44 = () => import('./pages/plans.astro.mjs');
const _page45 = () => import('./pages/privacy.astro.mjs');
const _page46 = () => import('./pages/programs/flip-script.astro.mjs');
const _page47 = () => import('./pages/programs/four-cs-framework.astro.mjs');
const _page48 = () => import('./pages/programs/gaf-golden-pledge.astro.mjs');
const _page49 = () => import('./pages/programs/guess-framework.astro.mjs');
const _page50 = () => import('./pages/programs/leadership-consulting.astro.mjs');
const _page51 = () => import('./pages/programs/omni-local-marketing.astro.mjs');
const _page52 = () => import('./pages/programs/proven-sales-strategy.astro.mjs');
const _page53 = () => import('./pages/programs/repair-replace-strategy.astro.mjs');
const _page54 = () => import('./pages/programs/winning-sales-compass.astro.mjs');
const _page55 = () => import('./pages/programs.astro.mjs');
const _page56 = () => import('./pages/rates.astro.mjs');
const _page57 = () => import('./pages/swag.astro.mjs');
const _page58 = () => import('./pages/thrivers.astro.mjs');
const _page59 = () => import('./pages/vision-mission-values.astro.mjs');
const _page60 = () => import('./pages/win-with-warranties.astro.mjs');
const _page61 = () => import('./pages/winning-sales-compass.astro.mjs');
const _page62 = () => import('./pages/work-with-us.astro.mjs');
const _page63 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/analyze-assessment.ts", _page1],
    ["src/pages/api/get-question-id.ts", _page2],
    ["src/pages/api/save-assessment.ts", _page3],
    ["src/pages/api/start-assessment.ts", _page4],
    ["src/pages/api/submit-assessment.ts", _page5],
    ["src/pages/assessment/questions.astro", _page6],
    ["src/pages/assessment/resume.astro", _page7],
    ["src/pages/assessment/start.astro", _page8],
    ["src/pages/assessment/thank-you.astro", _page9],
    ["src/pages/blog/7-kpis-that-tell-truth-about-your-business.astro", _page10],
    ["src/pages/blog/build-better-leadership-guess-framework.astro", _page11],
    ["src/pages/blog/choosing-right-roofing-crm.astro", _page12],
    ["src/pages/blog/facing-leadership-woes-be-the-buffalo.astro", _page13],
    ["src/pages/blog/failure-formula-turning-setbacks-into-strengths.astro", _page14],
    ["src/pages/blog/flip-script-become-storm-catcher.astro", _page15],
    ["src/pages/blog/from-checklists-to-champions.astro", _page16],
    ["src/pages/blog/how-to-build-business-that-doesnt-need-you.astro", _page17],
    ["src/pages/blog/how-to-get-10x-effort-from-your-employees.astro", _page18],
    ["src/pages/blog/maximizing-referrals-with-gtr.astro", _page19],
    ["src/pages/blog/new-beginnings-leadership-lights-path.astro", _page20],
    ["src/pages/blog/new-journey-new-team-building-culture.astro", _page21],
    ["src/pages/blog/no-such-thing-as-bad-lead.astro", _page22],
    ["src/pages/blog/optimizing-canvassing-with-leadscout.astro", _page23],
    ["src/pages/blog/power-of-your-inner-circle.astro", _page24],
    ["src/pages/blog/power-of-your-network.astro", _page25],
    ["src/pages/blog/profit-multiplier-formula.astro", _page26],
    ["src/pages/blog/seeing-team-win-through-tragedy.astro", _page27],
    ["src/pages/blog/stop-selling-roofs-start-selling-peace-of-mind.astro", _page28],
    ["src/pages/blog/truth-about-roofing-gurus.astro", _page29],
    ["src/pages/blog/turning-struggles-into-strengths.astro", _page30],
    ["src/pages/blog/ultimate-guide-leadership-training.astro", _page31],
    ["src/pages/blog/why-we-started-day41-thrive.astro", _page32],
    ["src/pages/blog/win-with-warranties-product-enhancements.astro", _page33],
    ["src/pages/blog/work-smarter-not-harder.astro", _page34],
    ["src/pages/blog/index.astro", _page35],
    ["src/pages/brand-ambassador.astro", _page36],
    ["src/pages/contact.astro", _page37],
    ["src/pages/dont-guess.astro", _page38],
    ["src/pages/growth-gauge.astro", _page39],
    ["src/pages/join-us.astro", _page40],
    ["src/pages/know-before-you-grow.astro", _page41],
    ["src/pages/media.astro", _page42],
    ["src/pages/partners.astro", _page43],
    ["src/pages/plans.astro", _page44],
    ["src/pages/privacy.astro", _page45],
    ["src/pages/programs/flip-script.astro", _page46],
    ["src/pages/programs/four-cs-framework.astro", _page47],
    ["src/pages/programs/gaf-golden-pledge.astro", _page48],
    ["src/pages/programs/guess-framework.astro", _page49],
    ["src/pages/programs/leadership-consulting.astro", _page50],
    ["src/pages/programs/omni-local-marketing.astro", _page51],
    ["src/pages/programs/proven-sales-strategy.astro", _page52],
    ["src/pages/programs/repair-replace-strategy.astro", _page53],
    ["src/pages/programs/winning-sales-compass.astro", _page54],
    ["src/pages/programs.astro", _page55],
    ["src/pages/rates.astro", _page56],
    ["src/pages/swag.astro", _page57],
    ["src/pages/thrivers.astro", _page58],
    ["src/pages/vision-mission-values.astro", _page59],
    ["src/pages/win-with-warranties.astro", _page60],
    ["src/pages/winning-sales-compass.astro", _page61],
    ["src/pages/work-with-us.astro", _page62],
    ["src/pages/index.astro", _page63]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
