import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from '../../chunks/astro/server_Dw1ZVuGC.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$post = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$post;
  const { resource, id } = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<h1>${resource}: ${id}</h1>`;
}, "/Users/bombayv/Documents/dev/projects/is117-ai-website/src/pages/posts/[post].astro", void 0);

const $$file = "/Users/bombayv/Documents/dev/projects/is117-ai-website/src/pages/posts/[post].astro";
const $$url = "/posts/[post]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$post,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
