<script>
	import { Handbag, Menu, Search } from '@lucide/svelte';

	let { onclicksidebar, onclicksearch, onclickcart } = $props();
</script>

<div class="fixed top-0 left-0 z-50 grid h-16 w-full grid-cols-3 place-items-center px-6 md:px-10">
	<div class="flex w-full items-center justify-start">
		<button
			onclick={onclicksidebar}
			class="cursor-pointer rounded-full p-2 transition duration-500 hover:bg-gray-900/30"
		>
			<Menu class="size-5 text-white drop-shadow-sm" />
		</button>
	</div>
	<h1
		class="mx-auto mt-4 flex items-center justify-center rounded-full border border-gray-700/30 bg-black/5 bg-clip-padding px-2 text-center text-xl font-bold text-white uppercase drop-shadow-lg backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter md:text-2xl"
	>
		Brand
	</h1>
	<div class="flex w-full items-center justify-end gap-x-4">
		<button
			onclick={onclicksearch}
			class="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-gray-900/30"
		>
			<Search class="size-5 text-white drop-shadow-sm" />
		</button>
		<button
			onclick={onclickcart}
			class="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-gray-900/30"
		>
			<Handbag class="size-5 text-white drop-shadow-sm" />
		</button>
	</div>
</div>
