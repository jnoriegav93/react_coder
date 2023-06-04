import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

import logoWeb from "../../assets/img/logo.png";

const menuItems = [
  { id: 1, title: 'Inicio', url: '#' },
  { id: 2, title: 'Acerca de', url: '#' },
  { id: 3, title: 'Productos', url: '#' },
  { id: 4, title: 'Servicios', url: '#' },
  { id: 5, title: 'Contacto', url: '#' },
];

const NavBar = () => {
  const [menuResponsive, setMenuResponsive] = useState(false);

  return (
    <nav className="flex bg-gray-500 items-center justify-between flex-wrap p-1">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <a href="#"> <img src={logoWeb} className="w-16 h-auto"  alt="Logo Web" /> </a>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setMenuResponsive(!menuResponsive)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${menuResponsive ? "hidden" : "block"}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${ menuResponsive ? "block" : "hidden"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${ menuResponsive ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow">
        {menuItems.map((item) => (
          <a key={item.id}  href={item.url} className="block mt-4 p-2 lg:inline-block lg:mt-0 text-white-200 mr-4">{item.title}</a>
          ))}
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
