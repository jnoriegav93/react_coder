import React from 'react'
import ProductList from '../../components/ProductList/ProductList'
import CategoryList from '../../components/CategoryList/CategoryList'

const ProductsPage = () => {
  return (
    <div>
      <h1>Catálogo</h1>
      <CategoryList/>
      <ProductList/>
    </div>
  )
}

export default ProductsPage