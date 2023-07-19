import './ProductList.css'
import ProductCard from "../ProductCard/ProductCard"
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import Spinner from "../Spinner/Spinner";
import { useEffect, useState } from "react";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() =>{
    const getProducts = async () => {
      const q = query(collection(db, "products"), where("enabled", "==", '1'), limit(30));
      const querySnapshot = await getDocs(q);
      const lista = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        lista.push({...doc.data(), idFB: doc.id});
      });
      // console.log(lista);
      setProducts(lista);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="ProductList">
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
  )
}

export default ProductList

// 43250 - 01/07 - Técnicas de rendering & Firebase I
// 03:34