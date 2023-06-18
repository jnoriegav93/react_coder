import React, {useState, useEffect} from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './CardList.css';
import axios from "axios";

const CardList = () => {
    const [products, setProducts] = useState([]);
    //console.log("Products",products);
    /*
    https://dummyjson.com/
    https://dummyjson.com/products

    https://fakeapi.platzi.com/
    https://api.escuelajs.co/api/v1/products
    */
    //
    //
    useEffect(()=>{
        /*fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => setUsers(data.products));*/

        axios("https://dummyjson.com/products")
        .then( (json) => setProducts(json.data.products));
    }, []);
    return (
        <>
        <h1>Productos</h1>
        <div className="Cards-List">
            {
                products.map( (product) =>{
                    return(
                        <div style={{ margin: 10}} key={product.id}>
                            <CardProduct data={product}/>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default CardList