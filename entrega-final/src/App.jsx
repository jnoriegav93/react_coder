import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
//Pages
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import DetailPage from './pages/DetailPage/DetailPage'
import CartPage from './pages/CartPage/CartPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import ShopPage from './pages/ShopPage/ShopPage';
import { CartProvider } from './context/CartContext/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/detail/:id" element={<DetailPage/>}/>
              <Route path="/products" element={<ProductsPage/>}/>
              <Route path="/:category/:filter" element={<CategoryPage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path="/shop" element={<ShopPage/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
