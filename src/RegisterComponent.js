import { useState } from "react";

export function RegisterComponent() {

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const handleform=(e)=>
    
        {
        alert(name+" - "+ email)
    }

    return (
        <div>
         <form onSubmit={handleform}> 
           
            <input type="text"
            placeholder="Enter the name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <br/>
            <br/>
            <input type="text"
            placeholder="Enter the email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <br/>
            <br/>
            <button type="submit">Submit</button>

            </form>
            <br/>
            {name} {email}
        </div>
    );
}