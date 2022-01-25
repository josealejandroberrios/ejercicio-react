import React, { FC, useCallback, useMemo } from 'react';
import Slider from 'rc-slider';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { IInputWithSlider } from './types';

import './styles.scss';

const InputWithSlider: FC<IInputWithSlider> = ({
  name,
  label,
  value,
  onChange,
  min,
  max,
  format,
}) => {
  const handleChangeInput = useCallback(
    ({ floatValue: valueInput }: NumberFormatValues) => {
      onChange(Number(valueInput) >= min ? Number(valueInput) : min);
    },
    [onChange],
  );

  const prefix = useMemo(
    () => (format === 'currency' ? '$ ' : undefined),
    [format],
  );

  const withValueLimit = useCallback(
    ({ floatValue }: NumberFormatValues): boolean =>
      Number(floatValue ?? 0) <= max,
    [max],
  );

  return (
    <div className="input-with-slider">
      <div className="input-with-slider-field">
        <label htmlFor={name} className="input-with-slider-field-label">
          {label}
        </label>

        <NumberFormat
          value={value}
          displayType="input"
          thousandSeparator="."
          decimalSeparator=","
          prefix={prefix}
          onValueChange={handleChangeInput}
          className="input-with-slider-field-input"
          isAllowed={withValueLimit}
        />
      </div>

      <div className="input-with-slider-slider">
        <Slider
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          marks={{
            [min]: {
              label: (
                <NumberFormat
                  value={min}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={prefix}
                />
              ),
            },
            [max]: {
              label: (
                <NumberFormat
                  value={max}
                  displayType="text"
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix={prefix}
                />
              ),
            },
          }}
          step={1}
          included={false}
        />
      </div>
    </div>
  );
};

export default InputWithSlider;
