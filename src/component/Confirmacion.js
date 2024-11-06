// Confirmacion.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  color: #FFF;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: #022;
  border-radius: 10px;
  margin-top: 150px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const FolioNumber = styled.p`
  font-size: 1.8rem;
  color: #CCC;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 10px;
  background-color: #D32F2F;
  color: #FFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #B71C1C;
  }
`;

const Confirmacion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const folio = location.state?.folio || "000-000"; // Recibe el folio o usa "000-000" por defecto

  const handleSalir = () => {
    navigate("/denunciante");
  };

  return (
    <Page>
      <Container>
        <Title>Denuncia Enviada</Title>
        <p>Tu denuncia ha sido registrada con éxito.</p>
        <p>Para consultar o actualizar tu denuncia, usa el folio:</p>
        <FolioNumber>{folio}</FolioNumber> {/* Muestra el folio recibido */}
        <Button onClick={handleSalir}>Salir</Button>
      </Container>
    </Page>
  );
};

export default Confirmacion;
