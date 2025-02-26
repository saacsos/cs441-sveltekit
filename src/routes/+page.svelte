<script>
    // src/routes/+page.svelte
    import Hello from "$lib/components/Hello.svelte";
    let imageUrl = "/images/cat.png"
</script>


<h1 class="text-3xl">Welcome to SvelteKit</h1>


<Hello text="World" number={400}></Hello>
<Hello text="Svelte"></Hello>
<img src={imageUrl} class="w-[100px]" alt="Cat Image">