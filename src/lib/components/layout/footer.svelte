<script>
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { Linkedin } from '@lucide/svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
</script>

<footer class="bg-gray-100 px-8 py-6 pt-12 md:px-10">
	<div class="flex flex-col justify-between gap-x-6 md:flex-row">
		<div class="mb-6 max-w-sm md:order-2">
			<p class="text-sm font-normal">Stay Updated</p>
			<p class="mt-2 max-w-lg text-xs font-light text-balance">
				Subscribe to our newsletter to receive the latest news and exclusive offers every week.
			</p>
			<form class="mt-4 flex max-w-md gap-x-2">
				<Input type="email" placeholder="Enter your email" class="grow rounded-none text-xs" />
				<Button type="submit" class="rounded-none px-4 py-2 text-xs">Subscribe</Button>
			</form>
		</div>
		<Accordion.Root type="multiple" class="w-full md:hidden">
			<Accordion.Item value="item-1">
				<Accordion.Trigger class="text-sm font-normal">Help</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-xs font-light text-balance">
					<a href="/help/client-support" class="hover:underline">Client Support</a>
					<a href="/help/size-guide" class="hover:underline">Size Guide</a>
					<a href="/help/returns-exchange" class="hover:underline">Return/Exchange</a>
					<a href="/help/shipping-returns" class="hover:underline">Shipping & Returns</a>
				</Accordion.Content>
			</Accordion.Item>
			<Accordion.Item value="item-2">
				<Accordion.Trigger class="text-sm font-normal">Shipping Details</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-xs font-light text-balance">
					<a href="/about-us" class="hover:underline">About Us</a>
					<a href="/student-discount" class="hover:underline">Student Discount</a>
					<a href="/sustainability" class="hover:underline">Sustainability</a>
					<a href="/blog" class="hover:underline">Blog</a>
					<a href="/careers" class="hover:underline">Careers</a>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
		<div class="hidden flex-row gap-x-16 md:flex">
			<div class="flex flex-col md:gap-4">
				<p class="text-sm font-normal">Help</p>
				<div class="flex flex-col gap-2 text-xs font-light text-balance">
					<a href="/help/client-support" class="hover:underline">Client Support</a>
					<a href="/help/size-guide" class="hover:underline">Size Guide</a>
					<a href="/help/returns-exchange" class="hover:underline">Return/Exchange</a>
					<a href="/help/shipping-returns" class="hover:underline">Shipping & Returns</a>
				</div>
			</div>
			<div class="flex flex-col md:gap-4">
				<p class="text-sm font-normal">Learn More</p>
				<div class="flex flex-col gap-2 text-xs font-light text-balance">
					<a href="/about-us" class="hover:underline">About Us</a>
					<a href="/student-discount" class="hover:underline">Student Discount</a>
					<a href="/sustainability" class="hover:underline">Sustainability</a>
					<a href="/blog" class="hover:underline">Blog</a>
					<a href="/careers" class="hover:underline">Careers</a>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-8 flex flex-row gap-x-4 md:mt-12">
		<a
			href="https://www.facebook.com/aegissports"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 text-sm text-gray-600 transition-colors hover:bg-gray-300/30 hover:text-gray-800"
		>
			<Linkedin class="size-5" />
		</a>
		<a
			href="https://www.twitter.com/aegissports"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 text-sm text-gray-600 transition-colors hover:bg-gray-300/30 hover:text-gray-800"
		>
			<Linkedin class="size-5" />
		</a>
		<a
			href="https://www.instagram.com/aegissports"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 text-sm text-gray-600 transition-colors hover:bg-gray-300/30 hover:text-gray-800"
		>
			<Linkedin class="size-5" />
		</a>
		<a
			href="https://www.linkedin.com/company/aegissports"
			target="_blank"
			rel="noopener noreferrer"
			class="p-1 text-sm text-gray-600 transition-colors hover:bg-gray-300/30 hover:text-gray-800"
		>
			<Linkedin class="size-5" />
		</a>
	</div>
	<div
		class="mt-8 flex flex-col items-start gap-y-6 border-t border-gray-300 pt-4 text-center text-xs font-light text-gray-600 md:flex-row md:justify-between md:pt-6"
	>
		<div class="order-2 md:order-0">
			&copy; {new Date().getFullYear()} Aegis Sports. All rights reserved.
		</div>
		<div class="flex gap-x-3">
			<a href="/privacy-policy" class="hover:underline">Privacy Policy</a> |
			<a href="/terms-of-service" class="hover:underline">Terms of Service</a>
			| <a href="/contact-us" class="hover:underline">Usage of Cookies</a> |
			<a href="/accessibility" class="hover:underline">Accessibility</a>
		</div>
	</div>
</footer>
