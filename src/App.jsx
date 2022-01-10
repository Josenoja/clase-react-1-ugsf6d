import React from 'react';
import { PaginaListas } from './components/PaginaListas';

export function App() {
  return (
    <>
      <nav>
        <h1>Mi aplicación</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Listas de tareas</a>
          </li>
          <li>
            <a href="/">Perfil</a>
          </li>
        </ul>
      </nav>
      <PaginaListas />
    </>
  );
}
