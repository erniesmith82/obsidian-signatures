<script>
	import { goto } from '$app/navigation';

	let mobileOpen = $state(false);

	const links = [
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	];

	/**
	 * @param {string} href
	 */
	function navigateTo(href) {
		mobileOpen = false;
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		goto(href);
	}
</script>

<nav
	class="fixed top-0 z-50 h-22 w-full border-b border-[#c8a96b55] bg-black/40 px-6 backdrop-blur-xl"
>
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between">
		<button
			type="button"
			onclick={() => navigateTo('/')}
			class="flex h-full items-center gap-4 text-left"
			aria-label="Go to home"
		>
			<img
				src="/logos/obsidian-logo.png"
				alt="Obsidian Signatures Partners Logo"
				class="h-19.5 w-19.5 object-contain"
			/>

			<div>
				<h1 class="text-base font-semibold tracking-[0.25em] text-[#f5e7c1] md:text-lg">
					OBSIDIAN
				</h1>

				<p class="text-[10px] tracking-[0.35em] text-[#c8a96bcc] md:text-xs">
					SIGNATURES PARTNERS
				</p>
			</div>
		</button>

		<div class="hidden items-center gap-8 text-sm md:flex">
			{#each links as link (link.label)}
				<button
					type="button"
					onclick={() => navigateTo(link.href)}
					class="transition hover:text-[#e5c88f]"
				>
					{link.label}
				</button>
			{/each}

			<button
				type="button"
				onclick={() => navigateTo('/contact')}
				class="rounded-full border border-[#c8a96b] px-5 py-2 font-semibold text-[#c8a96b] transition hover:bg-[#c8a96b] hover:text-black"
			>
				Book Now
			</button>
		</div>

		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-full border border-[#c8a96b55] text-[#c8a96b] md:hidden"
			aria-label="Toggle menu"
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				✕
			{:else}
				☰
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div
			class="mx-auto mt-2 flex max-w-7xl flex-col gap-4 rounded-4xl border border-[#c8a96b22] bg-black/90 p-5 text-sm backdrop-blur-xl md:hidden"
		>
			{#each links as link (link.label)}
				<button
					type="button"
					class="rounded-4xl px-4 py-3 text-left transition hover:bg-[#c8a96b11] hover:text-[#e5c88f]"
					onclick={() => navigateTo(link.href)}
				>
					{link.label}
				</button>
			{/each}

			<button
				type="button"
				class="rounded-full border border-[#c8a96b] bg-[#c8a96b] px-5 py-3 text-center font-semibold text-black"
				onclick={() => navigateTo('/contact')}
			>
				Book Now
			</button>
		</div>
	{/if}
</nav>