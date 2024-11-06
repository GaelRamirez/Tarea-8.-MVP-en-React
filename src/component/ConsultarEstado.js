// ConsultarEstado.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BotonHome from '../component/BotonHome';
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
  margin-top: 300px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

const Input = styled.input`
  font-size: 1.3rem;
  padding: 8px;
  border-radius: 8px;
  border: none;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 10px;
  background-color: #2A1;
  color: #FFF;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #030;
  }
`;

const ConsultarEstado = () => {
  const [folio, setFolio] = useState(''); // Iniciar con un campo vacío
  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, ''); // Limitar solo a números

    if (value.length > 6) return; // Limitar a 6 caracteres numéricos
    if (value.length > 3) {
      value = value.slice(0, 3) + '-' + value.slice(3); // Insertar el guion al llegar al cuarto dígito
    }

    setFolio(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/estados', { state: { folio } }); // Redirige a Estados con el número de folio
  };

  return (
    <Page>
      <Container>
        <Title>Consultar Estado</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Ingresa el Número de Folio (xxx-xxx)</Label>
          <Input
            type="text"
            value={folio}
            onChange={handleChange}
            placeholder="000-000"
            pattern="\d{3}-\d{3}" // Validación del formato xxx-xxx
            required
          />
          <Button type="submit">Consultar</Button>
        </Form>
      </Container>
      <BotonHome />
    </Page>
  );
};

export default ConsultarEstado;
