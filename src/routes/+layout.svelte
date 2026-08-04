<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/svelte';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}