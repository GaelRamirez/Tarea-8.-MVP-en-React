import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BotonHome from '../component/BotonHome';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8f5e9;
  padding: 7px 30px;
  border-radius: 8px;
  width: 600px;
  margin-top: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
  background-color: #a5d6a7;
  padding: 35px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  text-align: center;
  position: relative;
  margin: 1px 0;
`;

const InputField = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1em;
  border: 1px solid #81c784;
  border-radius: 4px;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.05);
  outline: none;
  text-align: center;
`;

const WarningText = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const BotonFlechaStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  font-size: 1rem;
  color: white;
  background-color: #2a1;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #1e8e3e;
  }
`;

export function RUT() {
  const navigate = useNavigate();
  
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const goToPage = () => {
    if (rut && password) {
      setShowWarning(false); // Oculta el mensaje de advertencia si todo está completo
      navigate("/Pendientes"); // Cambia "/nueva-pagina" a la ruta deseada
    } else {
      setShowWarning(true); // Muestra el mensaje de advertencia si hay campos vacíos
    }
  };

  const styles = {
    title: {
      fontSize: '2.2em',
      color: '#1b5e20',
      marginBottom: '0.5em'
    },
    subtitle: {
      fontSize: '1.2em',
      color: '#2e7d32',
      marginBottom: '1em'
    },
    footer: {
      paddingTop: '10px'
    }
  };

  return (
    <Container>
      <ContentBox>
        <h1 style={styles.title}>RUT</h1>
        <h2 style={styles.subtitle}>Ingrese RUT:</h2>
        <InputField 
          type="number" 
          placeholder="Ingrese su RUT" 
          aria-label="Ingrese su RUT" 
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />
        
        <h2 style={styles.subtitle}>Ingrese Contraseña:</h2>
        <InputField 
          type="password" 
          placeholder="Ingrese su Contraseña" 
          aria-label="Ingrese su Contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {showWarning && <WarningText>Por favor complete todos los campos antes de continuar.</WarningText>}
        
        <BotonFlechaStyled onClick={goToPage}>Continuar</BotonFlechaStyled>
      </ContentBox>
      <div style={styles.footer}>
        <BotonHome />
      </div>
    </Container>
  );
}

export default RUT;
