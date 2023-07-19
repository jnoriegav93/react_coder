import "./CartPage.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  cellphone: "",
  deliveryDate: ""
};

const CartPage = () => {

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
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values,
    });
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div className="CartPage">
      <div className="Shop">
        <h1 style={{ color: "white" }}>Cart</h1>
        <h3>Resumen de pedido</h3>
        aqui va el context
      </div>
      <div className="Resume" style={{textAlign: "center", paddingTop: 20}}>
      <h3>Resumen de pedido</h3>
        <form className="FormContainer" onSubmit={onSubmit}>
          <TextField
            placeholder="Nombres" variant="outlined" 
            style={{ margin: 10, width: 400 }}
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Apellidos" variant="outlined" 
            style={{ margin: 10, width: 400 }}
            name="lastName"
            value={values.lastName}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Correo" variant="outlined" 
            style={{ margin: 10, width: 400 }}
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
          <TextField
            placeholder="Celular" variant="outlined" 
            style={{ margin: 10, width: 400 }}
            name="cellphone"
            value={values.cellphone}
            onChange={handleOnChange}
          />
          <FormControl  style={{ margin: 10, width: 400 }}>
          <InputLabel id="demo-simple-select-label">Fecha de entrega</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="deliveryDate"
            value={deliveryDate}
            onChange={handleChangedeliveryDate}
          >
            {pastDays.map((date, index) => (
              <MenuItem key={index} value={date}>{date}</MenuItem>
            ))}
          </Select>
        </FormControl>
          <button className="btnASendAction">Comprar</button>
        </form>
        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </div>
    
    
  )
}

export default CartPage