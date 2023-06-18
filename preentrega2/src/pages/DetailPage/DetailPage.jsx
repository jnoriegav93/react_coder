import React from 'react'
import DetailProduct from '../../components/DetailProduct/DetailProduct'

const DetailPage = (id) => {
  return (
    <div>
      <h2>Detalle</h2>
      <DetailProduct data={id}/>
    </div>
  )
}

export default DetailPage