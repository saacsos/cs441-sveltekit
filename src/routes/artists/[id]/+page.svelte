<script>
    let { data } = $props()
    console.log(`data.id: ${data.id}`)
</script>

<div>
    Artist ID: { data.id }

    {data.artists}
</div>