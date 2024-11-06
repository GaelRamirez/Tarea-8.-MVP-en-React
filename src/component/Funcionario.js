import React from 'react';
import '../App.css';
import MyComponent from './BotonesIngresar';
import { useNavigate } from 'react-router-dom';
import BotonHome from '../component/BotonHome';
import styled from 'styled-components';

const styles = {
  title: {
    fontSize: '3.5em',
    color: '#fff',
    position: 'relative',
    top: '100px', // Ajusta este valor para moverlo hacia abajo
    left: '0px', // Ajusta para moverlo horizontalmente
    marginBottom: '0.5em',
    
  },
  subtitle: {
    fontSize: '2em',
    color: '#fff',
    position: 'relative',
    top: '50px', // Ajusta este valor para moverlo hacia abajo o hacia arriba
    left: '0px', // Ajusta para moverlo horizontalmente
  },
};

export function Paginafuncionario() {
  const navigate = useNavigate();

  const goToPage = () => {
    navigate("/nueva-pagina"); // Cambia "/nueva-pagina" a la ruta deseada
  };

  return (
    <div className="App">
      <div className="logo-container">
        <h1 style={styles.title}>Funcionario</h1>
        <h2 style={styles.subtitle}>Ingresar con:</h2>
      </div>
      <header className="App-header">
      <BotonHome />
      <MyComponent goToPage={goToPage} /> {/* Pasar goToPage como prop */}
      </header>
    </div>
  );
}

export default Paginafuncionario;