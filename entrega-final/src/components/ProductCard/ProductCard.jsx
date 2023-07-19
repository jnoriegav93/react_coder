import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import { AddShoppingCartRounded, SearchRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext/CartContext";
import { useContext } from 'react';

const ProductCard = ({ data } ) => {
  let location = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  let price = data.price;
  const [cart, setCart] = useContext(CartContext);
  
  const addToCart = () =>{
      setCart((currItems) => {
        console.log('card',currItems)
          const existItem = currItems.find( (item) => item.id === data.id );
          if(existItem){
              return currItems.map( (item)=>{
                  if(item.id === data.id){
                      return { ...item, quantity: item.quantity + 1};
                  }else{
                      return item;
                  }
              });
          }else{
              return [ ...currItems, { id: data.id, name:data.productDisplayName, quantity: 1, price: data.price }];
          }
      })
  }
  const getItemQuantity = (id) =>{
      return cart.find( (item) => item.id === id )?.quantity || 0;
  }
  const quantityPerItem = getItemQuantity(data.id);

  return (
    <Card sx={{ maxWidth: 245 }} className='productItem'>
      <CardMedia
        component="img"
        alt={data.productDisplayName}
        image={data.urlAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {data.productDisplayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.masterCategory} - {data.subCategory}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {price}
        </Typography>
        {
            quantityPerItem > 0 && (
              <Typography variant="body2" color="text.secondary">
                Seleccionados: <div className='itemQuantity'>{quantityPerItem} UND</div>
              </Typography>
            )
        }
        
      </CardContent>
      <CardActions>        
        <Link to={`${location}/detail/${data.id}`}>
          <Button size="small" variant="outlined" endIcon={<SearchRounded />} sx={{marginRight: "15px"}}>Detalle</Button>
        </Link>
        <Button variant="contained" size="small" color="primary" endIcon={<AddShoppingCartRounded />} 
          onClick={()=> addToCart()}>Agregar
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard