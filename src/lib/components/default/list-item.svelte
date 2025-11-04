<script>
	import { ChevronLeft, ChevronRight } from '@lucide/svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { type } = $props();

	let selectedColor = $state(0);
</script>

<div class="flex flex-col items-center">
	<a href="/products/1" class="w-full">
		<Carousel.Root
			class="group relative aspect-9/16 w-full bg-gray-100"
			opts={{
				loop: true,
				align: 'start'
			}}
		>
			<Carousel.Content class="relative h-full">
				{#each Array(5), i}
					<Carousel.Item class="flex h-full w-full items-center justify-center">
						<div class="p-1">hello</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			{#if type !== 'grid'}
				<Carousel.Previous
					class="z-50 ml-2 hidden size-6 cursor-pointer rounded-none bg-gray-200/60 group-hover:flex hover:bg-gray-200"
				/>
				<Carousel.Next
					class="z-50 mr-2 hidden size-6 cursor-pointer rounded-none bg-gray-200/60 group-hover:flex hover:bg-gray-200"
				/>
			{/if}
		</Carousel.Root>
	</a>
	{#if type !== 'grid'}
		<div class="flex h-26 w-full flex-col justify-center px-3">
			<div class="flex flex-col">
				<span class="text-xs font-light text-gray-400"> New </span>
				<p class="text-sm font-semibold text-gray-900">Product Name</p>
				<span class="text-xs font-normal text-gray-600"> $49.99 </span>
			</div>
			<div class="mt-2 ml-1 flex flex-row flex-wrap gap-x-2">
				{#each Array(3) as _, index}
					<button
						aria-label="Select color"
						class={`size-4 cursor-pointer border border-gray-300 ${selectedColor === index ? 'ring-2 ring-gray-400 ring-offset-1' : ''}`}
						style="background-color: hsl({index * 60}, 70%, 50%)"
						onclick={() => (selectedColor = index)}
					></button>
				{/each}
			</div>
		</div>
	{/if}
</div>
