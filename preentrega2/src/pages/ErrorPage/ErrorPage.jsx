import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() =>{
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);
  return (
    <div>
      <h1>Error 404</h1>
      <p>Serás redirigido a la página de inicio.</p>
    </div>
  )
}

export default ErrorPage