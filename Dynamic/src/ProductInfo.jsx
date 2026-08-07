import React from 'react'

const ProductInfo = () => {
    const Product = {
        name : "Laptop",
        price : "$1200",
        availability : "In stock"
    }

  return (
    <div>
      <h2>Product name : {Product.name}</h2>
      <h2>Price : {Product.price}</h2>
      <h2>availability : {Product.availability}</h2>
    </div>
  )
}

export default ProductInfo
