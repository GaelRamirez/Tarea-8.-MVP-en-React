// BotonBack.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Asegúrate de tener la clase .boton-back en tu CSS

function BotonBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Llama a navigate con -1 para ir a la página anterior
  };

  return (
    <button className="boton-back" onClick={goBack}>
      ⬅
    </button>
  );
}

export default BotonBack;
