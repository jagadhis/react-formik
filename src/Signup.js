import React, { useState } from 'react'

function Signup() {

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  console.log(firstName);
  return (
    <form>
        <div>
           <input id="firstName" name="firstName" type="text" placeholder="Enter your name" onChange={(e) => setFirstName(e.target.value)} />
           <input id="lastName" name="lastName" type="text" placeholder="Enter your name" onChange={(e) => setLastName(e.target.value)} />
        </div>
    </form>
    
  )
}

export default Signup