import { FC } from "react";
import { RadioGroupProps, RadioOption } from "../../@typings/radio";

const RowOptions: FC<RadioGroupProps> = ({ options, name, onChange }) => {
  return (
    <div role='radiogroup' className='radio__group'>
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
