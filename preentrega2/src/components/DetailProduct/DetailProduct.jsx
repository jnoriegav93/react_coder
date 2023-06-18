import React, { useEffect, useState } from 'react';
import axios from "axios";
import CardProduct from '../CardProduct/CardProduct';

const DetailProduct = () => {
  const [product, setProduct] = useState();
  console.log("Product",product);
  useEffect(()=>{
      axios(`https://dummyjson.com/products/1`)
      .then( (json) => setProduct(json));
  }, []);
  return (
      <>
      <h1>Productos</h1>
      {product.id}
      {/* <div className="Cards-List">
          <CardProduct data={product}/>
      </div> */}
      </>
  )
}

export default DetailProduct


