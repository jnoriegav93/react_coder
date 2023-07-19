import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
// import { TextField, Button } from '@mui/material'
// import { Search } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="menu">
      <nav className="menuPrincipal">
        <ul>
          <Link className='li' to="/">Inicio</Link>
          <Link className='li' to="/products">Catálogo</Link>
          <Link className='li' to="/contact">Contacto</Link>
          {/* <li><form className="formBuscar">
            <TextField className='txtBuscar' variant="outlined"  placeholder='Buscar...'/>
            <button className='btnBuscar' variant="contained" type='submit'><Search/></button>
          </form></li> */}
          <Link className='li' to="/cart"><CardWidget/></Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar