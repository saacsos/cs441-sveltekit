export async function load({params}) {
    console.log(`params.id: ${params.id}`)

    const response = await fetch(`http://laravel441-laravel.test-1/api/artists/${params.id}`)

    const artists = await response.json()

    console.log(artists)

    return {
        id: params.id,
        artists: artists
    }
}