import React from 'react';
import styled from 'styled-components';
import  {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 198vh;
  background-color: #033;
`;

const Button = styled.button`
  width: 100%;
  max-width: 500px;
  height: 200%;
  max-height: 100px;
  padding: 10px;
  margin: 180px 0 -150px 0; /* Aumenta el valor de margin-top */
  font-size: 60px;
  color: #000;
  background-color: #2A1;
  border: 2px solid #050;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    border: 1px solid #fff;
    background-color: #1e8e3e; 
    color: #DDD;
  }
`;


const MyComponent = ({goToPage}) => {
  const navigate = useNavigate();

  const goToFuncionario = () => {
    navigate("/funcionario");
  };

  const goToDenunciante = () => {
    navigate("/denunciante");
  };

  return (
    <Page>
      <Button onClick={goToFuncionario}>Funcionario</Button>
      <Button onClick={goToDenunciante}>Denunciante</Button>
    </Page>
  );
};

export default MyComponent;