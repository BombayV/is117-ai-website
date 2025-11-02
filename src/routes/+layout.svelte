<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Sidebar from '$lib/components/layout/sidebar.svelte';
	import Cart from '$lib/components/layout/cart.svelte';
	import Search from '$lib/components/layout/search.svelte';

	let isSidebarActive = $state(false);
	let isCartActive = $state(false);
	let isSearchActive = $state(true);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="relative h-full w-full">
	<Header
		onclicksidebar={() => (isSidebarActive = true)}
		onclickcart={() => (isCartActive = true)}
		onclicksearch={() => (isSearchActive = true)}
	/>
	{@render children()}
	<Footer />
</div>
<Sidebar bind:isSidebarActive />
<Cart bind:isCartActive />
<Search bind:isSearchActive />
