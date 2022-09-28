import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Name = () => {

  const [name, setName] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try{
    await axios.post("http://localhost:3001/name", {name: name})
    navigate("/message")
    }catch(err){
        console.log(err)
    }
}
  
  return (
    <div className="name">
      <div className="box">
        <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)}/>
        <button className="button" onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}

export default Name