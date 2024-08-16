import React from "react";

function Card({ nombre, dragon, compania }) {
    return (
      <div className="card">
        <h2>Felicidades prepara tu espada!!</h2>
        <div className="card-content">
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Iras en dragon?:</strong> {dragon}</p>
        <p><strong>Tu acompañante sera:</strong> {compania}</p>
        </div>
    </div>
    );
  }
  
  export default Card;