import './Header.css'
import img from '../../assets/dp-logo.png'
import NavBar from '../NavBar/NavBar';
const Header = () => {
  return (
    <div className="Header">
      <a href="http://localhost:5173/" rel='noreferrer'>
        <img src={img} className="logo" alt="Store logo"/>
      </a>
      <p>JNV Store</p>
      <NavBar/>
    </div>
  )
}

Header.defaultProps = {
  title: 'Entrega Final'
};

export default Header;