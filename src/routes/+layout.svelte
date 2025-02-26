<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex">
	<div class="flex space-x-3">
		<a href="/">Home</a>
		<a href="/songs">Songs</a>
	</div>
</nav>

<section class="min-h-[50vh]">
{@render children()}
</section>

<footer>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</footer>
