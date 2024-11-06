import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './component/Home';
//Funcionario
import Paginafuncionario from './component/Funcionario';
import RUT from './component/RUT';
import Pendientes from './component/Pendientes';
import Dardealta from './component/Dardealta';
import Dandode from './component/Dandode';
import Detalles1 from './component/Detalles1';
import Detalles2 from './component/Detalles2';
import Detalles3 from './component/Detalles3';

//Denunciante
import Denunciante from './component/Denunciante';
import NuevaDenuncia from './component/NuevaDenuncia';
import ConsultarEstado from './component/ConsultarEstado';
import Confirmacion from './component/Confirmacion';
import Estados from './component/Estados'; // Importar el nuevo componente


const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #033;
  padding: 20px; /* Padding para que no se pegue a los bordes */
  box-sizing: border-box; /* Incluye padding en el ancho total */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px; /* Limita el ancho máximo para pantallas grandes */
  width: 100%; /* Usa el 100% del ancho disponible */
  padding: 20px; /* Espaciado interno */
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.9); /* Fondo ligeramente translúcido */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para un efecto de elevación */
`;

function App() {
  return (
    <Router>
      <Page>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/funcionario" element={<Paginafuncionario />} />
            <Route path="/RUT" element={<RUT />} />
            <Route path="/Pendientes" element={<Pendientes />} />
            <Route path="/Dardealta" element={<Dardealta />} />
            <Route path="/DandodeAlta" element={<Dandode />} />
            <Route path="/detalles/1" element={<Detalles1 />} />
            <Route path="/detalles/2" element={<Detalles2 />} />
            <Route path="/detalles/3" element={<Detalles3 />} />


            <Route path="/denunciante" element={<Denunciante />} />
            <Route path="/nueva-denuncia" element={<NuevaDenuncia />} />
            <Route path="/consultar-estado" element={<ConsultarEstado />} />
            <Route path="/confirmacion" element={<Confirmacion />} />
            <Route path="/estados" element={<Estados />} />
          </Routes>
      </Page>
    </Router>
  );
}

export default App;

