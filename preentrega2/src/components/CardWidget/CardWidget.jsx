import React from 'react'
import './CardWidget.css'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// https://mui.com/material-ui/material-icons/

const CardWidget = () => {
  return (
    <div style={{display: "flex", width: "40px", alignItems: "center"}}>
        <LocalGroceryStoreIcon sx={{color: "white"}}/>
        <p style={{color: "white"}}>5</p>
    </div>
  )
}

export default CardWidget