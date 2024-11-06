import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const BotonFlechaStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;
  font-size: 1rem;
  color: white;
  background-color: #2a1; /* Cambia el color aquí */
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  &:hover {
    background-color: #1e8e3e; 
`;

function BotonFlecha() {
  const navigate = useNavigate();

  const goToPendientes = () => {
    navigate("/Pendientes");
  };

  return (
    <BotonFlechaStyled onClick={goToPendientes}>
      ➔
    </BotonFlechaStyled>
  );
}

export default BotonFlecha;
