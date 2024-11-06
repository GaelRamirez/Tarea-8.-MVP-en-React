import React from 'react';
import '../App.css';
import logote from '../cosas/imagenes/logote.png';
import MyComponent from './lamamadadeluis';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/nueva-pagina"); // Cambia "/nueva-pagina" a la ruta deseada
  };

  return (
    <div className="App">
      <div className="logo-container1">
        <img src={logote} className="logo" alt="Logote" />
        <h1 className="title">MuniDenuncia</h1>
      </div>
      <header className="App-header">
        <MyComponent goToPage={goToPage} /> {/* Pasar goToPage como prop */}
      </header>
    </div>
  );
}

export default Home;
