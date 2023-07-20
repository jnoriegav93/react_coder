import "./CartPage.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Add, DeleteForever, Remove } from "@mui/icons-material";

const CartPage = () => {
  const [cart, setCart] = useContext(CartContext);
  const quantity = cart.reduce( (val, item) => val + item.quantity , 0);
  const totalPrice = cart.reduce( (val, item) => val + (item.quantity * item.price), 0).toFixed(2);
  let location = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
   
  //Generador de fechas posteriores
  const pastDays = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    pastDays.push(dd + '/' + (mm <= 9 ? '0':'') +  mm + '/' + yyyy);
    // pastDays.push(date);
  }

  const addToCart = (id) =>{
      setCart((currItems) => {
          const existItem = currItems.find( (item) => item.id === id );
          if(existItem){
              return currItems.map( (item)=>{
                  if(item.id === id){
                      return { ...item, quantity: item.quantity + 1};
                  }else{
                      return item;
                  }
              });
          }else{
              const cartItem = currItems.find( (item) => item.id === id );
              return [ ...currItems, { id, name: cartItem?.productDisplayName || 'x', quantity: 1, price: cartItem?.price, origin: 'cart' }];
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

  return (
    <div className="CartPage">
      <div className="Shop">
        <h4 >Mi Carrito ({quantity})</h4>
        <h3>Resumen de pedido</h3>
        <div className="divCartTable">
          <table className="cartTable">
            <thead>
              <tr>
                <th>Producto</th>
                <th style={{width: "120px"}}>Precio x und</th>
                <th style={{width: "100px"}}>Cantidad</th>
                <th style={{width: "120px"}}>Subtotal</th>
              </tr>
            </thead>
            <tbody>
          {
            cart.map((item, i) => {
              //console.log(item)
              return (
                <tr key={i}>
                  <td><Link to={`${location}/detail/${item.id}`}>{item.name}</Link></td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                      <tr>
                        <td><Button variant="outlined" size="small" color="warning" 
                          className="btnCardRemove" onClick={()=> removeFromCart(item.id)}> {item.quantity > 1 ? <Remove /> : <DeleteForever/> }  </Button></td>
                        <td><span style={{margin: "0px 10px"}}>{item.quantity}</span></td>
                        <td><Button variant="outlined" size="small" color="warning" 
                          className="btnCardAdd" onClick={()=> addToCart(item.id)}><Add /></Button></td>
                      </tr>
                    </td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              )
            })
          }
          </tbody>
          </table>
        </div>
        
      </div>
      <div className="cartResume" style={{textAlign: "center_"}}>
        <h3>Resumen de compra</h3>
        <table>
          <tr>
            <td>Productos:</td>
            <td>{quantity}</td>
          </tr>
          <tr>
            <td>Subtotal:</td>
            <td>{totalPrice}</td>
          </tr>
        </table>
        
        <Link to={`${location}/shop`}>
          <Button variant="contained" color="success" className="btnGoToShop" endIcon={<ShoppingCartIcon />}>
            Ir a comprar
          </Button>
        </Link>
      </div>
    </div>
    
    
  )
}

export default CartPage