import React, { FC } from 'react';

import './app.scss';

const App: FC = () => {
  return (
    <div className="app">
      <section className="section-container">
        <h1 className="section-title">Simulá tu crédito</h1>

        <div>
          <span>Monto Total</span>
          <span>Plazo</span>
        </div>

        <div>
          <div>
            <span>Cuota Fija por mes</span>
          </div>

          <div>
            <span>Obtene Credito</span>
            <span>Ver detalles de Cuotas</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
