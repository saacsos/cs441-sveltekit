<script>
    let { form } = $props()
</script>

<h1 class="text-3xl">
    Create New Artist 
</h1>

<form method="POST" action='?/create'>
    <div>
        <label for="name">Artist Name</label>
        {#if ! form?.success}
            <p class="text-red-500">{form?.message}</p>
        {/if}
        <input type="text" 
                class="border rounded-lg p-1"
                name="name">
    </div>

    <button name="_action" value="create" class="p-1 bg-green-200">
        Create
    </button>
</form>