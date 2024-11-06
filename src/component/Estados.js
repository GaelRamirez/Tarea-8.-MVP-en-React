import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import BotonHome from '../component/BotonHome';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  color: #FFF;
  padding: 16px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 560px;
  padding: 16px;
  background-color: #022;
  border-radius: 8px;
  margin-top: 150px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 16px;
  text-align: center;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 8px;
`;

const Value = styled.div`
  font-size: 1rem;
  margin-top: 4px;
  color: #CCC;
`;

const Status = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background-color: #388E3C; 
  color: #F1F1F1;
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
  max-width: 160px;
  text-align: center;
  display: ${({ isEditing }) => (isEditing ? 'none' : 'block')};
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 6px;
  border-radius: 4px;
  border: none;
  width: 100%;
  margin-top: 4px;
  color: #000;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 1.1rem;
  padding: 8px 16px;
  color: #FFF;
  background-color: #2A1;
  border: 2px solid #AAA;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #030;
  }

  &.delete {
    background-color: #A21;
    &:hover {
      background-color: #900;
    }
  }
`;

const Estados = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isEditing, setIsEditing] = useState(false);
  const [denuncia, setDenuncia] = useState({
    folio: location.state?.folio || "123-456",
    name: "Felipe González",
    date: "15/10/2024",
    location: "Calle San José y Av. Felipe",
    description: "Reporto que en la intersección de Calle San José y Av. Felipe, hay un bache profundo que afecta el tráfico y representa un riesgo para los vehículos.",
    category: "Baches",
    department: "Obras Públicas"
  });

  useEffect(() => {
    if (location.state?.folio) {
      setDenuncia((prevState) => ({
        ...prevState,
        folio: location.state.folio
      }));
    }
  }, [location.state?.folio]);

  const handleEdit = () => {
    if (isEditing) {
      alert('Cambios guardados.');
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    alert('La denuncia ha sido eliminada.');
    navigate('/denunciante');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDenuncia((prevDenuncia) => ({
      ...prevDenuncia,
      [name]: value,
    }));
  };

  return (
    <Page>
      <Container>
        <Title>Detalles de la Denuncia</Title>
        
        <Label>Folio:</Label>
        <Value>{denuncia.folio}</Value>

        <Label>Nombre:</Label>
        {isEditing ? (
          <Input 
            name="name" 
            value={denuncia.name} 
            onChange={handleChange} 
          />
        ) : (
          <Value>{denuncia.name}</Value>
        )}

        <Label>Fecha del Incidente:</Label>
        {isEditing ? (
          <Input 
            name="date" 
            type="date" 
            value={denuncia.date} 
            onChange={handleChange} 
          />
        ) : (
          <Value>{denuncia.date}</Value>
        )}

        <Label>Lugar del Incidente:</Label>
        {isEditing ? (
          <Input 
            name="location" 
            value={denuncia.location} 
            onChange={handleChange} 
          />
        ) : (
          <Value>{denuncia.location}</Value>
        )}

        <Label>Descripción del Incidente:</Label>
        {isEditing ? (
          <Input 
            name="description" 
            value={denuncia.description} 
            onChange={handleChange} 
          />
        ) : (
          <Value>{denuncia.description}</Value>
        )}

        <Label>Tipo de Problema:</Label>
        <Value>{denuncia.category}</Value>

        <Label>Dependencia:</Label>
        <Value>{denuncia.department}</Value>

        <ButtonGroup>
          <Button onClick={handleEdit}>{isEditing ? 'Guardar' : 'Editar'}</Button>
          <Button className="delete" onClick={handleDelete}>Eliminar</Button>
        </ButtonGroup>

        <Status isEditing={isEditing}>
          Estatus: <br />
          Por confirmar de recibido
        </Status>
      </Container>
      <BotonHome />
    </Page>
  );
};

export default Estados;
