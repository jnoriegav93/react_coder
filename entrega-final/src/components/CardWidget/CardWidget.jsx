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
    <div className='CardWidget'>
        <LocalGroceryStoreIcon sx={{color: "white"}}/>
        <p style={{color: "white"}}>{quantity}</p>
    </div>
  )
}

export default CardWidget