<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

  let selectedColor = $state(0);
  let selectedSize = $state(0);
  let currentIndex = $state(0);

  let sizes = ['S', 'M', 'L'];
</script>

<div class="relative min-h-dvh w-full flex flex-col md:flex-row mt-16">
	<Carousel.Root
		class="group relative aspect-2/3 w-full bg-gray-100 md:hidden"
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
		<Carousel.Previous
      onPress={() => {
        currentIndex = (currentIndex - 1 + 5) % 5;
      }}
			class="z-50 ml-2 hidden size-6 cursor-pointer rounded-none bg-gray-200/60 group-hover:flex hover:bg-gray-200"
		/>
		<Carousel.Next
      onPress={() => {
        currentIndex = (currentIndex + 1) % 5;
      }}
			class="z-50 mr-2 hidden size-6 cursor-pointer rounded-none bg-gray-200/60 group-hover:flex hover:bg-gray-200"
		/>
    <span class="bottom-0 left-0 absolute w-full h-1 border border-gray-300 bg-gray-200">
      <span style={`width: 20%; left: ${currentIndex * 20}%`} class="bg-black h-1 z-50 absolute transition-all duration-300"></span>  
    </span>
	</Carousel.Root>
  <div class="hidden md:grid grid-cols-2 gap-1 w-1/2 max-w-lg xl:max-w-full">
    {#each Array(5), i}
      <div class={`aspect-2/3 w-full bg-gray-100 flex items-center justify-center ${i % 3 === 0 ? 'col-span-2' : ''}`}>
        <div class="p-1">hello</div>
      </div>
    {/each}
  </div>
	<div class="md:px-6 grow">
		<div class="flex w-full flex-col justify-center px-8 md:px-10 py-6 md:sticky md:top-1/2 md:-translate-y-1/2">
			<div class="flex flex-col">
				<span class="text-xs font-light text-gray-400"> New </span>
				<p class="text-lg font-semibold text-gray-900">Product Name</p>
				<span class="text-sm font-normal text-gray-600"> $49.99 </span>
			</div>
      <p class="mt-4 text-sm text-gray-700">
        Black
      </p>
			<div class="mt-2 ml-1 flex flex-row flex-wrap gap-x-2">
				{#each Array(3) as _, index}
					<button
						aria-label="Select color"
						class={`size-5 cursor-pointer border border-gray-300 ${selectedColor === index ? 'ring-2 ring-gray-400 ring-offset-1' : ''}`}
						style="background-color: hsl({index * 60}, 70%, 50%)"
						onclick={() => (selectedColor = index)}
					></button>
				{/each}
			</div>
      <p class="mt-4 text-sm text-gray-700">
        Size
      </p>
			<div class="mt-2 ml-1 flex flex-row flex-wrap gap-x-2">
				{#each sizes as size, index}
					<button
						aria-label="Select size"
						class={`aspect-video h-10 cursor-pointer border ${selectedSize === index ? 'border-2 border-gray-400' : ''}`}
						onclick={() => (selectedSize = index)}
					>
						{size}
					</button>
				{/each}
			</div>
      <Button class="mt-6 w-full rounded-none font-light text-lg h-12">
        Add to Bag
      </Button>
		</div>
	</div>
</div>
