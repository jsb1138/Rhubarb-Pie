import React from 'react'


export default function Header({currentUser}) {
  // let theUser = (currentUser.username.charAt(0).toUpperCase() + currentUser.username.slice(1,-1))
  
  return (
    <header>
      <div id="greeting">
        <p>Welcome,</p>
        <span>Joel</span>
        </div>
      <div id="user-icn">
        
        </div>
      </header>
  )
}
