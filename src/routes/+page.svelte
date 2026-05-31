<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const features = [
		{
			icon: '♜',
			title: 'Professional',
			text: 'Certified. Reliable. Trusted.'
		},
		{
			icon: '▣',
			title: 'Convenient',
			text: 'Mobile & flexible scheduling.'
		},
		{
			icon: '🔒',
			title: 'Confidential',
			text: 'Your privacy is our priority.'
		},
		{
			icon: '♚',
			title: 'Community Focused',
			text: 'Serving our community with integrity.'
		}
	];

	const services = [
		'General Notarizations',
		'Loan Signings',
		'Power of Attorney',
		'Acknowledgments',
		'Jurats',
		'Wills & Trusts',
		'Affidavits',
		'I-9 Verifications',
		'And More'
	];
</script>

<svelte:head>
	<title>
		Obsidian Signatures Partners | Mobile Notary Services
	</title>

	<meta
		name="description"
		content="Professional mobile notary services throughout Florida. Loan signings, acknowledgments, jurats, affidavits, powers of attorney, and more."
	/>

	<meta
		property="og:title"
		content="Obsidian Signatures Partners | Mobile Notary Services"
	/>

	<meta
		property="og:description"
		content="Professional mobile notary services throughout Florida."
	/>

	<meta
		property="og:type"
		content="website"
	/>

	<meta
		property="og:image"
		content="/logos/obsidian-quill.png"
	/>

	
</svelte:head>

<Navbar />

<main id="top" class="min-h-screen overflow-hidden bg-black text-[#f5e7c1]">
	<!-- HERO -->
	<section class="relative min-h-screen overflow-hidden pt-24">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center"
		></div>

		<div class="absolute inset-0 bg-black/58"></div>

		<div
			class="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 lg:px-8"
		>
			<div class="max-w-2xl">
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Obsidian Signatures Partners
				</p>

				<h1 class="mb-6 font-serif text-5xl leading-tight text-[#f8f1df] md:text-6xl lg:text-7xl">
					Your Signature.
					<br />
					Our Commitment.
					<br />
					<span class="text-[#d7b879]">Trusted Everywhere.</span>
				</h1>

				<div class="mb-7 h-0.5 w-16 bg-[#d7b879]"></div>

				<p class="mb-10 max-w-md text-base leading-relaxed text-[#f5e7c1cc]">
					Professional notary services you can rely on, wherever you are,
					whenever you need us.
				</p>

				<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
					<a
						// eslint-disable-next-line svelte/no-navigation-without-resolve
						href="/book-appointment"
						class="inline-flex items-center justify-center bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
					>
						Book an Appointment
					</a>

					<a
						// eslint-disable-next-line svelte/no-navigation-without-resolve
						href="/services"
						class="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#f5e7c1] transition hover:text-[#d7b879]"
					>
						Learn More
						<span class="text-[#d7b879]">›</span>
					</a>
				</div>
			</div>

			<div class="relative hidden translate-x-6 md:block">
				<div
					class="h-160 scale-110 bg-[url('/images/notary-hero.png')] bg-contain bg-center bg-no-repeat lg:h-180  lg:scale-125"
				></div>
			</div>
		</div>
	</section>

	<!-- FEATURE BAR -->
	<section class="border-y border-[#c8a96b22] bg-[#101010] px-6 py-10">
		<div class="mx-auto grid max-w-7xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
			{#each features as feature (feature.title)}
				<div>
					<div class="mb-3 text-3xl text-[#d7b879]">
						{feature.icon}
					</div>

					<h3 class="mb-2 text-sm font-bold uppercase tracking-widest text-[#f8f1df]">
						{feature.title}
					</h3>

					<p class="text-sm text-[#f5e7c1aa]">
						{feature.text}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- SERVICES -->
	<section id="services" class="relative px-6 py-28">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-25"
		></div>

		<div class="absolute inset-0 bg-black/70"></div>

		<div class="relative z-10 mx-auto max-w-7xl">
			<div class="mb-20 max-w-2xl">
				<p class="mb-4 text-sm uppercase tracking-[0.4em] text-[#c8a96bcc]">
					Our Services
				</p>

				<h2 class="font-serif text-4xl leading-tight text-[#f8f1df] md:text-5xl">
					Notary Services Tailored to You.
				</h2>

				<div class="mt-8 h-0.5 w-16 bg-[#d7b879]"></div>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each services as service (service)}
					<div
						class="rounded-4xl border border-[#c8a96b22] bg-black/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c8a96b77]"
					>
						<p class="text-lg font-semibold text-[#f8f1df]">
							{service}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CONTACT -->
	<section id="contact" class="bg-[#101010] px-6 py-28">
		<div
			class="mx-auto max-w-5xl rounded-4xl border border-[#c8a96b33] bg-black/55 p-8 text-center md:p-14"
		>
			<p class="mb-3 text-sm uppercase tracking-[0.4em] text-[#c8a96bcc]">
				Contact
			</p>

			<h2 class="mb-6 font-serif text-4xl text-[#f8f1df] md:text-5xl">
				Let’s Get It Signed.
			</h2>

			<p class="mx-auto mb-10 max-w-2xl text-[#f5e7c1cc]">
				Ready to book a signing appointment or learn more about our mobile notary services?
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="mailto:info@obsidiansignatures.com"
					class="bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
				>
					Email Us
				</a>

				<a
					href="tel:+13050000000"
					class="border border-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#d7b879] transition hover:bg-[#d7b879] hover:text-black"
				>
					Call Now
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />