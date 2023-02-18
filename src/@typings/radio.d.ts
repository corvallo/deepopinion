export interface RadioOption {
  value: string | number;
  label: string;
}
export interface RadioGroupProps {
  options: RadioOption[];
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
