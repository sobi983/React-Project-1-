import { useEffect } from "react"
import { useRef } from "react"
import { Form, redirect, useActionData, useNavigation, useSearchParams } from "react-router-dom"
import { loginUser } from "../components/fetchData"

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const pathName = new URL(request.url).searchParams
    try {
        await loginUser({ email, password })
        localStorage.setItem("loggedIn", true)
        // This redirect working in the below is in the res.body technique because of mirage.js. In the real-world redirect itself is self-sufficient to redirect to a new page
        const res =  redirect(pathName.get('redirectTo') ? pathName.get('redirectTo') : '/')
        res.body = true
        return res

    } catch (error) {
        return error.message
    }
}

export default function LoginPage() {
    // eslint-disable-next-line no-unused-vars
    let [message, setMessage] = useSearchParams()
    let error = useActionData()
    let navigation = useNavigation()


    let h = useRef(null)
    useEffect(() => h.current.focus(), [])


    return (
        // It is not a good practice to nest a div inside a form. But as we have added the tag form later and there is no styling on it so, we will continue like as it is.
        <Form method="post" replace>
            <div className="bg-orange-50 flex flex-col items-center pt-36 sm:justify-center sm:pb-96 min-h-screen">
                <h1 className="text-neutral-900 font-bold text-3xl">Sign in to your account</h1>
                <h1>{error && message ? null : message.get("message")}</h1>
                {error && <h3 className=" text-red-700 font-bold mt-2">{error}</h3>}
                <input type="text" ref={h} placeholder="example@sobi.com" className="indent-2 placeholder:italic py-2 w-5/6 sm:w-2/6 shadow-md rounded mt-10" name="email" />
                <hr />
                <input type="password" placeholder="sobi11223344556" className="indent-2 placeholder:italic py-2 mt-3 w-5/6 sm:w-2/6 shadow-md rounded" name="password" />
                <hr />
                <button className={`mt-7 bg-orange-400 rounded w-5/6 sm:w-2/6 p-2 text-white ${navigation.state === "submitting" ? "bg-orange-200" : null}`} disabled={navigation.state === "submitting" ? true : false} >{navigation.state === 'idle' ? 'Log in' : navigation.state}</button>
                <h2 className="pt-12 text-neutral-900 font-bold">Don’t have an account? <button className="text-orange-500">Create one now</button></h2>
            </div>
        </Form>
    )
}













//This is the traditional method of dealing with forms without react-router
// let [credentials, setCredentials] = useState({ email: "", password: "" }) this was used for the credential storage from tbhe forms. Now we are using the froms from the react routers, so no need of it.

// let [statuss, setStatus] = useState("idle")
// const [error, setError] = useState(null)
// let navigate = useNavigate()

//This function is not being used because we aare using the Form from the react router. Not from the traditonal react.
// function handleSubmit(e) {
//     e.preventDefault()
//     setStatus("Submitting...")
//     loginUser(credentials)
//         //the replace in navigate will update the history stack and after logged in, when we will go to the back page then it will not go to the login page again.
//         .then(data => navigate('/host', { replace: true }))
//         .catch(err => setError(err))
//         .finally(() => setStatus("idle"))
// }

//This function is not being used because we aare using the Form from the react router. Not from the traditonal react.
// function handleChange(e) {
//     const { name, value } = e.target
//     setCredentials(prev => {
//         return { ...prev, [name]: value }
//     })
// }
// <Form method="post">
//     <div className="bg-orange-50 flex flex-col items-center pt-36 sm:justify-center sm:pb-96 min-h-screen">
//         <h1 className="text-neutral-900 font-bold text-3xl">Sign in to your account</h1>
//         <h1>{error && message ? null : message.get("message")}</h1>

//         {/* error.message is coming from the fetchData function */}
//         {error && <h3 className=" text-red-700 font-bold mt-2">{error.message}</h3>}
//         <input type="text" ref={h} placeholder="example@sobi.com" className="indent-2 italic py-2 w-5/6 sm:w-2/6 shadow-md rounded mt-10" name="email"  />
//         <hr />
//         <input type="password" placeholder="sobi11223344556" className="indent-2 italic py-2 mt-3 w-5/6 sm:w-2/6 shadow-md rounded" name="password"  />
//         <hr />
//         <button className={`mt-7 bg-orange-400 rounded w-5/6 sm:w-2/6 p-2 text-white ${statuss === "Submitting..." ? "bg-orange-300" : null}`} disabled={statuss === "Submitting..." ? true : false} >{statuss === 'idle' ? 'Log in' : statuss}</button>
//         <h2 className="pt-12 text-neutral-900 font-bold">Don’t have an account? <button className="text-orange-500">Create one now</button></h2>
//     </div>
// </Form>