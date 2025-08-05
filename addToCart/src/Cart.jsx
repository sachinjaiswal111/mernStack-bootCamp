import React from 'react'
import { dummyAddress, dummyProducts } from './assets/assets'
import { useAppContext } from './context/appContext'

function Cart() {
    const {cart}=useAppContext();
    console.log(cart);
  return (
   <div className='cart'>
     {(cart.length>0)? cart.map((product,index)=>(
      <div key={index} className='cart-main'>
       <img src={product.image} alt="" className='cart-img' />
       <div>
        <p>{product.name}</p>
        <p>Price:{product.price}</p>
       </div>
       <p>qunatity:{1}</p>
    </div>
    )):null}
   </div>
  )
}

export default Cart
