<script>
    // src/lib/components/Hello.svelte
    let { text, number = 100 } = $props()

    function increment() {
        number += 1
    }
</script>

<div>
    <p>Hello {text}</p>
    <p>Number: { number }</p>
    <button class="border border-green-700" 
            onclick={increment}>
        +
    </button>
</div>