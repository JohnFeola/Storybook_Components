import React from 'react'
import './ACard2.css'
import logo from './logo.svg'
const ACard2 = (props) => {
    const handleButtonClick = () =>{
        //currently does nothing
    }
  return (
    <div className='ACard'>
        <div className='name'>
            <h1> First Name: {props.firstName}</h1>
            <h1> Last Name: {props.lastName}</h1>
        </div>
        <img src={logo} alt='react.js logo' className='logo'/>
        <button onClick={handleButtonClick}>{props.buttonText}</button>
    </div>
  )
}

export default ACard2;