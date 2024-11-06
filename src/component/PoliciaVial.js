// src/component/PoliciaVial.js
import React, { useState } from 'react';
import styled from 'styled-components';
import logote from '../cosas/imagenes/logote.png';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  color: #FFF;
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
  width: 300px;
  height: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 20px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  padding: 20px;
  background-color: #022;
  border-radius: 10px;
  margin-top: 200px;
`;

const ChatHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FolioNumber = styled.div`
  font-size: 1.8rem;
  color: #CCC;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 8px;
  border: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 8px;
  border: none;
  width: 100%;
  resize: vertical;
  min-height: 150px;
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 15px;
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

const ResponseMessage = styled.div`
  font-size: 1.8rem;
  color: #CCC;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: #011;
  width: 100%;
`;

const PoliciaVial = () => {
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("Esperando confirmación de recibido por el funcionario.");
  };

  return (
    <Page>
      <LogoContainer>
        <Logo src={logote} alt="Logote" />
        <Title>MuniDenuncia</Title>
      </LogoContainer>

      <ChatContainer>
        <ChatHeader>Chat con Policía Vial</ChatHeader>
        <FolioNumber>Número de Folio: 000-001</FolioNumber>

        <Form onSubmit={handleSubmit}>
          <Label>Nombre (puede ser anónimo)</Label>
          <Input type="text" placeholder="Ingresa tu nombre o 'Anónimo'" required />

          <Label>Fecha del Incidente (dd/mm/aaaa)</Label>
          <Input type="date" required />

          <Label>Lugar del Incidente</Label>
          <Input type="text" placeholder="Ejemplo: Calle Principal y Av. Secundaria" required />

          <Label>Descripción del Incidente</Label>
          <TextArea placeholder="Describe el incidente con detalle..." required />

          <Label>Comentarios Adicionales</Label>
          <TextArea placeholder="Información adicional que pueda ayudar..." />

          <Button type="submit">Enviar Denuncia</Button>
        </Form>

        {response && <ResponseMessage>{response}</ResponseMessage>}
      </ChatContainer>
    </Page>
  );
};

export default PoliciaVial;
