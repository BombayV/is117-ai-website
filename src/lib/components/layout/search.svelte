<script>
	import { Apple, ChevronLeft, ChevronRight, SearchIcon, XIcon } from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';

	let { isSearchActive = $bindable(false) } = $props();

	const SEARCH_SUGGESTIONS = [
		{ title: 'New Arrivals', filter: '?category=new' },
		{ title: 'Best Sellers', filter: '?sort=bestseller' },
		{ title: 'On Sale', filter: '?discount=true' }
	];
</script>

{#if isSearchActive}
	<div
		in:slide={{ duration: 500, axis: 'y' }}
		out:slide={{ duration: 300, axis: 'y' }}
		class={`fixed top-0 left-0 z-60 flex h-full w-full flex-col bg-gray-50 transition-all duration-700 ease-in-out sm:max-h-96`}
	>
		<div class="relative flex h-18 w-full items-center justify-between px-4">
			<div class="relative flex w-full items-center rounded-md px-2 py-1">
				<SearchIcon class="size-6 text-gray-500" strokeWidth={1} />
				<input
					type="text"
					class="w-full border-0 bg-gray-50 px-4 py-2 text-base font-light text-gray-800 focus:outline-none"
					placeholder="Search..."
				/>
			</div>
			<button
				class="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
				aria-label="Close search"
				onclick={() => (isSearchActive = false)}
			>
				<XIcon class="size-6" strokeWidth={1} />
			</button>
		</div>
		<span class="h-0.5 w-full bg-gray-400/30"></span>
		<div
			in:fade={{ duration: 700, delay: 100 }}
			class="flex flex-1 flex-col gap-y-1 overflow-y-auto px-6 py-4"
		>
			<p class="mb-1 text-xs font-light text-gray-400 uppercase">Popular Searches</p>
			{#each SEARCH_SUGGESTIONS as suggestion}
				<div class="cursor-pointer hover:bg-gray-200">
					<p class="text-sm text-gray-700">{suggestion.title}</p>
				</div>
			{/each}
		</div>
	</div>
{/if}

{#if isSearchActive}
	<button
		aria-label="Close search"
		class="bg-opacity-50 fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black/70"
		onclick={() => (isSearchActive = false)}
	></button>
{/if}
