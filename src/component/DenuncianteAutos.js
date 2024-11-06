// src/component/DenuncianteAutos.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logote from '../cosas/imagenes/logote.png';

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
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 400px; /* Tamaño del logo, igual que en NuevaDenuncia.js */
  height: auto;
`;

const Title = styled.h1`
  font-size: 3rem; /* Tamaño de letra del título, igual que en NuevaDenuncia.js */
  color: #ffffff;
`;

const Header = styled.h2`
  font-size: 12rem; /* Tamaño del encabezado */
  color: #f0f0f0;
  margin: 80px 0; /* Espaciado entre el título y los botones */
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px; /* Espacio entre los botones */
  margin-top: 50px;
`;

const Button = styled.button`
  width: 200%;
  max-width: 1600px;
  height: 200%;
  max-height: 400px;
  padding: 20px;
  margin: 20px 0; /* Margen superior e inferior */
  font-size: 10rem;
  color: #000;
  background-color: #2A1;
  border: 10px solid #AAA;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    border: 10px solid #000;
    background-color: #030;
    color: #DDD;
  }
`;

const DenuncianteAutos = () => {
  const navigate = useNavigate();

  const goToPoliciaVial = () => {
    navigate("/policia-vial"); // Navega a Policia Vial
  };

  const goToDireccionMovilidad = () => {
    navigate("/direccion-movilidad"); // Navega a Dirección de Movilidad
  };

  return (
    <Page>
      <LogoContainer>
        <Logo src={logote} alt="Logote" />
        <Title>MuniDenuncia</Title>
      </LogoContainer>
      <Header>¿A quién quieres dirigir la denuncia?</Header>
      <ButtonContainer>
        <Button onClick={goToPoliciaVial}>Policía Vial</Button>
        <Button onClick={goToDireccionMovilidad}>Dirección de Movilidad</Button>
      </ButtonContainer>
    </Page>
  );
};

export default DenuncianteAutos;
