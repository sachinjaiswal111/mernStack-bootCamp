import React from 'react'
import {  useAppContext } from './context/appContext'

function Button({product}) {
    const{cart,setCart}= useAppContext();
    
  const handleClick = ()=>{
    setCart([...cart,product]);
  }
  return (
    <div className='button'>
      {/* <button className='inc btn'>+</button> */}
      <button className='add btn' onClick={handleClick}>add</button>
      {/* <button className='dec btn'>-</button> */}
    </div>
  )
}

export default Button
