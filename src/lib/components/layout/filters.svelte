<script>
	import { ChevronLeft, ChevronRight, XIcon } from '@lucide/svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import { fade, slide } from 'svelte/transition';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import Button from '../ui/button/button.svelte';

	let { isFiltersSidebarActive = $bindable(false) } = $props();

	let filters = $state({
		sortBy: null,
		color: [],
		size: []
	});
</script>

{#if isFiltersSidebarActive}
	<div
		in:slide={{ duration: 500, axis: 'x' }}
		out:slide={{ duration: 300, axis: 'x' }}
		class={`fixed top-0 left-0 z-60 flex h-full w-full flex-col bg-gray-50 transition-all duration-700 ease-in-out sm:max-w-md`}
	>
		<div class="relative flex h-18 w-full items-center justify-between px-4">
			<p class="p-2 text-sm font-light text-gray-800">Filters & Sort</p>
			<button
				class="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
				aria-label="Close filters sidebar"
				onclick={() => (isFiltersSidebarActive = false)}
			>
				<XIcon class="size-6" strokeWidth={1} />
			</button>
		</div>
		<span class="h-0.5 w-full bg-gray-400/30"></span>
		<div in:fade={{ duration: 700, delay: 100 }} class="flex flex-1 flex-col overflow-y-auto">
			<Accordion.Root type="multiple" class="w-full px-6">
				<Accordion.Item value="item-1">
					<Accordion.Trigger>Sort By</Accordion.Trigger>
					<Accordion.Content class="flex flex-col gap-4 text-balance">
						{#each ['Price: Low to High', 'Price: High to Low', 'Newest Arrivals', 'Best Sellers'] as option}
							<label class="flex items-center gap-x-2">
								<Checkbox
									checked={filters.sortBy === option}
									onCheckedChange={(v) => {
										if (v) {
											filters.sortBy = option;
										} else {
											filters.sortBy = null;
										}
									}}
								/>
								<span class="text-sm font-light text-gray-800">{option}</span>
							</label>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger>Color</Accordion.Trigger>
					<Accordion.Content class="grid grid-cols-2 gap-4">
						{#each ['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'] as color}
							<label class="flex items-center gap-x-2">
								<button
									class={`size-5 border border-gray-300 ${filters.color.includes(color) ? 'border-2 border-gray-400' : ''}`}
									aria-label="Select color"
									style="background-color: {color.toLowerCase()};"
									onclick={() => {
										if (filters.color.includes(color)) {
											filters.color = filters.color.filter((c) => c !== color);
										} else {
											filters.color = [...filters.color, color];
										}
									}}
								></button>
								<span class="text-sm font-light text-gray-800">{color}</span>
							</label>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger>Size</Accordion.Trigger>
					<Accordion.Content class="grid grid-cols-2 gap-4 text-balance">
						{#each ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as size}
							<label class="flex items-center gap-x-2">
								<Checkbox
									onCheckedChange={(v) => {
										if (v) {
											filters.size = [...filters.size, size];
										} else {
											filters.size = filters.size.filter((s) => s !== size);
										}
									}}
								/>
								<span class="text-sm font-light text-gray-800">{size}</span>
							</label>
						{/each}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
		<div
			class="relative flex h-36 w-full flex-col items-center justify-center gap-y-2 border-t px-6 py-4"
		>
			<Button
				onclick={() => (isFiltersSidebarActive = false)}
				class="h-12 w-full cursor-pointer rounded-none font-light"
				>Apply {filters.color.length + filters.size.length + (filters.sortBy ? 1 : 0) > 0
					? `(${filters.color.length + filters.size.length + (filters.sortBy ? 1 : 0)})`
					: ''}</Button
			>
			<Button
				variant="outline"
				class="h-12 w-full cursor-pointer rounded-none font-light"
				onclick={() => {
					filters = {
						sortBy: null,
						color: [],
						size: []
					};
					isFiltersSidebarActive = false;
				}}
			>
				Clear All
			</Button>
		</div>
	</div>
{/if}

{#if isFiltersSidebarActive}
	<button
		aria-label="Close filters sidebar"
		class="bg-opacity-50 fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black/70"
		onclick={() => (isFiltersSidebarActive = false)}
	></button>
{/if}
