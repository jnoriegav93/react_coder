import React from 'react'
import CategoryList from '../../components/CategoryList/CategoryList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const CategoryPage = () => {
    
  let { categoryID } = useParams();
  //console.log("page",categoryID);
  return (
    <div>
    <Link to={`/`}>
      <Button variant="contained" size="small" style={{margin: 20}} endIcon={<ArrowBackIcon />}>
        Volver al inicio</Button>
    </Link>
      <CategoryList data={categoryID}/>
    </div>
  )
}

export default CategoryPage