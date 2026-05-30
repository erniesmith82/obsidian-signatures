<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Message Received | Obsidian Signatures Partners</title>

	<meta
		name="description"
		content="Your message has been received by Obsidian Signatures Partners."
	/>
</svelte:head>

<Navbar />

<main class="min-h-screen overflow-hidden bg-black text-[#f5e7c1]">
	<section class="relative flex min-h-[80vh] items-center justify-center px-6 py-32">
		<div
			class="absolute inset-0 bg-[url('/images/marble-gold-bg.jpg')] bg-cover bg-center opacity-75"
		></div>

		<div class="absolute inset-0 bg-black/60"></div>

		<div
			class="relative z-10 mx-auto max-w-3xl rounded-4xl border border-[#c8a96b33] bg-black/60 p-10 text-center backdrop-blur-sm md:p-16"
		>
			<p class="mb-4 text-xs uppercase tracking-[0.45em] text-[#c8a96bcc]">
				Message Received
			</p>

			<h1 class="font-serif text-5xl text-[#f8f1df] md:text-6xl">
				Thank You
			</h1>

			<div class="mx-auto mt-6 h-0.5 w-16 bg-[#d7b879]"></div>

			<p class="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-[#f5e7c1cc]">
				Your message has been successfully received. A member of our team
				will review your inquiry and respond as soon as possible.
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