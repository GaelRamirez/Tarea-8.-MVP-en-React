import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logote from '../cosas/imagenes/logote.png';

// Contenedor del botón
const BotonContainer = styled.div`
  display: flex; /* Utiliza flexbox para alinear los elementos */
  align-items: center; /* Centra verticalmente los elementos */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  padding: 1px; /* Reduce el espaciado interno para hacer más pequeño el contenedor */
  border-radius: 5px; /* Bordes redondeados */
  transition: background-color 0.3s ease; /* Transición suave para el fondo */
  width: 460px;
  height: 150px;
  /* Cambia la posición para mover el botón */
  position: absolute; /* Posición absoluta para moverlo libremente */
  top: 10px; /* Ajusta este valor para moverlo hacia abajo o arriba */
  left: 20px; /* Ajusta este valor para moverlo a la izquierda o derecha */

  &:hover {
    background-color: rgba(255, 255, 255, 0.3); /* Fondo semi-transparente al pasar el mouse */
  }
`;

// Estilo de la imagen
const LogoImage = styled.img`
  width: 140px; /* Reduce el ancho de la imagen */
  height: auto; /* Mantiene la proporción de la imagen */
  margin-right: 5px; /* Espacio entre la imagen y el texto */
`;

// Estilo del texto
const BotonTitle = styled.span`
  font-size: 3rem; /* Reduce el tamaño de fuente para hacer más pequeño el contenedor */
  color: #fff; /* Color del texto */
  white-space: nowrap; /* Evita que el texto se divida en varias líneas */
`;

function BotonHome() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <BotonContainer className="boton-home" onClick={handleHomeClick}>
      <LogoImage
        src={logote}
        alt="Home"
      />
      <BotonTitle className="boton-home-title">MuniDenuncia</BotonTitle>
    </BotonContainer>
  );
}

export default BotonHome;
