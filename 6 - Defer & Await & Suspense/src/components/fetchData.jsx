export async function fetchVans(id) {
    const apiUrl = id ? `/api/vans/${id}` : '/api/vans'
    const res = await fetch(apiUrl)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    else {
        const data = await res.json()
        return data.vans
    }
}

export async function fetchHostVans(id) {
    const apiUrl = id ? `/api/host/vans/${id}` : '/api/host/vans'
    const res = await fetch(apiUrl)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    else {
        const data = await res.json()
        return data.vans
    }
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}