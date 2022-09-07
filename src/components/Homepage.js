import React from 'react'

import profileImage from "../Images/S__43540484.jpg";
const Homepage = () => {
  return (
    
    <div className="container text-center">
     
    

    <img src={profileImage} className="profileImage" />
    <h3>Profile</h3>
    <h4>Name:Naoya Funahashi</h4>
    <h4>Birthday:04/12/2001</h4>    
    <h4>Live: Hyogo</h4>
    <h4>Contact:funahashi20011204@gmail.com</h4>
    <h4>hobby:reading,coding,game</h4>
    <h4>development language:c++,c#,hlsl</h4>
    <h4>development tools:visual studio,visual studio code,github,source tree,Microsoft teams</h4>
  </div>
  )
}

export default Homepage