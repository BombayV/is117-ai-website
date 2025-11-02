<script>
	import { ChevronLeft, ChevronRight, XIcon } from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';

	let allRoutes = [
		{
			name: 'test',
			image:
				'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
			imagePath: '/',
			imageName: 'Christmas Sweater',
			clothing: [
				{ name: 'T-Shirts', path: '/clothing/' },
				{ name: 'Hoodies', path: '/clothing/' },
				{ name: 'Jackets', path: '/clothing/' },
				{ name: 'Pants', path: '/clothing/' },
				{ name: 'Shorts', path: '/clothing/' },
				{ name: 'Activewear', path: '/clothing/' }
			],
			clothingAll: {
				name: 'Shop All',
				path: '/clothing/sportwear'
			},
			collections: [
				{ name: 'Designer', path: '/collections/designer' },
				{ name: 'Messi x Adidas', path: '/collections/messi-adidas' },
				{ name: 'Ronaldo x Nike', path: '/collections/ronaldo-nike' }
			],
			collectionsAll: {
				name: 'Shop All',
				path: '/collections/limited'
			}
		}
	];
	let activeRoute = $state(null);
	let { isSidebarActive = $bindable(false) } = $props();
</script>

{#if isSidebarActive}
	<div
		in:slide={{ duration: 300, axis: 'x' }}
		out:slide={{ duration: 300, axis: 'x' }}
		class={`fixed top-0 left-0 z-60 flex h-full w-full flex-col bg-gray-50 transition-all duration-700 ease-in-out ${!activeRoute ? 'sm:max-w-md' : 'max-w-2xl'}`}
	>
		<div class="relative flex h-18 w-full items-center justify-between px-4">
			{#if activeRoute}
				<button
					onclick={() => (activeRoute = null)}
					class="flex cursor-pointer items-center justify-center gap-x-1 rounded-full p-2 text-sm font-light transition hover:bg-gray-200"
					aria-label="Back"
				>
					<ChevronLeft class="size-5" strokeWidth={1} />
					<span>{activeRoute.name}</span>
				</button>
			{:else}
				<span></span>
			{/if}
			<button
				class="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
				aria-label="Close sidebar"
				onclick={() => (isSidebarActive = false)}
			>
				<XIcon class="size-6" strokeWidth={1} />
			</button>
		</div>
		<span class="h-0.5 w-full bg-gray-400/30"></span>
		{#if activeRoute}
			<div
				in:fade={{ duration: 700 }}
				class="relative flex flex-1 flex-col gap-x-24 gap-y-6 overflow-y-auto px-4 py-12 md:flex-row"
			>
				<div>
					<div class="flex flex-col gap-y-5 px-4">
						{#each activeRoute.clothing as clothing}
							<a
								href="/clothing{clothing.path}"
								class="flex w-full items-center justify-between text-sm font-light text-gray-800 transition hover:text-gray-900"
							>
								<span>{clothing.name}</span>
							</a>
						{/each}
						<a
							href={activeRoute.clothingAll.path}
							class="flex w-full items-center justify-between text-sm font-light text-gray-500 underline transition"
						>
							<span>{activeRoute.clothingAll.name}</span>
						</a>
					</div>
				</div>
				<a
					in:fade={{ duration: 700, delay: 200 }}
					href={activeRoute.imagePath}
					class="relative flex h-fit w-full items-start justify-start"
				>
					<img
						src={activeRoute.image}
						alt={activeRoute.name}
						class="h-auto w-full object-contain px-4"
					/>
					<span class="absolute right-0 bottom-0 mr-4 mb-3 px-4 text-base text-gray-600"
						>{activeRoute.imageName}</span
					>
				</a>
			</div>
		{:else}
			<div in:fade={{ duration: 700, delay: 100 }} class="flex flex-1 flex-col overflow-y-auto">
				{#each allRoutes as route}
					<div class="cursor-pointer px-6 py-4 hover:bg-gray-200">
						<button
							class="flex w-full items-center justify-between font-light text-gray-600 transition hover:text-gray-900"
							onclick={() => (activeRoute = route)}
						>
							<span>{route.name}</span>
							<ChevronRight class="ml-2 inline-block size-6" strokeWidth={1} />
						</button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
{/if}

{#if isSidebarActive}
	<button
		aria-label="Close sidebar"
		class="bg-opacity-50 fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black/70"
		onclick={() => (isSidebarActive = false)}
	></button>
{/if}
