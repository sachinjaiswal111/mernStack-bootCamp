import { useState } from 'react'
import Button from './button'
import { dummyOrders, dummyProducts } from './assets/assets'
import Product from './Product'
import Cart from './Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <h1 className='p-head'>Products</h1>
      <div className='product-main'>
        {dummyProducts.map((product,index)=>(
        <div key={index} >
           <Product product={product}/>
        </div>
      ))}
      </div>

      <h1 className='p-head'>Cart</h1>
      <Cart/>
    </div>
  )
}

export default App
