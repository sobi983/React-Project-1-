import { memo } from "react"

const MemoChild = (prop) => {
    const {count} = prop
    console.log("hello")

    return (
        <div style={{ width: '250px', height:'250px',borderStyle: 'solid', display: "flex", justifyContent:"center", alignItems:"center", marginTop:"100px"}}>
            <h1>Count - {count}</h1>
        </div>
    )
}

export default memo(MemoChild)
