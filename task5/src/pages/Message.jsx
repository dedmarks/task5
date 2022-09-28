import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Single from '../Single'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Message = () => {

  const id = Math.floor(100000 + Math.random() * 900000)

  const [msgList, setMsgList] = useState([])
  const [userList, setUserList] = useState([])
  const [name, setName] =useState('')
  const [title, setTitle] =useState('')
  const [messagebody, setMessageBody] =useState('')


  console.log({id: id, recipant: name, title: title, messagebody: messagebody, username: ""})
  

  const handleSubmit = async e => {
    e.preventDefault()
    try{
    await axios.post("http://localhost:3001/message", {id: id, recipant: name, title: title, messagebody: messagebody, username: ""})
    window.location.reload()
    }catch(err){
        console.log(err)
    }
}

const list = msgList.filter(msg => msg.recipant === name)

useEffect(() => {
  const getUsers = async () => {
    try{
     const res = await axios.get("http://localhost:3001/getmsg")
     setMsgList(res.data)
    }catch(err){
        console.log(err) 
    }
  };
 getUsers()
}, [])

useEffect(() => {
  const getUsers = async () => {
    try{
     const res = await axios.get("http://localhost:3001/getusers")
     setUserList(res.data)
    }catch(err){
        console.log(err) 
    }
  };
 getUsers()
}, [])

const options = userList.map(l => l.name)

  return (
    <div className="name">
      <div className="box">
      <Autocomplete
        options={options}
        name='recipant'
        onChange={(event, value) => setName(value) }
        renderInput={(params) => <TextField {...params} label="Recipant"
        />}
      />
        <input type="text" placeholder="title" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
        <textarea type="text" placeholder="text" value={messagebody} onChange={e => setMessageBody(e.target.value)}/>
        <button className="button" onClick={handleSubmit}>Send</button>
        <div className="messagewrapper">
          {list.map(msg => <Single msg={msg}/>)}
        </div>  
      </div>
    </div>
  )
}

export default Message