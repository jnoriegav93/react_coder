import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from "react-router-dom";

const CardProduct = ({ data }) => {
  //console.log(data) 
  return (
    <Card sx={{ minWidth: 350, maxWidth: 400, minHeight: 550 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={data.images[0]}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="description" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="price" color="text.secondary">
          ${data.price}.00 ({data.discountPercentage}% dscto)
        </Typography>
      </CardContent>
      <CardActions sx={{margin: 2}}>
        <Link to={`detail/${data.id}`}>
          <Button variant="contained" size="small">Detalle</Button>
        </Link>
        <Button variant="contained" size="small" endIcon={<LocalGroceryStoreIcon />}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
