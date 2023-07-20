import { useState } from "react"

export default function Forms() {

    // let [firstName, setFirstName] = useState("")
    // let [lastName, setLastName] = useState("")

    // console.log(firstName, lastName)

    // function displayFirstName(event){
    //     // console.log(event.target.value)
    //     // setFirstName(prevName=> prevName =event.target.value)
    //     setFirstName(event.target.value)
    // }

    // function displayLastName(event){
    //     setLastName(event.target.value)
    // }

    //Better approach to save forms data into one state as an object
    let [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "comments": "",
        isfriendly: false,
        "designation": "",
        "color": ""
    })

    function displayFormData(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitButton(event){
        event.preventDefault()
        console.log(formData)
    }




    return (
        <div className="mt-5 ml-10">
            <form onSubmit={submitButton} className="flex flex-col items-center">
                <input type="text" placeholder="Text" onChange={displayFormData} className="m-1 indent-0.5 italic" name="firstName" value={formData.firstName} />
                <input type="text" placeholder="Text" onChange={displayFormData} className="m-1 indent-0.5 italic" name="lastName" value={formData.lastName} />
                <input type="email" placeholder="email" onChange={displayFormData} className="m-1 indent-0.5 italic" name="email" value={formData.email} />
                <textarea name="comments" placeholder="comments" cols="25" rows="2" className="indent-0.5 italic" value={formData.comments} onChange={displayFormData} />

                <div className="mt-2">
                    <input type="checkbox" name="isfriendly" id="isFriendly" checked={formData.isfriendly} onChange={displayFormData} />
                    <label htmlFor="isFriendly">Are you user friendly?</label>
                </div>

                <div className="">
                    {/* the attribute name over here in radio buttons act as a group. When one radio button is clicked the other radiom buttons are unchecked. The name fields of all the radio buttons should be the same. Also in the above examples we were using the values attributes to get the real time value from the field and save it in the state. However in the radio button we can't have the dynamic value instead it is just a check boxes. SO we will use the static ones for out purpose */}

                    {/* If I haven't written any of the checked attributes. It still has worked. Just comment out all the checked and check */}
                    <label htmlFor="">What is your current designation?</label>

                    <input type="radio" name="designation" id="radioButtonID1" value={"Software Engineer"} onChange=
                        {displayFormData} checked={formData.designation === "Software Engineer"} />
                    <label htmlFor="radioButtonID1">SE</label>

                    <input type="radio" name="designation" id="radioButtonID2" value={"Computer Scientist"} onChange={displayFormData} checked={formData.designation === "Computer Scientist"} />
                    <label htmlFor="radioButtonID2">CS</label>

                    <input type="radio" name="designation" id="radioButtonID3" value={"Mechenical Engineer"} onChange={displayFormData} checked={formData.designation === "Mechenical Engineer"} />
                    <label htmlFor="radioButtonID3">ME</label>
                </div>

                <div className="mt-2">
                    <label htmlFor="dropDownID">Your Favourite Color?</label>
                    <select name="color" id="dropDownID" onChange={displayFormData} value={formData.color} >
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="indigo">Indigo</option>
                        <option value="black">Black</option>
                    </select>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

//I will be adding value={formData.firstName} in the input field in order state to control the input fields rather then the input fields contrlling the states and creating their own seperate states for each input.