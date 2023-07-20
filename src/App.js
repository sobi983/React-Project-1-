import Header from './components/header'
import Content from './components/content'
<<<<<<< HEAD
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
=======

const App = ()=>{
    return (
        <div>
            <Header />
            <Content />
>>>>>>> 489fa0f3cd543ef3ba73865a88bf01c2d3610e10
        </div>
    )
}

export default App;


