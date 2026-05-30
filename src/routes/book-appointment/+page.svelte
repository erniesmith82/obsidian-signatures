<script>
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		service: '',
		appointmentDate: '',
		appointmentTime: '',
		location: '',
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

	const appointmentTimes = [
		'8:00 AM',
		'9:00 AM',
		'10:00 AM',
		'11:00 AM',
		'12:00 PM',
		'1:00 PM',
		'2:00 PM',
		'3:00 PM',
		'4:00 PM',
		'5:00 PM',
		'6:00 PM',
		'7:00 PM'
	];

	function openDatePicker() {
		const input = document.getElementById('appointmentDate');

		if (input instanceof HTMLInputElement && typeof input.showPicker === 'function') {
			input.showPicker();
		}
	}

// eslint-disable-next-line svelte/no-navigation-without-resolve
async function submitForm() {
	await goto('/confirmation');
}
</script>

<svelte:head>
	<title>Contact | Obsidian Signatures Partners</title>

	<meta
		name="description"
		content="Contact Obsidian Signatures Partners to request a mobile notary appointment."
	/>
</svelte:head>

<Navbar />

<main class="min-h-screen overflow-hidden bg-black text-[#f5e7c1]">
	<section class="relative overflow-hidden px-6 pb-20 pt-40">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-80"
		></div>

		<div class="absolute inset-0 bg-black/55"></div>

		<div
			class="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_360px] lg:items-stretch"
		>
			<div class="flex flex-col justify-center">
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Obsidian Signatures Partners
				</p>

				<h1 class="max-w-4xl font-serif text-5xl leading-tight text-[#f8f1df] md:text-7xl">
	Request an
	<br />

	<span class="text-[#d7b879]">
		Appointment.
	</span>
</h1>

				<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

				<p class="mt-8 max-w-2xl text-base leading-relaxed text-[#f5e7c1cc]">
					Submit an appointment request, tell us what you need notarized, and
					we’ll review availability before confirming.
				</p>
			</div>

			<aside
				class="flex h-full flex-col justify-center rounded-4xl border border-[#c8a96b22] bg-black/50 p-7"
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

	<section class="bg-[#101010] px-6 py-24">
		<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
			<div>
				<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
					Request Appointment
				</p>

				<h2 class="font-serif text-4xl leading-tight text-[#f8f1df] md:text-6xl">
					Send us the details.
				</h2>

				<div class="mt-7 h-0.5 w-16 bg-[#d7b879]"></div>

				<p class="mt-8 max-w-md leading-relaxed text-[#f5e7c1bb]">
					Tell us what type of document you need notarized, your preferred
					appointment date and time, and whether you need mobile or remote service.
				</p>
			</div>

			<form
				class="rounded-4xl border border-[#c8a96b33] bg-black/60 p-7 md:p-10"
				onsubmit={(e) => {
					e.preventDefault();
					submitForm();
				}}
			>
				<div class="grid gap-6 md:grid-cols-2">
					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Full Name
						</span>

						<input
							bind:value={form.name}
							type="text"
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#f5e7c177] focus:border-[#d7b879]"
							placeholder="Your full name"
						/>
					</label>

					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Email Address
						</span>

						<input
							bind:value={form.email}
							type="email"
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#f5e7c177] focus:border-[#d7b879]"
							placeholder="you@example.com"
						/>
					</label>

					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Phone Number
						</span>

						<input
							bind:value={form.phone}
							type="tel"
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#f5e7c177] focus:border-[#d7b879]"
							placeholder="(305) 000-0000"
						/>
					</label>

					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Service Needed
						</span>

						<select
							bind:value={form.service}
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none focus:border-[#d7b879]"
						>
							<option value="">Select a service</option>

							{#each services as service (service)}
								<option value={service}>
									{service}
								</option>
							{/each}
						</select>
					</label>

					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Preferred Date
						</span>

						<div class="relative">
							<input
								id="appointmentDate"
								bind:value={form.appointmentDate}
								type="date"
								required
								class="w-full cursor-pointer rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 pr-14 text-[#f8f1df] outline-none scheme-dark focus:border-[#d7b879]"
							/>

							<button
								type="button"
								class="absolute right-4 top-1/2 -translate-y-1/2 text-[#d7b879]"
								aria-label="Open date picker"
								onclick={openDatePicker}
							>
								📅
							</button>
						</div>
					</label>

					<label>
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Preferred Time
						</span>

						<select
							bind:value={form.appointmentTime}
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none focus:border-[#d7b879]"
						>
							<option value="">Select a preferred time</option>

							{#each appointmentTimes as time (time)}
								<option value={time}>
									{time}
								</option>
							{/each}
						</select>
					</label>

					<label class="md:col-span-2">
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Appointment Location
						</span>

						<input
							bind:value={form.location}
							type="text"
							required
							class="w-full rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#f5e7c177] focus:border-[#d7b879]"
							placeholder="City, address, hospital, office, or preferred meeting location"
						/>
					</label>

					<label class="md:col-span-2">
						<span class="mb-2 block text-sm text-[#f5e7c1cc]">
							Message
						</span>

						<textarea
							bind:value={form.message}
							rows="6"
							class="w-full resize-none rounded-2xl border border-[#c8a96b22] bg-black/50 px-5 py-4 text-[#f8f1df] outline-none placeholder:text-[#f5e7c177] focus:border-[#d7b879]"
							placeholder="Tell us about your notarization needs..."
						></textarea>
					</label>
				</div>

				<p class="mt-6 text-center text-sm italic text-[#f5e7c188]">
					Requested appointments are reviewed and confirmed based on availability.
				</p>

				<button
					type="submit"
					class="mt-6 w-full bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
				>
					Request Appointment
				</button>
			</form>
		</div>
	</section>
</main>

<Footer />