<script>
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let expandedService = $state('');

	const services = [
		{
			title: 'General Notarizations',
			description:
				'Reliable notarization for everyday documents requiring identity verification and official witness.',
			fullDescription:
				'General notarization services are available for a wide range of personal, business, and legal documents. We verify identity, confirm willingness to sign, and complete the notarial act with professionalism and attention to detail. This service is ideal for forms, agreements, authorizations, affidavits, and other documents requiring a notary public.'
		},
		{
			title: 'Loan Signings',
			description:
				'Professional signing support for mortgage, refinance, and real estate closing documents.',
			fullDescription:
				'Loan signing appointments require accuracy, organization, and a calm professional process. We assist with mortgage, refinance, purchase, seller, and real estate closing document packages, helping signers complete the required paperwork properly while maintaining confidentiality and efficiency throughout the appointment.'
		},
		{
			title: 'Power of Attorney',
			description:
				'Careful handling of important authorization documents with privacy and professionalism.',
			fullDescription:
				'Power of Attorney documents often involve sensitive financial, medical, or personal authority. We provide careful notary support by verifying the signer’s identity and willingness to sign while treating the appointment with the privacy, patience, and seriousness these documents deserve.'
		},
		{
			title: 'Acknowledgments',
			description:
				'Verification that a signer willingly signed a document for its intended purpose.',
			fullDescription:
				'An acknowledgment confirms that the signer personally appeared before the notary, was properly identified, and acknowledged signing the document willingly. This notarial act is commonly used for deeds, agreements, contracts, and other documents where voluntary execution must be verified.'
		},
		{
			title: 'Jurats',
			description:
				'Oath or affirmation notarizations for affidavits, sworn statements, and legal documents.',
			fullDescription:
				'A jurat is used when a signer must swear or affirm that the contents of a document are true. We administer the oath or affirmation, verify identity, and complete the jurat certificate. This is commonly required for affidavits, sworn statements, and certain legal or official documents.'
		},
		{
			title: 'Wills & Trusts',
			description:
				'Confidential notary support for sensitive estate planning documents.',
			fullDescription:
				'Wills, trusts, and estate-related documents require discretion and professionalism. We provide notary services for these sensitive appointments while encouraging clients to ensure all legal documents are prepared properly before the notary appointment. We do not provide legal advice, but we handle the notarization process carefully.'
		},
		{
			title: 'Affidavits',
			description:
				'Notarization for written statements confirmed under oath or affirmation.',
			fullDescription:
				'Affidavits are written statements made under oath or affirmation. We verify the signer’s identity, administer the oath or affirmation when required, and notarize the document according to the appropriate notarial procedure. This service is commonly used for legal, personal, and business matters.'
		},
		{
			title: 'I-9 Verification',
			description:
				'Convenient identity verification assistance for employment eligibility forms.',
			fullDescription:
				'I-9 verification assistance helps employers and employees complete identity verification requirements when remote or mobile support is needed. We review the required identification documents in person and help complete the authorized representative portion when requested by the employer.'
		},
		{
			title: 'Mobile Notary',
			description:
				'Flexible travel notary services at your home, office, hospital, or agreed location.',
			fullDescription:
				'Mobile notary appointments provide convenient service at a location that works for you, including homes, offices, hospitals, care facilities, or other agreed meeting places. This is ideal for clients who need flexibility, privacy, or assistance outside of a traditional office setting.'
		}
	];

	/**
	 * @param {string} title
	 */
	function toggleService(title) {
		expandedService = expandedService === title ? '' : title;
	}

	function goToBook() {
		void goto('/book-appointment');
	}
</script>

<svelte:head>
	<title>
		Services | Obsidian Signatures Partners
	</title>

	<meta
		name="description"
		content="Explore our professional notary services including loan signings, acknowledgments, jurats, affidavits, powers of attorney, mobile notary services, and more."
	/>

	<meta
		property="og:title"
		content="Services | Obsidian Signatures Partners"
	/>

	<meta
		property="og:description"
		content="Professional mobile notary services for individuals, families, businesses, and real estate professionals."
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

			<h1 class="max-w-4xl font-serif text-5xl leading-tight text-[#d7b879] md:text-7xl">
				Notary Services
				<br />
				Handled With Precision.
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
					<button
						type="button"
						class="w-full text-left"
						onclick={() => toggleService(service.title)}
						aria-expanded={expandedService === service.title}
					>
						<div
							class="mb-6 h-0.5 w-12 bg-[#d7b879] transition group-hover:w-20"
						></div>

						<div class="flex items-start justify-between gap-4">
							<h2 class="mb-4 font-serif text-2xl text-[#f8f1df]">
								{service.title}
							</h2>

							<span
								class={`mt-1 text-2xl leading-none text-[#d7b879] transition duration-300 ${
									expandedService === service.title ? 'rotate-45' : ''
								}`}
							>
								+
							</span>
						</div>

						<p class="leading-relaxed text-[#f5e7c1bb]">
							{service.description}
						</p>

						<p
							class="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#c8a96bcc]"
						>
							{expandedService === service.title ? 'Show Less' : 'Learn More'}
						</p>
					</button>

					{#if expandedService === service.title}
						<div class="mt-6 border-t border-[#c8a96b22] pt-6">
							<p class="leading-relaxed text-[#f5e7c1cc]">
								{service.fullDescription}
							</p>
						</div>
					{/if}
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

					<h2 class="font-serif text-4xl text-[#d7b879] md:text-5xl">
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
						onclick={goToBook}
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