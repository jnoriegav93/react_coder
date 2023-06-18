import React, {useState, useEffect} from 'react';
import CardProduct from '../CardProduct/CardProduct';
import { useParams } from 'react-router-dom';
import axios from "axios";

const CategoryList = () => {
    const [products, setProducts] = useState([]);
    let { categoryid } = useParams();
    console.log(`${categoryid}`,products);
    useEffect(()=>{
        axios(`https://dummyjson.com/products/category/${categoryid}`)
        .then( (json) => setProducts(json.data.products));
    }, []);

    //this.props.clearData();
    return (
        <div>
            <h1>Productos de {categoryid}</h1>
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
        </div>
    )
}
export default CategoryList