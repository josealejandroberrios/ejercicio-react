import type { MouseEvent } from 'react';

export interface IButton {
  title: string;
  color?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}
