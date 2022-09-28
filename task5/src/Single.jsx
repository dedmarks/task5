import React from 'react'

const Single = ({msg}) => {
  return (
        <div className="msgcontainer">
            <div className="msgcontent">title: {msg.title}</div>
            <div className="msgcontent">message: {msg.messagebody}</div>
        </div>
  )
}

export default Single