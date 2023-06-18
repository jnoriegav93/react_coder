import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import CartPage from './pages/CartPage/CartPage'
import DetailPage from './pages/DetailPage/DetailPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className='App'>
      <Header title="Tienda" subtitle="Bienvenido a la tienda" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/category/:categoryid" element={<CategoryPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
