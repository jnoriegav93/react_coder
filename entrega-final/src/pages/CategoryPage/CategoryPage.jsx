import { Link, useParams } from 'react-router-dom';
import CategoryProductList from '../../components/CategoryProductList/CategoryProductList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';


const CategoryPage = ( ) => {
  return (
    <div>
      <Link to={`/products`}>
        <Button variant="contained" size="small" style={{margin: 20}} endIcon={<ArrowBackIcon />}>
          Volver al catálogo</Button>
      </Link>
      <CategoryProductList/>
    </div>
  )
}

export default CategoryPage