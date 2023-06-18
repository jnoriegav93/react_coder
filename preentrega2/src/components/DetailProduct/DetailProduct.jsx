import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, CardMedia, ImageList, ImageListItem } from '@mui/material';

const DetailProduct = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  //console.log("Product",product);
  useEffect(()=>{
      axios(`https://dummyjson.com/products/${id}`)
      .then( (json) => setProduct(json.data));
  }, []);

  return (
      <div className='Product'>
        <Link to={`/`} >
          <Button variant="contained" size="small" style={{margin: 20}} endIcon={<ArrowBackIcon />}>
            Volver al inicio</Button>
        </Link>
      <h1>{product.title} ({product.rating}/5.00)</h1>
      <CardMedia
        component="img"
        height="600"
        image={product.thumbnail}
        alt={product.title}
      />
      {
        <ImageList sx={{minWidth:400, minHeight: 300 }} cols={3} rowHeight={300}>
        { product.images?.map((item) => (
            <ImageListItem key={item}>
              <img
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt="img"
                loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
      }
      <p>{product.description}</p>
      <p>Precio: ${product.price}.00<br/>
      Descuento: {product.discountPercentage}%<br/>
      Marca: {product.brand}<br/>
      Stock: {product.stock} und</p>
      {
        <Button variant="contained" size="small" endIcon={<LocalGroceryStoreIcon />}>
          Agregar al carrito
        </Button>
        }
      </div>
  )
}

export default DetailProduct


