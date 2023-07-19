import React from 'react'
import './HomePage.css'
import img from '../../assets/homepage-img.jpg'

const HomePage = () => {
  return (
    <div className='HomePageDiv'>
      <img src={img} alt="Store logo" className='HomePageImg'/>
      <div className="HomePageText">
        <h1>Bienvenidos</h1>
      </div>
    </div>
  )
}

export default HomePage