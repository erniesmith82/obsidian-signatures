/* eslint-disable svelte/no-navigation-without-resolve */
<script>
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const services = [
		{
			title: 'General Notarizations',
			description:
				'Reliable notarization for everyday documents requiring identity verification and official witness.'
		},
		{
			title: 'Loan Signings',
			description:
				'Professional signing support for mortgage, refinance, and real estate closing documents.'
		},
		{
			title: 'Power of Attorney',
			description:
				'Careful handling of important authorization documents with privacy and professionalism.'
		},
		{
			title: 'Acknowledgments',
			description:
				'Verification that a signer willingly signed a document for its intended purpose.'
		},
		{
			title: 'Jurats',
			description:
				'Oath or affirmation notarizations for affidavits, sworn statements, and legal documents.'
		},
		{
			title: 'Wills & Trusts',
			description:
				'Confidential notary support for sensitive estate planning documents.'
		},
		{
			title: 'Affidavits',
			description:
				'Notarization for written statements confirmed under oath or affirmation.'
		},
		{
			title: 'I-9 Verification',
			description:
				'Convenient identity verification assistance for employment eligibility forms.'
		},
		{
			title: 'Mobile Notary',
			description:
				'Flexible travel notary services at your home, office, hospital, or agreed location.'
		}
	];

	function goToContact() {
		// eslint-disable-next-line svelte/no-navigation-without-resolve
		goto('/contact');
	}
</script>

<svelte:head>
	<title>Services | Obsidian Signatures Partners</title>
	<meta
		name="description"
		content="Explore professional mobile notary, loan signing, jurat, acknowledgment, affidavit, and document signing services from Obsidian Signatures Partners."
	/>
</svelte:head>

<Navbar />

<main class="min-h-screen overflow-hidden text-[#f5e7c1]">
	<section class="relative overflow-hidden px-6 pb-20 pt-40">
		<div class="absolute inset-0 bg-black/70"></div>

		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-50"
		></div>

		<div class="relative z-10 mx-auto max-w-7xl">
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Obsidian Signatures Partners
			</p>

			<h1 class="max-w-4xl font-serif text-5xl leading-tight text-[#f8f1df] md:text-7xl">
				Notary Services
				<br />
				<span class="text-[#d7b879]">Handled With Precision.</span>
			</h1>

			<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

			<p class="mt-8 max-w-2xl text-base leading-relaxed text-[#f5e7c1cc]">
				Professional, confidential, and convenient notary services designed for
				individuals, families, businesses, real estate professionals, and clients
				who expect every detail to be handled correctly.
			</p>
		</div>
	</section>

	<section class="relative px-6 py-20">
		<div class="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.title)}
				<article
					class="group rounded-4xl border border-[#c8a96b22] bg-black/55 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#d7b879]"
				>
					<div class="mb-6 h-0.5 w-12 bg-[#d7b879] transition group-hover:w-20"></div>

					<h2 class="mb-4 font-serif text-2xl text-[#f8f1df]">
						{service.title}
					</h2>

					<p class="leading-relaxed text-[#f5e7c1bb]">
						{service.description}
					</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="px-6 pb-24">
		<div
			class="mx-auto max-w-7xl rounded-4xl border border-[#c8a96b33] bg-black/65 p-8 backdrop-blur-xl md:p-14"
		>
			<div class="grid gap-10 md:grid-cols-2 md:items-center">
				<div>
					<p class="mb-3 text-xs uppercase tracking-[0.4em] text-[#c8a96bcc]">
						Book With Confidence
					</p>

					<h2 class="font-serif text-4xl text-[#f8f1df] md:text-5xl">
						Need a document signed?
					</h2>
				</div>

				<div>
					<p class="mb-8 leading-relaxed text-[#f5e7c1cc]">
						Whether you need one document notarized or a full signing appointment,
						Obsidian Signatures Partners provides a polished and professional
						experience from start to finish.
					</p>

					<button
						type="button"
						onclick={goToContact}
						class="inline-flex bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
					>
						Book an Appointment
					</button>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />