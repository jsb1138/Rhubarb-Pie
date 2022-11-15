import React from 'react'


export default function Header({userName}) {
  
  return (
    <header>
      <div id="greeting">
        <p>Welcome,</p>
        <span>{userName}</span>
        {/* <span>Joel</span> */}
        </div>
      <div id="user-icn">
        </div>
      </header>
  )
}
