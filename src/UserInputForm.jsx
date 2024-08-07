//user input form

import React, { useState } from 'react'

function UserInputForm() {
    const [input,setInput]=useState('')
    const userinput=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='UserInput'>
        <input type="text" onChange={userinput}/>
        <p>Input is : {input}</p>
    </div>
  )
}

export default UserInputForm