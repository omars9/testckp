import React from 'react'
import img from '../Component/logo.svg'
import propTypes from 'prop-types';



const Profile = ({info,name}) => {
  console.log(name); 
  return (
    <div>
        <img src={img} />
        <h1>{info.FullName}</h1>
        <button onClick ={()=>name(info.FullName)} >show name</button>
    </div>
  )
}

Profile.defaultProps = {
name : () => alert('props not passed correctly')
}
Profile.propTypes ={
       FullName:propTypes.string
}
export default Profile