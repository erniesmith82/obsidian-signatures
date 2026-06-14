<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>
		About | Obsidian Signatures Partners
	</title>

	<meta
		name="description"
		content="Learn about Obsidian Signatures Partners and our commitment to professionalism, confidentiality, reliability, and exceptional mobile notary services throughout Florida."
	/>

	<meta
		property="og:title"
		content="About | Obsidian Signatures Partners"
	/>

	<meta
		property="og:description"
		content="Learn about our commitment to professional and reliable mobile notary services."
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

<main class="min-h-screen overflow-hidden bg-black text-[#f5e7c1]">
	<!-- HERO -->
	<section class="relative overflow-hidden px-6 pb-20 pt-40">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-75"
		></div>

		<div class="absolute inset-0 bg-black/60"></div>

		<div class="relative z-10 mx-auto max-w-7xl">
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				About Obsidian Signatures Partners
			</p>

			<h1 class="max-w-5xl font-serif text-5xl leading-tight text-[#d7b879] md:text-7xl">
				Built on Trust.
				<br />
				Driven by Professionalism.
			</h1>

			<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

			<p class="mt-8 max-w-3xl text-base leading-relaxed text-[#f5e7c1cc]">
				Obsidian Signatures Partners was founded with a simple goal:
				to provide professional notary services with reliability,
				discretion, and convenience at the center of every appointment.
			</p>
		</div>
	</section>

	<!-- STORY -->
	<section class="bg-[#101010] px-6 py-24">
		<div class="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
			<div>
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Our Story
				</p>

				<h2 class="font-serif text-4xl leading-tight text-[#d7b879] md:text-5xl">
					Professional service with a personal touch.
				</h2>

				<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>
			</div>

			<div class="space-y-6 leading-relaxed text-[#f5e7c1bb]">
				<p>
					Obsidian Signatures Partners was created to provide a more refined and
					professional notary experience for individuals, families, and businesses
					throughout Florida.
				</p>

				<p>
					We understand that notarizations often involve important life moments,
					legal matters, financial transactions, and sensitive documentation.
					That is why we approach every appointment with professionalism,
					attention to detail, and respect for our clients’ time and privacy.
				</p>

				<p>
					Whether assisting with loan signings, estate documents, affidavits,
					powers of attorney, or general notarizations, our goal is to create
					a smooth, reliable, and convenient process from start to finish.
				</p>

				<p>
					By combining modern convenience with traditional professionalism,
					Obsidian Signatures Partners delivers mobile notary services designed
					around the needs of today’s clients.
				</p>
			</div>
		</div>
	</section>

	<!-- VALUES -->
	<section class="relative px-6 py-24">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-20"
		></div>

		<div class="absolute inset-0 bg-black/75"></div>

		<div class="relative z-10 mx-auto max-w-7xl">
			<div class="mb-16 max-w-3xl">
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Why Clients Choose Us
				</p>

				<h2 class="font-serif text-4xl leading-tight text-[#d7b879] md:text-5xl">
					Service rooted in trust and reliability.
				</h2>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<div
					class="rounded-4xl border border-[#c8a96b22] bg-black/50 p-8"
				>
					<h3 class="mb-4 font-serif text-2xl text-[#f8f1df]">
						Professional
					</h3>

					<p class="leading-relaxed text-[#f5e7c1bb]">
						Every appointment is handled with professionalism, precision,
						and attention to detail.
					</p>
				</div>

				<div
					class="rounded-4xl border border-[#c8a96b22] bg-black/50 p-8"
				>
					<h3 class="mb-4 font-serif text-2xl text-[#f8f1df]">
						Convenient
					</h3>

					<p class="leading-relaxed text-[#f5e7c1bb]">
						Mobile services designed to meet clients where they are,
						on their schedule.
					</p>
				</div>

				<div
					class="rounded-4xl border border-[#c8a96b22] bg-black/50 p-8"
				>
					<h3 class="mb-4 font-serif text-2xl text-[#f8f1df]">
						Confidential
					</h3>

					<p class="leading-relaxed text-[#f5e7c1bb]">
						Sensitive documents and personal information are treated
						with discretion and care.
					</p>
				</div>

				<div
					class="rounded-4xl border border-[#c8a96b22] bg-black/50 p-8"
				>
					<h3 class="mb-4 font-serif text-2xl text-[#f8f1df]">
						Reliable
					</h3>

					<p class="leading-relaxed text-[#f5e7c1bb]">
						Clients can depend on timely communication, professionalism,
						and consistent service.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="bg-[#101010] px-6 pb-24 pt-10">
		<div
			class="mx-auto max-w-5xl rounded-4xl border border-[#c8a96b33] bg-black/60 p-8 text-center md:p-14"
		>
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Ready to Schedule?
			</p>

			<h2 class="mb-6 font-serif text-4xl text-[#d7b879] md:text-5xl">
				Let’s make the process simple.
			</h2>

			<p class="mx-auto mb-10 max-w-2xl leading-relaxed text-[#f5e7c1bb]">
				Whether you need a single document notarized or ongoing signing support,
				Obsidian Signatures Partners is here to help.
			</p>

			<a
				href={resolve('/contact')}
				class="inline-flex bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
			>
				Contact Us
			</a>
		</div>
	</section>
</main>

<Footer />