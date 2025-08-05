import React from 'react'
import { dummyProducts } from './assets/assets'
import Button from './button';
function Product({product}) {
  // const product=dummyProducts[1];
  return (
    <div className='product'>
      <img src={product.image} alt="" className='pro-img' />
      <div className='main-info'>
        <div className="info">
          <p>{product.name}</p>
          <p>price: {product.price}</p>
        </div>
        <Button product={product}/>
      </div>
    </div>
  )
}

export default Product
