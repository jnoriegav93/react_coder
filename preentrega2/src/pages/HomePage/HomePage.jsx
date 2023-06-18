import React, { useEffect, useState } from 'react'
import CardList from '../../components/CardList/CardList';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from "axios";
const HomePage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(()=>{
      axios(`https://dummyjson.com/products/categories`)
      .then( (json) => setCategories(json.data));
  }, []);
  //console.log(categories);

  return (
    <div class="HomePage">
      <nav className="subMenuCategories">
        <ul>
          {categories.map((category,id) => (
            <Link className='Category-Link' to={`/category/${category}`} key={id}>
              <Button variant="contained" size="small">{category}</Button>
            </Link>
          ))}
        </ul>
      </nav>
      <CardList/>
    </div>
  )
}

export default HomePage