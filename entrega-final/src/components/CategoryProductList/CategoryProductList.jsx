import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Spinner from '../Spinner/Spinner';
import ProductCard from '../ProductCard/ProductCard';
import './CategoryProductList.css'


const CategoryProductList = () => {
    let { category, filter } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //
    const [count, setCount] = useState();
    //
    useEffect(() =>{
        const getProducts = async () => {
            const q = query(collection(db, "products"), where(category, "==", filter));
            const querySnapshot = await getDocs(q);
            const lista = [];
            let counter = 0;
            querySnapshot.forEach((doc) => {
                lista.push({...doc.data(), idFB: doc.id});
                counter++;
        });
        setProducts(lista);
        setCount(counter);
        };
        getProducts();
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            <h2>{filter}</h2>
            <span>{count} results</span>
            <div className="CategoryProductList">
                { 
                    isLoading ? (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "30vh" }}>
                            <Spinner/>
                        </div>
                    ) : 
                    (
                        products.map((item) => {
                        return (
                            <div key={item.id}>
                            <ProductCard data={item}/>
                            </div>
                        );
                        })
                    )
                    
                }
            </div>
        </>
    )
}

export default CategoryProductList