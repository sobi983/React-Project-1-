import { redirect } from "react-router-dom"

export async function authentication(addr) {
    const isLoggedIn = localStorage.getItem('loggedIn')
    
    if (isLoggedIn === "false" || isLoggedIn === null) {

        //in this method I have saved the res of the redirect into the variable and other essential steps have being taken. In real-world applications these steps are never taken because we are dealing with the real world APIs. There was some issue happened due to mirage.js, so this was the solution to get the res.body = true and then return it

        // Now, we will send a custom message to display on a page.
        const res =  redirect(`/login?message=You have to login first to access&redirectTo=${addr}`)
        res.body = true 
        throw res
    }
    return null
  }