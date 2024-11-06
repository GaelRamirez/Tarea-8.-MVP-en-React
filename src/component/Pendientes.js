import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BotonHome from '../component/BotonHome';

const Container = styled.div`
  background-color: #e8f5e9;
  padding: 10px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  margin: 50px auto;
  max-height: 800px;
  margin-top: 150px;
  overflow-y: auto;
`;

const Title = styled.h2`
  color: #1b5e20;
  text-align: center;
  margin-bottom: 10px;
`;

const Denuncia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #a5d6a7;
  border-radius: 8px;
  margin-left: auto;
  margin: 5px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const NoDenuncias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #a5d6a7;
  border-radius: 8px;
  margin: 5px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  flex-direction: column;
`;

const Details = styled.div`
  color: #1b5e20;
  font-size: 0.9rem;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  font-size: 1rem;
  color: white;
  background-color: #2a1;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 130px;
  &:hover {
    background-color: #1e8e3e;
  }
`;
const Button1 = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
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
const Button2 = styled.button`
  padding: 6px 8px;
  font-size: 1rem;
  color: white;
  background-color: #053;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 130px;
  margin-left: auto;
  &:hover {
    background-color: #1e8e3e;
  }
`;
const Button3 = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 8px;
  font-size: 1rem;
  color: white;
  background-color: #2a1;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 130px;
  &:hover {
    background-color: #1e8e3e;
  }
`;

const Pendientes = () => {
  const navigate = useNavigate();

  // Estado local para manejar las denuncias
  const [denuncias, setDenuncias] = useState([
    { id: 1, tipo: 'Policía Vial, Automóvil mal estacionado.', folio: '123-456', direccion: 'Calle San José y Av. Felipe', fecha: '15/10/2024', Estatus: 'Falta confirmación de recibido' },
    { id: 2, tipo: 'Policía Vial, Obstrucción de banqueta.', folio: '156-456', direccion: 'Calle B, #456', fecha: '05/10/2024', Estatus: 'Falta confirmación de resolución' },
    { id: 3, tipo: 'Policía Vial, Denuncia de Placas.', folio: '910-511', direccion: 'Calle C, #789', fecha: '10/10/2024', Estatus: 'Falta confirmación de recibido' },
  ]);

  // Estado para mostrar el botón "Confirmar resolución"
  const [editMode, setEditMode] = useState(null);

  // Función para cambiar el estatus a "Falta confirmación de resolución"
  const handleEdit = (id) => {
    setDenuncias((prevDenuncias) =>
      prevDenuncias.map((denuncia) =>
        denuncia.id === id ? { ...denuncia, Estatus: 'Falta confirmación de resolución' } : denuncia
      )
    );
    setEditMode(id); // Activar modo de edición para esta denuncia
  };

  // Función para eliminar la denuncia
  const handleDelete = (id) => {
    setDenuncias((prevDenuncias) => prevDenuncias.filter((denuncia) => denuncia.id !== id));
    setEditMode(null); // Desactivar el modo de edición después de eliminar
  };

  const verDetalles = (id) => {
    navigate(`/detalles/${id}`);
  };

  const irAInicio = () => {
    navigate('/');
  };

  return (
    <Container>
      <Title>Denuncias Pendientes</Title>
      {/* Condicional para mostrar mensaje si no hay denuncias */}
      {denuncias.length === 0 ? (
        <NoDenuncias>
          <Details><strong>Por el momento no tiene denuncias pendientes.</strong></Details>
          {/* Botón para redirigir a la página de inicio */}
          <Button1 onClick={irAInicio}>Ir al Inicio</Button1>
        </NoDenuncias>
      ) : (
        denuncias.map((denuncia) => (
          <Denuncia key={denuncia.id}>
            <Details>
              <p><strong>Tipo:</strong> {denuncia.tipo}</p>
              <p><strong>Folio:</strong> {denuncia.folio}</p>
              <p><strong>Dirección:</strong> {denuncia.direccion}</p>
              <p><strong>Fecha:</strong> {denuncia.fecha}</p>
              <p><strong>Estatus:</strong> {denuncia.Estatus}</p>
            </Details>
            <BotonHome />
            <Button2 onClick={() => verDetalles(denuncia.id)}>Detalles➔</Button2>

            {/* Mostrar "Actualizar Estatus" solo si el editMode no está activado para esa denuncia */}
            {editMode !== denuncia.id && (
              <Button onClick={() => handleEdit(denuncia.id)}>Actualizar Estatus</Button>
            )}

            {/* Mostrar botón "Confirmar resolución" si el estatus es "Falta confirmación de resolución" y si el modo de edición está activado para esa denuncia */}
            {editMode === denuncia.id && denuncia.Estatus === 'Falta confirmación de resolución' && (
              <Button3 onClick={() => handleDelete(denuncia.id)}>Confirmar resolución</Button3>
            )}
          </Denuncia>
        ))
      )}
    </Container>
  );
};

export default Pendientes;
