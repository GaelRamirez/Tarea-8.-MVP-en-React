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

const categories = [
  "Lámparas", "Basura", "Autos", "Ruido Excesivo", 
  "Control Animal", "Arbolado", "Baches", "Otro"
];

const departmentsByCategory = {
  "Lámparas": ["Mantenimiento Urbano"],
  "Basura": ["Limpieza Pública", "Reciclaje"],
  "Autos": ["Policía Vial", "Dirección de Movilidad"],
  "Ruido Excesivo": ["Control Ambiental", "Dirección de Seguridad"],
  "Control Animal": ["Control Animal", "Salud Pública"],
  "Arbolado": ["Parques y Jardines", "Protección Ambiental"],
  "Baches": ["Obras Públicas", "Mantenimiento Vial"],
  "Otro": ["Atención Ciudadana"]
};

const NuevaDenuncia = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!name || !date || !location || !description || !selectedCategory || !selectedDepartment) {
      setResponse("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Simulación de envío exitoso
    setResponse("Enviando denuncia...");
    setTimeout(() => {
      navigate("/confirmacion", { state: { folio: "000-001" } });
    }, 1000);
  };

  return (
    <Page>
      <ChatContainer>
        <ChatHeader>Selecciona el tipo de problema y la dependencia</ChatHeader>
        
        <Form onSubmit={handleSubmit}>
          <Label>¿Qué tipo de problema tienes?</Label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Selecciona un problema</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {selectedCategory && (
            <>
              <Label>¿Con quién te quieres comunicar?</Label>
              <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                <option value="">Selecciona una dependencia</option>
                {departmentsByCategory[selectedCategory].map((department) => (
                  <option key={department} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </>
          )}

          <Label>Nombre (puede ser anónimo)</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa tu nombre o 'Anónimo'" required />

          <Label>Fecha del Incidente (dd/mm/aaaa)</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

          <Label>Lugar del Incidente</Label>
          <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Ejemplo: Calle Principal y Av. Secundaria" required />

          <Label>Descripción del Incidente</Label>
          <TextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe el incidente con detalle..." required />

          <Label>Comentarios Adicionales</Label>
          <TextArea placeholder="Información adicional que pueda ayudar..." />

          <Button type="submit">Enviar Denuncia</Button>
        </Form>

        {response && <ResponseMessage>{response}</ResponseMessage>}
      </ChatContainer>
      <BotonHome />
    </Page>
  );
};

// Página de Confirmación
export const Confirmacion = ({ location }) => {
  const folio = location.state?.folio || "000-001"; // Número de folio predeterminado en caso de que falte

  return (
    <Page>
      <ChatContainer>
        <ChatHeader>Denuncia Enviada</ChatHeader>
        <ResponseMessage>
          Tu denuncia ha sido registrada con éxito.<br />
          Para consultar o actualizar tu denuncia, usa el folio: <strong>{folio}</strong>
        </ResponseMessage>
      </ChatContainer>
    </Page>
  );
};

// Componentes estilizados
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  max-width: 560px; // Ancho máximo reducido al 80%
  padding: 6px; // Padding reducido al 80%
  background-color: #022;
  border-radius: 8px; // Bordes más suaves
  margin-top: 220px; // Margen superior reducido
`;

const ChatHeader = styled.div`
  font-size: 1rem; // Fuente reducida al 80%
  margin-bottom: 5px; // Margen inferior reducido
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3px; // Espaciado reducido al 80%
`;

const Label = styled.label`
  font-size: 0.8rem; // Fuente reducida al 80%
`;

const Input = styled.input`
  font-size: 0.8rem; // Fuente reducida al 80%
  padding: 4px; // Padding reducido
  border-radius: 4px; // Bordes más suaves
  border: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-size: 0.8rem; // Fuente reducida al 80%
  padding: 4px; // Padding reducido
  border-radius: 4px; // Bordes más suaves
  border: none;
  width: 100%;
  resize: vertical;
  min-height: 56px; // Altura mínima reducida al 80%
`;

const Button = styled.button`
  font-size: 1rem; // Fuente reducida al 80%
  padding: 5px; // Padding reducido
  color: #FFF;
  background-color: #2A1;
  border: 2px solid #AAA;
  border-radius: 4px; // Bordes más suaves
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #030;
  }
`;

const ResponseMessage = styled.div`
  font-size: 0.8rem; // Fuente reducida al 80%
  color: #CCC;
  margin-top: 5px; // Margen superior reducido
  padding: 4px; // Padding reducido
  border-radius: 4px; // Bordes más suaves
  background-color: #011;
  width: 100%;
`;

export default NuevaDenuncia;
