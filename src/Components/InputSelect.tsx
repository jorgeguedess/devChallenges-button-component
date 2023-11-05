import styles from '../pages/Buttons.module.css';
import { toCapitalize } from '../utils/toCapitalize';

interface InputSelectProps {
  label: string;
  value: string;
  onChange: any;
  type: 'variants' | 'colors' | 'sizes';
}

type optionType = 'small' | 'medium' | 'large';
type optionValue = 'sm' | 'md' | 'lg' | 'default';

const InputSelect = ({ label, value, onChange, type }: InputSelectProps) => {
  const optionsVariant = ['default', 'outline', 'text'];
  const optionsColor = ['default', 'primary', 'secondary', 'danger'];
  const optionsSize = ['default', 'small', 'medium', 'large'];

  function renderizeOptions(optionArray: any[]) {
    return optionArray.map((option) => (
      <option key={option} value={option}>
        {toCapitalize(option)}
      </option>
    ));
  }

  function renderizeOptionsSize(optionSizeArray: any[]) {
    return optionSizeArray.map((optionSize: optionType) => {
      let value: optionValue;
      switch (optionSize) {
        case 'small':
          value = 'sm';
          break;
        case 'medium':
          value = 'md';
          break;
        case 'large':
          value = 'lg';
          break;
        default:
          value = 'default';
          break;
      }
      return (
        <option key={value} value={value}>
          {toCapitalize(optionSize)}
        </option>
      );
    });
  }

  return (
    <div className={styles.input}>
      <label htmlFor={label}>{toCapitalize(label)}:</label>
      <select value={value} onChange={onChange} name={label} id={label}>
        {type === 'variants' && renderizeOptions(optionsVariant)}
        {type === 'colors' && renderizeOptions(optionsColor)}
        {type === 'sizes' && renderizeOptionsSize(optionsSize)}
      </select>
    </div>
  );
};

export default InputSelect;
