export async function fetchData(api) {
    const res = await fetch(api)
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