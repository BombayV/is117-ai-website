<script>
	let { children } = $props();
</script>

<button class="-skew-x-12 rounded-sm bg-gray-300 px-4 py-1.5 font-semibold">
	{@render children?.()}
</button>
