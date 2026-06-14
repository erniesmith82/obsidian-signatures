<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let openQuestion = $state('What is a mobile notary?');

	const faqs = [
		{
			question: 'What is a mobile notary?',
			answer:
				'A mobile notary is a notary public who travels to a client’s preferred location to notarize documents. This can include homes, offices, hospitals, care facilities, or another agreed meeting place.'
		},
		{
			question: 'Do I need an appointment?',
			answer:
				'Yes. Appointments are recommended so we can review availability, travel distance, service type, and any special requirements before confirming your requested time.'
		},
		{
			question: 'What do I need to bring to my appointment?',
	        answer:
		        'Please bring a valid, government-issued photo ID and the document that needs notarization. The document should be complete, but unsigned, unless you have been instructed otherwise. For Florida refinance transactions, all spouses must be present at the signing, even if they are not listed on the loan, title, or mortgage documents.'
        },
		{
			question: 'Can you notarize a document that has already been signed?',
			answer:
				'Generally, no. Most documents requiring notarization must be signed in front of the notary. Please do not sign your documents before your appointment unless you have been specifically instructed otherwise.'
		},
		{
			question: 'Do you provide witnesses?',
			answer:
				'Yes. We can provide a witness for an additional $30 fee. If your document requires witnesses, please let us know when scheduling your appointment so we can ensure the appropriate number of witnesses are available.'
		},
		{
			question: 'What types of documents can you notarize?',
			answer:
				'Common documents include acknowledgments, jurats, affidavits, powers of attorney, loan documents, real estate documents, authorization forms, and other documents requiring notarization.'
		},
		{
			question: 'Can a notary provide legal advice?',
			answer:
				'No. A notary public cannot provide legal advice, explain legal rights, or prepare legal documents unless legally authorized to do so. Please consult an attorney for legal guidance.'
		},
		{
			question: 'How does appointment approval work?',
			answer:
				'Submitting an appointment request does not automatically confirm the appointment. Requests are reviewed based on availability, service type, location, travel considerations, and scheduling needs. Appointment requests are typically confirmed within 12 hours. Same-day and rush appointments may be available for an additional fee and are subject to availability.'
		},
		{
			question: 'Do you offer remote online notarization?',
			answer:
				'Remote online notarization availability may depend on the type of document, signer requirements, and applicable rules. Contact us with the document type and details so we can confirm availability.'
		},
		{
			question: 'What areas do you serve?',
			answer:
				'Obsidian Signatures Partners provides mobile notary services in Florida. Service areas, travel availability, and travel fees may vary based on location.'
		},
		{
			question: 'How much does a notarization cost?',
			answer:
				'Pricing may vary depending on the type of notarization, number of signatures, travel distance, appointment time, and any additional services requested. Contact us or request an appointment for pricing details.'
		},
		{
			question: 'What happens after I submit an appointment request?',
			answer:
				'After submitting your request, we will review the details and contact you to confirm availability. Once approved, you will receive confirmation with the appointment details.'
		}
	];

	/**
	 * @param {string} question
	 */
	function toggleQuestion(question) {
		openQuestion = openQuestion === question ? '' : question;
	}
</script>

<svelte:head>
	<title>FAQ | Obsidian Signatures Partners</title>

	<meta
		name="description"
		content="Frequently asked questions about mobile notary services, appointments, identification, witnesses, pricing, and notarization requirements."
	/>
</svelte:head>

<Navbar />

<main class="min-h-screen overflow-hidden bg-black text-[#f5e7c1]">
	<section class="relative overflow-hidden px-6 pb-20 pt-40">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-75"
		></div>

		<div class="absolute inset-0 bg-black/60"></div>

		<div class="relative z-10 mx-auto max-w-7xl text-center">
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Frequently Asked Questions
			</p>

			<h1 class="mx-auto max-w-5xl font-serif text-5xl leading-tight text-[#d7b879] md:text-7xl">
				Answers Before
				<br />

				<span class="text-[#d7b879]">
					You Book.
				</span>
			</h1>

			<div class="mx-auto mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

			<p class="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-[#f5e7c1cc]">
				Find answers to common questions about mobile notary appointments,
				required identification, document preparation, witnesses, pricing,
				and scheduling.
			</p>
		</div>
	</section>

	<section class="bg-[#101010] px-6 py-24">
		<div class="mx-auto max-w-5xl">
			<div class="mb-16 text-center">
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Before Your Appointment
				</p>

				<h2 class="font-serif text-4xl leading-tight text-[#d7b879] md:text-5xl">
					What Clients Usually Ask.
				</h2>

				<div class="mx-auto mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

				<p class="mx-auto mt-8 max-w-2xl leading-relaxed text-[#f5e7c1bb]">
					These answers are provided as general information. For questions about
					a specific document or appointment, contact us directly before booking.
				</p>

				<a
					href="/book-appointment"
					class="mt-10 inline-flex bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
				>
					Request Appointment
				</a>
			</div>

			<div class="space-y-4">
				{#each faqs as faq (faq.question)}
					<article class="rounded-4xl border border-[#c8a96b22] bg-black/50">
						<button
							type="button"
							class="flex w-full items-center justify-between gap-6 px-7 py-5 text-left"
							onclick={() => toggleQuestion(faq.question)}
							aria-expanded={openQuestion === faq.question}
						>
							<span class="font-serif text-xl text-[#f8f1df] md:text-2xl">
								{faq.question}
							</span>

							<span
								class={`shrink-0 text-xl leading-none text-[#d7b879] transition duration-300 ${
									openQuestion === faq.question ? 'rotate-45' : ''
								}`}
							>
								+
							</span>
						</button>

						{#if openQuestion === faq.question}
							<div class="border-t border-[#c8a96b22] px-7 pb-6 pt-4">
								<p class="text-base leading-relaxed text-[#f5e7c1bb] md:text-lg">
									{faq.answer}
								</p>
							</div>
						{/if}
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-black px-6 pb-24">
		<div
			class="mx-auto max-w-5xl rounded-4xl border border-[#c8a96b33] bg-[#101010] p-8 text-center md:p-14"
		>
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Still Have Questions?
			</p>

			<h2 class="mb-6 font-serif text-4xl text-[#f8f1df] md:text-5xl">
				We’re here to help.
			</h2>

			<p class="mx-auto mb-10 max-w-2xl leading-relaxed text-[#f5e7c1bb]">
				If you are unsure what your document requires, send us a message before
				your appointment and we’ll help point you in the right direction.
			</p>

			<a
				href="/contact"
				class="inline-flex border border-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#d7b879] transition hover:bg-[#d7b879] hover:text-black"
			>
				Contact Us
			</a>
		</div>
	</section>
</main>

<Footer />