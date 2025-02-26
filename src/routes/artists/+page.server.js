import { API_URL } from "$env/static/private";

export async function load() {
    const response = await fetch(`${API_URL}/api/artists`)
    let artists = []
    try {
        artists = await response.json()
    } catch (e) {
        console.error(e.message)
    }

    return {
        artists : artists
    }

}