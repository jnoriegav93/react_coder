import "./ShopPage.css";
import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CartContext } from "../../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { ArrowBack, Check } from "@mui/icons-material";


const initialState = {
    name: "",
    lastName: "",
    email: "",
    cellphone: "",
    deliveryDate: ""
  };
  
  const ShopPage = () => {
    const [cart, setCart] = useContext(CartContext);
    const quantity = cart.reduce( (val, item) => val + item.quantity , 0);
    const totalPrice = cart.reduce( (val, item) => val + (item.quantity * item.price), 0).toFixed(2);
    
    const [deliveryDate, setdeliveryDate] = useState('');
    const handleChangedeliveryDate = (event) => {
      setdeliveryDate(event.target.value);
    };
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
  
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState(null);
  
    const handleOnChange = (e) => {
      const { value, name } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      values.fecha_compra = new Date(Date.now()).toISOString();
      values.deliveryDate = deliveryDate;
      values.JSONcart = cart;
      values.purchaseAmount = totalPrice;
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        values,
      });
      setPurchaseID(docRef.id);
      setValues(initialState);
    };
  
    return (
      <div className="CartPage">
        <div className="Shop">
          <h3>Resumen de pedido</h3>
          <div className="divShopTable">
            <table className="shopTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Descripción</th>
                  <th>Precio x und</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
            {
              cart.map((item, i) => {
                //console.log(item)
                return (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>{(item.quantity * item.price).toFixed(2)}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td colSpan={3}>TOTAL</td>
              <td>{quantity}</td>
              <td>{totalPrice}</td>
            </tr>
            </tbody>
            </table>
            
          
        <Link to={`${location}/cart`}>
          <Button variant="contained" color="primary" className="btnBackToCart" startIcon={<ArrowBack />}>
            Volver al carrito
          </Button>
        </Link>
          </div>
          
        </div>
        <div className="Payment">
        <h3>Información del pago</h3>
          <form className="FormShop" onSubmit={onSubmit}>
            <TextField
              placeholder="Nombres" variant="outlined" 
              style={{ margin: 10, width: 400 }}
              name="name"
              value={values.name}
              onChange={handleOnChange} required
            />
            <TextField
              placeholder="Apellidos" variant="outlined" 
              style={{ margin: 10, width: 400 }}
              name="lastName"
              value={values.lastName}
              onChange={handleOnChange} required
            />
            <TextField
              placeholder="Correo" variant="outlined" 
              style={{ margin: 10, width: 400 }}
              name="email"
              value={values.email}
              type="email"
              onChange={handleOnChange} required
            />
            <TextField
              placeholder="Celular" variant="outlined" 
              style={{ margin: 10, width: 400 }}
              name="cellphone"
              value={values.cellphone}
              onChange={handleOnChange} required
            />
            <FormControl  style={{ margin: 10, width: 400 }}>
            <InputLabel id="demo-simple-select-label">Fecha de entrega</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="deliveryDate"
              value={deliveryDate}
              onChange={handleChangedeliveryDate} required
            >
              {pastDays.map((date, index) => (
                <MenuItem key={index} value={date}>{date}</MenuItem>
              ))}
            </Select>
          </FormControl>
            <Button type="submit" variant="contained" color="success" className="btnBackToCart" startIcon={<Check />}>
              Comprar
            </Button>
          </form>
          {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
        </div>
      </div>
      
      
    )
  }
export default ShopPage