import { API_URL } from '$env/static/private'

export async function load({params}) {
    const response = await fetch(`${API_URL}/api/artists/${params.id}`)

    const artist = await response.json()

    console.log(artist)

    return {
        id: params.id,
        artist: artist
    }
}