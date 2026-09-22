"use client";

import { useState } from "react";
import Flower from "./components/Flower";

export default function Home() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main>
      <h1>🌻 Flores Amarillas 🌻</h1>
      <p>Una pequeña sorpresa hecha con Next.js 💛</p>

      {/* Botón interactivo */}
      <button 
        className="btn-mensaje" 
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar mensaje" : "Ver mensaje especial 💌"}
      </button>

      {/* Mensaje desplegable */}
      {mostrarMensaje && (
        <div className="mensaje-card">
          <p>¡Que tengas un día lleno de luz, alegría y muchas flores amarillas! ✨🌻</p>
        </div>
      )}

      {/* Jardín de flores */}
      <div className="garden">
        <Flower />
        <Flower />
        <Flower />
        <Flower />
        <Flower />
      </div>
    </main>
  );
}