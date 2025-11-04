<script>
	import { Apple, ChevronLeft, ChevronRight, XIcon } from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';
	import Button from '../ui/button/button.svelte';

	let myClothes = [
		{
			name: 'test',
			image:
				'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
			imagePath: '/',
			size: 'M',
			color: 'Red',
			quantity: 1,
			price: 29.99
		}
	];
	let { isCartActive = $bindable(false) } = $props();
</script>

{#if isCartActive}
	<div
		in:slide={{ duration: 500, axis: 'x' }}
		out:slide={{ duration: 300, axis: 'x' }}
		class={`fixed top-0 right-0 z-60 flex h-full w-full flex-col bg-gray-50 transition-all duration-700 ease-in-out sm:max-w-md`}
	>
		<div class="relative flex h-18 w-full items-center justify-between px-4">
			<p class="text-sm font-light">My Bag</p>
			<button
				class="cursor-pointer rounded-full p-2 transition hover:bg-gray-200"
				aria-label="Close cart"
				onclick={() => (isCartActive = false)}
			>
				<XIcon class="size-6" strokeWidth={1} />
			</button>
		</div>
		<span class="h-0.5 w-full bg-gray-400/30"></span>
		<div in:fade={{ duration: 700, delay: 100 }} class="flex flex-1 flex-col overflow-y-auto">
			{#each myClothes as item}
				<div class="cursor-pointer px-6 py-4 hover:bg-gray-200"></div>
			{/each}
		</div>
		<div class="px-4 py-2 pb-4">
			<div class="relative flex w-full flex-col bg-gray-100">
				<div class="flex items-center justify-between px-4 py-3">
					<p class="text-xs font-light">Order Summary</p>
					<p class="text-xs font-light">1 Item</p>
				</div>
				<span class="mx-auto block h-0.5 w-[calc(100%-2rem)] bg-gray-400/30"></span>
				<div class="flex items-center justify-between px-4 py-3">
					<p class="text-xs font-light">Total</p>
					<p class="text-xs font-light">$29.99</p>
				</div>
			</div>
			<Button class="mt-4 h-12 w-full cursor-pointer rounded-none">Checkout</Button>
			<Button
				variant="outline"
				class="mt-2 flex h-12 w-full cursor-pointer items-center justify-center rounded-none"
			>
				<Apple class="mr-2 size-5" strokeWidth={1} />
				Apple Pay
			</Button>
		</div>
	</div>
{/if}

{#if isCartActive}
	<button
		aria-label="Close cart"
		class="bg-opacity-50 fixed top-0 left-0 z-50 h-full w-full cursor-pointer bg-black/70"
		onclick={() => (isCartActive = false)}
	></button>
{/if}
