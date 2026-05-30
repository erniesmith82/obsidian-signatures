<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Request Received | Obsidian Signatures Partners</title>
	<meta
		name="description"
		content="Your appointment request has been received by Obsidian Signatures Partners."
	/>
</svelte:head>

<Navbar />

<main class="min-h-screen bg-black text-[#f5e7c1]">
	<section class="relative flex min-h-screen items-center px-6 pt-24">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-75"
		></div>

		<div class="absolute inset-0 bg-black/65"></div>

		<div class="relative z-10 mx-auto max-w-4xl text-center">
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Appointment Request Received
			</p>

			<h1 class="font-serif text-5xl leading-tight text-[#f8f1df] md:text-7xl">
				Thank You.
				<br />
				<span class="text-[#d7b879]">We’ll Be In Touch Soon.</span>
			</h1>

			<div class="mx-auto mt-8 h-0.5 w-16 bg-[#d7b879]"></div>

			<p class="mx-auto mt-8 max-w-2xl leading-relaxed text-[#f5e7c1cc]">
				Your appointment request has been received. Obsidian Signatures Partners
				will review your requested date, time, service type, and location before
				confirming availability.
			</p>

			<p class="mx-auto mt-4 max-w-2xl text-sm italic text-[#f5e7c188]">
				Requested appointments are reviewed and confirmed based on availability.
			</p>

			<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="/"
					class="bg-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-[#f1d79a]"
				>
					Return Home
				</a>

				<a
					href="/services"
					class="border border-[#d7b879] px-8 py-4 text-sm font-bold uppercase tracking-widest text-[#d7b879] transition hover:bg-[#d7b879] hover:text-black"
				>
					View Services
				</a>
			</div>
		</div>
	</section>
</main>

<Footer />