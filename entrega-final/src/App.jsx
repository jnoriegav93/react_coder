// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Menu from './components/Menu/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <PlayersProvider>
        <div className="App">
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop" element={<ShopPage />} /> */}
            <Route path="/product/:id" element={<ProductDetailPage />}
            />
          </Routes>
          <Footer/>
        </div>
        </PlayersProvider>
      </Router>
    </div>
  )
}

export default App
