<script>
    let { data } = $props()
    let artist = data.artist.data
    
</script>

<div>
    Artist ID: { data.id }

    <div>
        <p>{artist.name}</p>
        <p>{artist.song_count} song(s)</p>
    </div>
    
</div>