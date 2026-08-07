 import React from 'react'

const Product = ({name, price}) => {
  return (
    <div>
    <h2>Product : {name}</h2>
    <h2>Price : {price}</h2>
    </div>
  )
}

export default Product
