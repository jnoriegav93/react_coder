import React from 'react'
import ProductDetail from '../../components/ProductDetail/ProductDetail'

const DetailPage = (id) => {
  return (
    <div>
      <ProductDetail data={id}/>
    </div>
  )
}

export default DetailPage