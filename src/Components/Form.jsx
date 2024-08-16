import React, { useState }from "react";


function Form({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [dragon, setDragon] = useState('');
  const [compania, setCompania] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nombre, dragon, compania);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <h1>Inscribete para el proximo viaje a hyrule con Zelda o Link!!</h1>
        <label>¿Cuál es tu nombre?</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="form-group">
        <label>¿Quieres ir montado en dragón, sí o no?</label>
        <input
          type="text"
          value={dragon}
          onChange={(e) => setDragon(e.target.value)}
          placeholder="Sí o No"
        />
      </div>
      <div className="form-group">
        <label>¿Con quién prefieres ir, con Zelda o Link? Escribe tu respuesta</label>
        <input
          type="text"
          value={compania}
          onChange={(e) => setCompania(e.target.value)}
          placeholder="Zelda o Link"
        />
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
}

export default Form;
