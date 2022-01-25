import React, { FC, useState, useMemo } from 'react';
import NumberFormat from 'react-number-format';

import { InputWithSlider, Button } from './components';

import { AMOUNTS, TERMS } from './constants';

import './app.scss';
import 'rc-slider/assets/index.css';

const App: FC = () => {
  const [amount, setAmount] = useState<number>(AMOUNTS.min);
  const [term, setTerm] = useState<number>(TERMS.min);
  const fee = useMemo(() => amount / term, [amount, term]);

  return (
    <div className="app">
      <section className="section-container">
        <h1 className="section-title">Simulá tu crédito</h1>

        <InputWithSlider
          name="amount"
          label="Monto Total"
          value={amount}
          onChange={setAmount}
          min={AMOUNTS.min}
          max={AMOUNTS.max}
          format="currency"
        />

        <InputWithSlider
          name="terms"
          label="Plazo"
          value={term}
          onChange={setTerm}
          min={TERMS.min}
          max={TERMS.max}
          format="numeric"
        />

        <div className="section-footer">
          <div className="section-footer-info">
            <span className="section-footer-info-title">
              Cuota Fija por mes
            </span>

            <NumberFormat
              value={fee}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              fixedDecimalScale
              decimalScale={2}
              prefix="$ "
              className="section-footer-info-amount"
            />
          </div>

          <div className="section-footer-actions">
            <Button
              title="Obtené Crédito"
              color="primary"
              size="large"
              onClick={() => {}}
            />

            <Button
              title="Ver Detalles de Cuota"
              color="secondary"
              size="small"
              onClick={() => {}}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
