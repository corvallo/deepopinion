import { FC } from "react";

export interface RadioOption {
  value: string | number;
  label: string;
}
export interface RadioGroupProps {
  options: RadioOption[];
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RowOptions: FC<RadioGroupProps> = ({ options, name, onChange }) => {
  return (
    <div role='radiogroup'>
      {options.map((option: RadioOption, i: number) => {
        return (
          <label className='radio' key={`${name}_${i}`}>
            <input className='radio__input' defaultChecked={i === 0} type='radio' value={option.value} name={name || "radio-option"} onChange={onChange} />
            <span className='radio__label'>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
};
export default RowOptions;
