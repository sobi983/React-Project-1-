// import reactHalf from "../img/react-half.svg"
function Content(props){

    console.log(props)
        let dark={
        backgroundColor: "#2B283A",
    }

    let light = {
        backgroundColor: "#FFFFFF"
    }
    return(
        <div style={props.mode === true ? dark : light} className="react--half content--divMain">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
         
        </div>

        
    )
}

export default Content;