import React, { useState } from 'react'

function Signup() {

  const [firstName,setFirstName] = useState("")

  console.log(firstName);
  return (
    <form>
        <div>
           <input id="firstName" name="firstName" type="text" placeholder="Enter your name" onChange={(e) => setFirstName(e.target.value)} />
        </div>
    </form>
    
  )
}

export default Signup