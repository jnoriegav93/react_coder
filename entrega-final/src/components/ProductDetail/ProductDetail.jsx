import React, { useContext } from 'react'
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css'
import { Button, TextField } from '@mui/material';
import { Add, AddShoppingCartRounded, ArrowBack, Block, Remove, RemoveShoppingCartRounded, ShoppingCart } from '@mui/icons-material';
import Spinner from '../Spinner/Spinner';
import {CartContext} from "../../context/CartContext/CartContext";

const ProductDetail = () => {
    let location = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useContext(CartContext);
    let { id } = useParams();
    id = parseInt(id);
    
    useEffect(() =>{
        const getProduct = async () => {
        const q = query(collection(db, "products"), where("id", "==", id));
        const querySnapshot = await getDocs(q);
        const lista = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            lista.push({...doc.data(), idFB: doc.id});
        });
        //console.log(lista);
        setProduct(lista);
        };
        getProduct();
        setTimeout(() => {
        setIsLoading(false);
        }, 1000);
    }, []);


    const addToCart = () =>{
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
                //return currItems = {id, name: product[0].productDisplayName, quantity: 1, price: product[0].price};
                return [ ...currItems, { id, name: product[0]?.productDisplayName || 'x', quantity: 1, price: product[0]?.price, origin: 'detail' }];
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
    const quantityPerItem = getItemQuantity(id);

    return (
    <div className="ProductDetail">
    { 
        isLoading ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "30vh" }}>
                <Spinner/>
            </div>
        ) : 
        product.map((item) => {
            return (
                <div className="Detalle" key={item.id}>
                    <div className="DetalleImg">
                        <img src={item.urlAlt}/>
                    </div>
                    <div className="DetalleData">
                        <Link to={`${location}/products`}>
                            <Button size="small" variant="outlined" color="primary" startIcon={<ArrowBack />}  sx={{marginRight: "15px"}}>Volver</Button>
                        </Link>
                        <h2>{item.productDisplayName}</h2>
                        <h3>{item.price}</h3>
                        <p>Categoría: {item.articleType} ( {item.gender} )</p>
                        <p>Descripción: {item.masterCategory} - {item.subCategory}</p>
                        <p>Color: { item.baseColour}</p>

                        <div>
                        {quantityPerItem > 0 ?
                        <Button variant="outlined" size="small" color="error" 
                            className="btnDetailRemove" onClick={()=> removeFromCart(item.id)}> 
                            <Remove />
                        </Button>
                        :  
                        <Button variant="outlined" size="small" color="inherit" 
                        className="btnDetailRemove" onClick={()=> removeFromCart(item.id)}> 
                            <Block/>
                        </Button> }
                        <span style={{margin: "0px 20px"}}>{quantityPerItem}</span>
                        <Button variant="outlined" size="small" color="success" 
                            className="btnDetailAdd" onClick={()=> addToCart()}><Add/>
                        </Button>
                        </div>
                        <div>
                            <Link to={`${location}/cart`}>
                                <Button size="small" variant="contained" color="success" startIcon={<ShoppingCart />}  
                                    sx={{marginY: "15px", padding: "8px"}}>Ver el carrito</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        })
    }
    </div>
    )
}

export default ProductDetail