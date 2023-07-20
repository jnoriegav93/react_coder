import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Add, Block, Remove, SearchRounded } from '@mui/icons-material';
import { Link } from "react-router-dom";
import {CartContext} from "../../context/CartContext/CartContext";
import { useContext } from 'react';
import "./ProductCard.css";

const ProductCard = ({ data } ) => {
  let location = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  let price = data.price;
  const [cart, setCart] = useContext(CartContext);
  
  const addToCart = () =>{
      setCart((currItems) => {
        // console.log('card',currItems)
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
              return [ ...currItems, { id: data.id, name:data.productDisplayName, quantity: 1, price: data.price, origin:'catalog' }];
          }
      })
  }
  const removeFromCart = (id) =>{
    setCart((currItems) => {
        if(currItems.find( (item) => item.id === id )?.quantity === 1){
            return currItems.filter((item) => item.id!== id);
        }else{
            return currItems.map( (item) =>{
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1};
                }else{
                    return item;
                }
            })
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
        sx={{ minHeight: 325 }} 
      />
      <CardContent  sx={{ minHeight: 180 }} >
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
        
      </CardContent>
      <CardActions>
        <Link to={`${location}/detail/${data.id}`}>
          <Button size="small" variant="outlined" endIcon={<SearchRounded />} 
          sx={{marginRight: "15px", borderRadius: "20px"}}>Detalle</Button>
        </Link>
        {quantityPerItem > 0 ?
        <Button variant="outlined" size="small" color="error" 
              className="btnCardRemove" onClick={()=> removeFromCart(data.id)}> 
               <Remove />
        </Button>
         :  
         <Button variant="outlined" size="small" color="inherit" 
          className="btnCardRemove" onClick={()=> removeFromCart(data.id)}> 
            <Block/>
         </Button> }
        <span style={{margin: "0px 5px"}}>{quantityPerItem}</span>
        <Button variant="outlined" size="small" color="success" 
              className="btnCardAdd" onClick={()=> addToCart(data.id)}><Add/>
        </Button>

        {/* <Button variant="contained" size="small" color="primary" endIcon={<AddShoppingCartRounded />} 
          onClick={()=> addToCart()}>Agregar
        </Button> */}
      </CardActions>
    </Card>
  )
}

export default ProductCard