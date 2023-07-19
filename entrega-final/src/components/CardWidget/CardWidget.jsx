import { useContext } from 'react';
import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import { CartContext } from '../../context/CartContext/CartContext';

const CardWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce( (val, item) =>{
    return val + item.quantity;
  }, 0);


  return (
    <div style={{display: "flex", width: "40px", alignItems: "center"}}>
        <LocalGroceryStoreIcon sx={{color: "white"}}/>
        <p style={{color: "white"}}>{quantity}</p>
    </div>
  )
}

export default CardWidget