export interface IInputWithSlider {
  name: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  format?: 'currency' | 'numeric';
}
