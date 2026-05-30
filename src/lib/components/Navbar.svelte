<script>
	let mobileOpen = $state(false);

	const links = [
		{ label: 'About', href: '/about' },
		{ label: 'Services', href: '/services' },
		{ label: 'FAQ', href: '/faq' },
		{ label: 'Contact', href: '/contact' }
	];
</script>

<nav class="fixed top-0 z-50 h-22 w-full border-b border-[#c8a96b55] bg-black/60 px-6 backdrop-blur-xl">
	<div class="mx-auto flex h-full max-w-7xl items-center justify-between">
		<a
			href="/"
			class="flex h-full items-center gap-1 overflow-visible"
			aria-label="Go to homepage"
		>
			<div class="relative h-18 w-30 overflow-visible">
				<img
					src="/logos/obsidian-quill.png"
					alt="Obsidian Signatures Partners Logo"
					class="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 object-contain"
				/>
			</div>

			<div class="-ml-2">
				<h1 class="text-base font-semibold tracking-[0.25em] text-[#f5e7c1] md:text-lg">
					OBSIDIAN
				</h1>

				<p class="text-[10px] tracking-[0.35em] text-[#c8a96bcc] md:text-xs">
					SIGNATURES PARTNERS
				</p>
			</div>
		</a>

		<div class="hidden items-center gap-8 text-sm md:flex">
			{#each links as link (link.label)}
				<a href={link.href} class="transition hover:text-[#e5c88f]">
					{link.label}
				</a>
			{/each}

			<a
				href="/book-appointment"
				class="rounded-full border border-[#c8a96b] px-5 py-2 font-semibold text-[#c8a96b] transition hover:bg-[#c8a96b] hover:text-black"
			>
				Book Now
			</a>
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
			class="mx-auto mt-4 flex max-w-7xl flex-col gap-4 rounded-3xl border border-[#c8a96b22] bg-black/90 p-5 text-sm backdrop-blur-xl md:hidden"
		>
			{#each links as link (link.label)}
				<a
					href={link.href}
					class="rounded-2xl px-4 py-3 transition hover:bg-[#c8a96b11] hover:text-[#e5c88f]"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}

			<a
				href="/book-appointment"
				class="rounded-full border border-[#c8a96b] bg-[#c8a96b] px-5 py-3 text-center font-semibold text-black"
				onclick={() => (mobileOpen = false)}
			>
				Book Now
			</a>
		</div>
	{/if}
</nav>