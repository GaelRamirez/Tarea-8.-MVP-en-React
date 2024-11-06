// Denunciante.js
import React from 'react';
import styled from 'styled-components';
import logote from '../cosas/imagenes/logote.png';
import { useNavigate } from 'react-router-dom';
import BotonHome from '../component/BotonHome';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  position: relative;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  max-width: 500px; /* Ajuste para una mejor visualización en pantalla normal */
  height: 70px; /* Tamaño más adecuado para que no sea demasiado grande */
  padding: 10px;
  margin: 15px 0;
  font-size: 2rem; /* Un tamaño de fuente más pequeño que es adecuado para 100% zoom */
  color: #000;
  background-color: #2A1;
  border: 2px solid #AAA;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    border: 2px solid #000;
    background-color: #030;
    color: #DDD;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem; /* Ajuste de tamaño de fuente para la visibilidad a zoom 100% */
  margin: 20px 0;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 200px; /* Tamaño más pequeño y adecuado */
  height: auto;
  margin-bottom: 20px;
`;

const styles = {
  title: {
    fontSize: '3.5em',
    color: '#fff',
    position: 'relative',
    top: '-10px', // Ajusta este valor para moverlo hacia abajo
    left: '0px', // Ajusta para moverlo horizontalmente
    marginBottom: '0.5em',
    
  },
  subtitle: {
    fontSize: '2em',
    color: '#fff',
    position: 'relative',
    top: '-70px', // Ajusta este valor para moverlo hacia abajo o hacia arriba
    left: '0px', // Ajusta para moverlo horizontalmente
  },
};

function Denunciante() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // Navega a la página de inicio
  };

  const goToNuevaDenuncia = () => {
    navigate("/nueva-denuncia"); // Cambia a la ruta específica
  };

  const goToConsultarEstado = () => {
    navigate("/consultar-estado"); // Cambia a la ruta específica
  };

  return (
    <Page>
      <h1 style={styles.title}>Denunciante</h1>
      <h2 style={styles.subtitle}>Seleccione operación:</h2>

      <Button onClick={goToNuevaDenuncia}>Nueva Denuncia</Button>
      <Button onClick={goToConsultarEstado}>Consultar Estado De Denuncia</Button>
      <BotonHome />
    </Page>
  );
}

export default Denunciante;
