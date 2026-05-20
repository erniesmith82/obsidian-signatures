<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		service: '',
		message: ''
	});

	const services = [
		'General Notarization',
		'Loan Signing',
		'Power of Attorney',
		'Affidavit',
		'Jurats',
		'Wills & Trusts',
		'I-9 Verification',
		'Mobile Notary'
	];

	function submitForm() {
		alert('Contact form submitted.');
	}
</script>

<svelte:head>
	<title>Contact | Obsidian Signatures Partners</title>

	<meta
		name="description"
		content="Contact Obsidian Signatures Partners to schedule a mobile notary appointment or request additional information."
	/>
</svelte:head>

<Navbar />

<main
	class="min-h-screen overflow-hidden bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center text-[#f5e7c1]"
>
	<!-- HERO -->
	<section class="relative overflow-hidden px-6 pb-16 pt-40">
		<div class="absolute inset-0 bg-black/45"></div>

		<div
			class="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:items-stretch"
		>
			<!-- LEFT -->
			<div class="flex flex-col justify-center">
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Obsidian Signatures Partners
				</p>

				<h1 class="max-w-4xl font-serif text-5xl leading-tight text-[#f8f1df] md:text-7xl">
					Let’s Get
					<br />

					<span class="text-[#d7b879]">
						Your Documents Signed.
					</span>
				</h1>

				<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

				<p class="mt-8 max-w-2xl text-base leading-relaxed text-[#f5e7c1cc]">
					Schedule an appointment, ask a question, or request mobile notary
					services. We’ll respond promptly and professionally.
				</p>
			</div>

			<!-- RIGHT -->
			<aside
				class="flex h-full flex-col justify-center rounded-4xl border border-[#c8a96b22] bg-black/35 p-7"
			>
				<p class="mb-6 text-xs uppercase tracking-[0.4em] text-[#c8a96bcc]">
					Contact Info
				</p>

				<div class="space-y-5">
					<div>
						<p class="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#c8a96bcc]">
							Email
						</p>

						<p class="text-sm text-[#f8f1df]">
							info@obsidiansignatures.com
						</p>
					</div>

					<div>
						<p class="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#c8a96bcc]">
							Phone
						</p>

						<p class="text-sm text-[#f8f1df]">
							(305) 000-0000
						</p>
					</div>

					<div>
						<p class="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#c8a96bcc]">
							Service Area
						</p>

						<p class="text-sm text-[#f8f1df]">
							Florida Mobile Notary Services
						</p>
					</div>

					<div>
						<p class="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#c8a96bcc]">
							Hours
						</p>

						<p class="text-sm text-[#f8f1df]">
							By Appointment Only
						</p>
					</div>
				</div>
			</aside>
		</div>
	</section>

	<!-- DIVIDER -->
	<div class="relative px-6 py-10">
		<div class="mx-auto flex max-w-5xl items-center justify-center">
			<div
				class="h-px w-40 bg-gradient-to-r from-transparent via-[#7f6330] to-[#d7b879]"
			></div>

			<div class="relative mx-8 flex items-center justify-center">
				<div
					class="absolute h-10 w-40 rounded-[100%] border-t border-[#d7b879]/70"
				></div>
			</div>

			<div
				class="h-px w-40 bg-gradient-to-l from-transparent via-[#7f6330] to-[#d7b879]"
			></div>
		</div>
	</div>

	<!-- DESKTOP FORM -->
	<section class="relative hidden px-6 py-16 md:block">
		<div class="mx-auto max-w-7xl">
			<div class="relative flex justify-center">
				<!-- IMAGE -->
				<div class="relative w-full max-w-7xl">
					<img
						src="/images/contact-form.png"
						alt="Obsidian paper contact form"
						class="scale-[1.35] object-contain"
					/>
				</div>

				<!-- FORM -->
				<div class="absolute inset-0 flex items-center justify-center px-8">
					<form
						class="w-full max-w-3xl bg-transparent p-8 text-black md:p-12"
						onsubmit={(e) => {
							e.preventDefault();
							submitForm();
						}}
					>
						<p class="mb-3 text-xs uppercase tracking-[0.4em] text-[#8a6a2f]">
							Request Appointment
						</p>

						<h2 class="mb-8 font-serif text-4xl text-[#111111]">
							Send a Message
						</h2>

						<div class="grid gap-6 md:grid-cols-2">
							<label>
								<span class="mb-2 block text-sm font-semibold text-[#2b2112]">
									Full Name
								</span>

								<input
									bind:value={form.name}
									type="text"
									class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/45 focus:border-[#8a6a2f] focus:ring-0"
									placeholder="Your full name"
								/>
							</label>

							<label>
								<span class="mb-2 block text-sm font-semibold text-[#2b2112]">
									Email Address
								</span>

								<input
									bind:value={form.email}
									type="email"
									class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/45 focus:border-[#8a6a2f] focus:ring-0"
									placeholder="you@example.com"
								/>
							</label>

							<label>
								<span class="mb-2 block text-sm font-semibold text-[#2b2112]">
									Phone Number
								</span>

								<input
									bind:value={form.phone}
									type="tel"
									class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/45 focus:border-[#8a6a2f] focus:ring-0"
									placeholder="(305) 000-0000"
								/>
							</label>

							<label>
								<span class="mb-2 block text-sm font-semibold text-[#2b2112]">
									Service Needed
								</span>

								<select
									bind:value={form.service}
									class="w-full border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black focus:border-[#8a6a2f] focus:ring-0"
								>
									<option value="">Select a service</option>

									{#each services as service (service)}
										<option value={service}>{service}</option>
									{/each}
								</select>
							</label>

							<label class="md:col-span-2">
								<span class="mb-2 block text-sm font-semibold text-[#2b2112]">
									Message
								</span>

								<textarea
									bind:value={form.message}
									rows="5"
									class="w-full resize-none border-0 border-b border-black/20 bg-transparent px-0 py-3 text-black placeholder:text-black/45 focus:border-[#8a6a2f] focus:ring-0"
									placeholder="Tell us about your notarization needs..."
								></textarea>
							</label>
						</div>

						<button
							type="submit"
							class="mt-8 w-full bg-[#111111] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#f8f1df] transition hover:bg-[#8a6a2f]"
						>
							Send Request
						</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<!-- MOBILE FORM -->
	<section class="relative px-6 py-16 md:hidden">
		<form
			class="rounded-4xl border border-[#c8a96b33] bg-black/60 p-6 text-[#f5e7c1]"
			onsubmit={(e) => {
				e.preventDefault();
				submitForm();
			}}
		>
			<p class="mb-3 text-xs uppercase tracking-[0.35em] text-[#c8a96bcc]">
				Request Appointment
			</p>

			<h2 class="mb-8 font-serif text-4xl text-[#f8f1df]">
				Send a Message
			</h2>

			<div class="space-y-6">
				<input
					bind:value={form.name}
					type="text"
					class="w-full border-0 border-b border-[#c8a96b44] bg-transparent px-0 py-3 text-[#f8f1df] placeholder:text-[#f5e7c188] focus:border-[#d7b879] focus:ring-0"
					placeholder="Full name"
				/>

				<input
					bind:value={form.email}
					type="email"
					class="w-full border-0 border-b border-[#c8a96b44] bg-transparent px-0 py-3 text-[#f8f1df] placeholder:text-[#f5e7c188] focus:border-[#d7b879] focus:ring-0"
					placeholder="Email address"
				/>

				<input
					bind:value={form.phone}
					type="tel"
					class="w-full border-0 border-b border-[#c8a96b44] bg-transparent px-0 py-3 text-[#f8f1df] placeholder:text-[#f5e7c188] focus:border-[#d7b879] focus:ring-0"
					placeholder="Phone number"
				/>

				<select
					bind:value={form.service}
					class="w-full border-0 border-b border-[#c8a96b44] bg-transparent px-0 py-3 text-[#f8f1df] focus:border-[#d7b879] focus:ring-0"
				>
					<option value="">Select a service</option>

					{#each services as service (service)}
						<option value={service}>{service}</option>
					{/each}
				</select>

				<textarea
					bind:value={form.message}
					rows="5"
					class="w-full resize-none border-0 border-b border-[#c8a96b44] bg-transparent px-0 py-3 text-[#f8f1df] placeholder:text-[#f5e7c188] focus:border-[#d7b879] focus:ring-0"
					placeholder="Tell us about your notarization needs..."
				></textarea>

				<button
					type="submit"
					class="w-full bg-[#d7b879] px-6 py-4 text-sm font-bold uppercase tracking-widest text-black"
				>
					Send Request
				</button>
			</div>
		</form>
	</section>
</main>

<Footer />