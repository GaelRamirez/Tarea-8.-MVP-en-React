import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  color: #FFF;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding: 20px;
  background-color: #022;
  border-radius: 10px;
  margin-top: 20px;
`;

const Title = styled.h1`
  font-size: 2rem; /* Ajustado para que no sea demasiado grande */
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.div`
  font-size: 1.2rem; /* Ajuste para que se vea bien en zoom 100% */
  font-weight: bold;
  margin-top: 10px;
`;

const Value = styled.div`
  font-size: 1.2rem; /* Ajuste para la legibilidad */
  margin-top: 5px;
  color: #CCC;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: center; /* Centrado de los botones */
`;

const Button = styled.button`
  font-size: 1.3rem; /* Ajuste para los botones */
  padding: 10px 20px;
  color: #FFF;
  background-color: #2A1;
  border: 2px solid #AAA;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #030;
  }
`;

const Detalles1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [denuncia, setDenuncia] = useState({
    folio: location.state?.folio || "123-456",  // Usamos el folio pasado desde ConsultarEstado
    name: "Felipe González",
    date: "15/10/2024",
    location: "Calle San José y Av. Felipe",
    description: "Reporto que en la intersección de Calle San José y Av. Felipe, hay un bache profundo que afecta el tráfico y representa un riesgo para los vehículos.",
    category: "Autos",
    department: "Policía Vial"
  });

  useEffect(() => {
    if (location.state?.folio) {
      // Si hay un folio en el estado, actualizamos la denuncia.
      setDenuncia((prevState) => ({
        ...prevState,
        folio: location.state.folio
      }));
    }
  }, [location.state?.folio]); // Esto se ejecuta cuando el folio cambia

  const handleEdit = () => {
    navigate('/Pendientes');
  };

  return (
    <Page>
      <Container>
        <Title>Detalles de la Denuncia</Title>
        
        <Label>Folio:</Label>
        <Value>{denuncia.folio}</Value>

        <Label>Nombre:</Label>
        <Value>{denuncia.name}</Value>

        <Label>Fecha del Incidente:</Label>
        <Value>{denuncia.date}</Value>

        <Label>Lugar del Incidente:</Label>
        <Value>{denuncia.location}</Value>

        <Label>Descripción del Incidente:</Label>
        <Value>{denuncia.description}</Value>

        <Label>Tipo de Problema:</Label>
        <Value>{denuncia.category}</Value>

        <Label>Dependencia:</Label>
        <Value>{denuncia.department}</Value>

        <ButtonGroup>
          <Button onClick={handleEdit}>Volver</Button>
        </ButtonGroup>
      </Container>
    </Page>
  );
};

export default Detalles1;