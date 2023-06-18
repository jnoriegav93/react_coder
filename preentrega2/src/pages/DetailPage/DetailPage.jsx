import React from 'react'
import DetailProduct from '../../components/DetailProduct/DetailProduct'

const DetailPage = (id) => {
  return (
    <div>
      <DetailProduct data={id}/>
    </div>
  )
}

export default DetailPage