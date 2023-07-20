import { useState } from "react";

export default function FormsQuiz() {

    let[formData, setFormData] = useState({
        "email": "", 
        "password": "",
        "confirmPassword": "",
        "newsLeter": false,
    })

    function submitButton(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassword){
            console.log("You have Successsfully Signed up ")
        }
        else{
            console.log("Password do not match!")
            return
        }
        if(formData.newsLeter === true){console.log("Thanks for signing up for news letter")}
    }

    function savedata(event){
        const {name, type, checked, value} = event.target
        setFormData(prevData=>{
            return {...prevData, [name]: type === 'checkbox' ? checked : value}
        })
        
    }

    return (
        <div className="mt-4">
            <form onSubmit={submitButton}>
                <label htmlFor="emailID">Email: </label>
                <input type="text" name="email" placeholder="email" className="indent-0.5" id="emailID" value={formData.email} onChange={savedata}/>
                <br />

                <label htmlFor="passswordID">Password: </label>
                <input type="password" name="password" id="passswordID" className="indent-0.5" value={formData.password} onChange={savedata}/>
                <br />

                <label htmlFor="passswordID2">Confirm Password: </label>
                <input type="password" name="confirmPassword" id="passswordID2" className="indent-0.5" value={formData.confirmPassword} onChange={savedata}/>
                <br />

                <label htmlFor="newsLetterID">I want to join the News Letter</label>
                <input type="checkbox" name="newsLeter" id="newsLetterID" checked={formData.newsLeter} onChange={savedata}/>
                <br />

                <button className=" bg-slate-500 ml-20 mt-7">Submit</button>

            </form>
        </div>
    )
}