import React, { FC } from 'react';
import classnames from 'classnames';

import { IButton } from './types';

import './styles.scss';

const Button: FC<IButton> = ({
  title,
  color = 'primary',
  size = 'small',
  onClick,
  className,
}) => (
  <button
    type="button"
    className={classnames(
      'button',
      className,
      `button-${color}`,
      `button-${size}`,
    )}
    onClick={onClick}
  >
    {title}
  </button>
);

export default Button;
