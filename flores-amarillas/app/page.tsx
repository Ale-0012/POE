"use client";

import { useState } from "react";
import Flower from "./components/Flower";
import Rose from "./components/Rose";
import Tulip from "./components/Tulip";

export default function Home() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  return (
    <main>
      {/* Contenedor de Brillitos Flotantes */}
      <div className="sparkle-container">
        <div className="sparkle s1"></div>
        <div className="sparkle s2"></div>
        <div className="sparkle s3"></div>
        <div className="sparkle s4"></div>
        <div className="sparkle s5"></div>
        <div className="sparkle s6"></div>
      </div>

      <h1>🌻 Jardin de Flores 🌻</h1>
      <p>Una pequeña sorpresa hecha con Next.js 💛</p>

      {/* Boton interactivo */}
      <button
        className="btn-mensaje"
        onClick={() => setMostrarMensaje(!mostrarMensaje)}
      >
        {mostrarMensaje ? "Ocultar mensaje" : "Ver mensaje especial 💌"}
      </button>

      {/* Mensaje desplegable */}
      {mostrarMensaje && (
        <div className="mensaje-card">
          <p>¡Que tengas un dia lleno de luz, alegria y muchas flores! ✨🌻🌹🌷</p>
        </div>
      )}

      {/* Jardin variado */}
      <div className="garden">
        <Tulip color="#fb7185" scale={0.9} delay={0.1} />
        <Flower color="#facc15" scale={1} delay={0.3} />
        <Rose color="#e11d48" scale={1.05} delay={0.5} />
        <Flower color="#fde047" scale={0.85} delay={0.2} />
        <Tulip color="#c084fc" scale={1} delay={0.6} />
        <Rose color="#f43f5e" scale={0.9} delay={0.4} />
        <Flower color="#eab308" scale={1.1} delay={0.7} />
      </div>
    </main>
  );
}