<script>
	import ListItem from '$lib/components/default/list-item.svelte';
	import Filters from '$lib/components/layout/filters.svelte';
	import { Columns2, Funnel, LayoutGrid, Square } from '@lucide/svelte';

	let layoutModes = {
		grid: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6',
		list: 'grid-cols-2 lg:grid-cols-4 3xl:grid-cols-5',
		compact: 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
	};

	let allClothes = $state([]);
	let currentLayout = $state('list');
	let isFiltersSidebarActive = $state(false);
</script>

<svelte:head>
	<title>Aegis Sports | Shop</title>
	<meta
		name="description"
		content="Find the best sportswear and accessories at Aegis Sports. Explore our wide range of products designed for athletes and fitness enthusiasts."
	/>
	<meta name="og:title" content="Aegis Sports | Shop" />
	<meta
		name="og:description"
		content="Find the best sportswear and accessories at Aegis Sports. Explore our wide range of products designed for athletes and fitness enthusiasts."
	/>
</svelte:head>

<main class="relative max-h-104 w-full overflow-hidden">
	<img
		src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
		alt="Men Shopping"
		class="h-full w-full object-cover"
	/>
	<span class="absolute inset-0 bg-linear-to-b from-black/30 to-black/70"></span>
</main>
<div
	class="flex h-16 items-center justify-center border-y border-y-gray-400/30 bg-gray-100 px-4 py-1"
>
	<h1 class="text-base font-light text-gray-600">Shop</h1>
</div>
<div class="relative flex w-full items-center justify-between px-6 py-6 md:px-10">
	<button
		onclick={() => (isFiltersSidebarActive = true)}
		class="relative flex w-fit cursor-pointer items-center gap-x-1.5 py-1 text-sm font-light text-gray-600"
	>
		<Funnel class="size-4" strokeWidth="1.3" />
		<span>Sort & Filter</span>
		<span class="absolute bottom-0 left-0 w-full border-b"></span>
	</button>
	<div class="flex items-center justify-center gap-x-2 text-gray-600">
		<button
			class={`cursor-pointer transition-colors duration-300 ${currentLayout === 'compact' ? 'bg-gray-400/30' : ''} rounded-sm p-1`}
			onclick={() => (currentLayout = 'compact')}
		>
			<Square class="size-5" strokeWidth="1.3" />
		</button>
		<button
			class={`cursor-pointer transition-colors duration-300 ${currentLayout === 'list' ? 'bg-gray-400/30' : ''} rounded-sm p-1`}
			onclick={() => (currentLayout = 'list')}
		>
			<Columns2 class="size-5" strokeWidth="1.3" />
		</button>
		<button
			class={`cursor-pointer transition-colors duration-300 ${currentLayout === 'grid' ? 'bg-gray-400/30' : ''} rounded-sm p-1`}
			onclick={() => (currentLayout = 'grid')}
		>
			<LayoutGrid class="size-5" strokeWidth="1.3" />
		</button>
	</div>
</div>
<div class={`grid ${layoutModes[currentLayout]} gap-1 pb-4`}>
	{#each Array(12) as item}
		<ListItem type={currentLayout} />
	{/each}
</div>
<Filters bind:isFiltersSidebarActive />
