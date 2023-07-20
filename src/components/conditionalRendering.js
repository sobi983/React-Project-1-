import { useState } from "react"

export default function ConditionalRendering() {

    let [messages, setMessages] = useState(["a"])
    // {
  
    //       if (messages.length === 0){
    //           <h1>You're all caught up!</h1>
    //       }
    //       else if(messages.length === 1){
    //           <h1>You have {messages.length} unread message</h1>
    //       }
    //       else if(messages.length >= 2){
    //           <h1>You have {messages.length} unread messages</h1>
    //       }
          
          
    //   }

    return (
        <div className="">
            {messages.length === 0 ? <h1>You're all caught up!</h1> : <h1>You have {messages.length} unread message{messages.length >1 ? "s" : ""}</h1>}
        </div>
    )
}