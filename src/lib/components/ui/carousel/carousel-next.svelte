<script>
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ChevronRight } from '@lucide/svelte';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon',
		...restProps
	} = $props();

	const emblaCtx = getEmblaContext('<Carousel.Next/>');

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		emblaCtx.scrollNext();
	};
</script>

<Button
	data-slot="carousel-next"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollNext}
	class={cn(
		'absolute size-8 rounded-full',
		emblaCtx.orientation === 'horizontal'
			? 'top-1/2 right-0 -translate-y-1/2'
			: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	onclick={handleClick}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	<ChevronRight class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
