import './CategoryList.css'
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Spinner from '../Spinner/Spinner';

const CategoryList = () => {

  const [products, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let location = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
  
  useEffect(() =>{
    const getCategories = async () => {
      const q = query(collection(db, "categories"));
      const querySnapshot = await getDocs(q);
      const lista = [];
      querySnapshot.forEach((doc) => {
        // lista.push({...doc.data(), idFB: doc.id});
        if(lista.filter( (cat) => cat.category === doc.data().masterCategory).length === 0){
          lista.push({category: doc.data().masterCategory});
        }
      });
      setCategories(lista);
    };
    getCategories();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <div className="CategoryList">
      { 
        isLoading ? <Spinner/> :  
        <>
          <div>
            <Link to={`${location}/gender/Men`}>
              <Button size="small" variant="contained" color="warning" sx={{marginRight: "15px"}}>Men</Button>
            </Link>
          </div>
          <div>
            <Link to={`${location}/gender/Women`}>
              <Button size="small" variant="contained" color="warning" sx={{marginRight: "15px"}}>Women</Button>
            </Link>
          </div>
          <div>
            <Link to={`${location}/gender/Unisex`}>
              <Button size="small" variant="contained" color="warning" sx={{marginRight: "15px"}}>Unisex</Button>
            </Link>
          </div>
          { 
            products.map((item) => {
              return (
                <div key={item.category}>
                  <Link to={`${location}/masterCategory/${item.category}`}>
                    <Button size="small" variant="contained" color="warning" sx={{marginRight: "15px"}}>{item.category}</Button>
                  </Link>
                </div>
              );
            })
          }
        </>
      }
    </div>
  )
}

export default CategoryList

// 43250 - 01/07 - Técnicas de rendering & Firebase I
// 03:34