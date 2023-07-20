import Header from './components/header'
import Content from './components/content'
import { useState } from 'react'

const App = ()=>{

    let [mode, setMode] = useState("")

    function toggle(){
        setMode(prev=> !prev)
    }
    return (
        <div>
            <Header mode={mode} toggle={()=>toggle()} />
            <Content mode={mode}/>
        </div>
    )
}

export default App;


