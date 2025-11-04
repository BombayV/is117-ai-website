<script>
	import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
	import { getEmblaContext } from './context.js';
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { ChevronLeft } from '@lucide/svelte';

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'icon',
		onPress,
		...restProps
	} = $props();

	const emblaCtx = getEmblaContext('<Carousel.Previous/>');

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		emblaCtx.scrollPrev();
		onPress?.(e);
	};
</script>

<Button
	data-slot="carousel-previous"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollPrev}
	class={cn(
		'absolute size-8 rounded-full',
		emblaCtx.orientation === 'horizontal'
			? 'top-1/2 left-0 -translate-y-1/2'
			: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
		className
	)}
	onclick={handleClick}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
	bind:ref
>
	<ChevronLeft class="size-4" />
	<span class="sr-only">Previous slide</span>
</Button>
