import { useState } from "react";


const ChatApp = () => {
    const [to ,setTo]=useState('');
    const [message, setMessage]=useState('');
  return (
    <>
    <form 
    onSubmit={(e)=>{
        e.preventDefault();
        setTimeout(()=>{
            alert(`your ${message} has sent to ${to} successfully !`)
            setMessage('')
            setTo('Anup')
        },2000)
        
    }}
    >

<label htmlFor="to">To :
        <select
         value={to}
         onChange={(e)=>setTo(e.target.value)}
        >
            <option>Anup</option>
            <option>Mani</option>
            <option>Pranay</option>
            <option>Shikha</option>
        </select>
        </label>
        <br/>
        <label>Message :
        <textarea placeholder="Message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        />
        </label>
        <br/>
        <button type="submit">Send</button>
    </form>
    </>
  )
}

export default ChatApp