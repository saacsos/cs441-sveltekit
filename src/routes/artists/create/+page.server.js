import { API_URL } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

export const actions = {
    create : async ( { request }) => {
        const data = await request.formData()
        
        if (data.get("_action") === "create") {
            let name = data.get("name")
            try {
                const response = await fetch(`${API_URL}/api/artists`, {
                    method: "POST",
                    body: JSON.stringify({
                        name : name
                    }),
                    headers : {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })

                const responseData = await response.json()
                console.log("status:", response.status)
                if (response.status === 201) {
                    console.log("Create Successful")
                    // console.log(`/artists/${responseData.data.id}`)
                    return redirect(302, `/artists/${responseData.data.id}`)
                
                    return {success: true, redirectTo: `/artists/${responseData.data.id}`}
                } else {
                    console.error(responseData)
                    // fail(400, {...responseData, invalid: true})
                    return {success: false, message: responseData.message}
                }
                
            } catch (error) {
                if (error instanceof Response) throw error;
                return {
                    status: 'error',
                    error: error
                };
            }

        }
    }
}