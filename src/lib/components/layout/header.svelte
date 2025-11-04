<script>
	import { Handbag, Menu, Search } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	let { onclicksidebar, onclicksearch, onclickcart } = $props();

	let darkMode = $state(page.url.pathname.includes('/products'));

	const handleScroll = () => {
		if (page.url.pathname.includes('/products')) {
			darkMode = true;
			return;
		}
		
		darkMode = window.scrollY > 350;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div
	class={`fixed top-0 left-0 z-50 grid h-16 w-full grid-cols-3 place-items-center px-6 transition-colors duration-200 md:px-10 ${darkMode ? 'bg-white' : 'bg-transparent'}`}
>
	<div class="flex w-full items-center justify-start">
		<button
			onclick={onclicksidebar}
			class="cursor-pointer rounded-full p-2 transition duration-500 hover:bg-gray-400/30"
		>
			<Menu class={`${darkMode ? 'text-gray-950' : 'text-white'} size-5 drop-shadow-sm`} />
		</button>
	</div>
	<a href="/" class="flex items-center justify-center">
		<h1
			class={`${darkMode ? 'text-gray-950' : 'text-white'} mx-auto flex items-center justify-center rounded-full border border-gray-700/30 bg-black/5 bg-clip-padding px-2 text-center text-xl font-bold  uppercase drop-shadow-lg backdrop-blur backdrop-contrast-100 backdrop-saturate-100 backdrop-filter md:text-2xl`}
		>
			Aegis Sports
		</h1>
	</a>
	<div class="flex w-full items-center justify-end gap-x-4">
		<button
			onclick={onclicksearch}
			class="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-gray-400/30"
		>
			<Search class={`${darkMode ? 'text-gray-950' : 'text-white'} size-5 drop-shadow-sm`} />
		</button>
		<button
			onclick={onclickcart}
			class="cursor-pointer rounded-full p-2 transition-colors duration-500 hover:bg-gray-400/30"
		>
			<Handbag class={`${darkMode ? 'text-gray-950' : 'text-white'} size-5 drop-shadow-sm`} />
		</button>
	</div>
</div>
