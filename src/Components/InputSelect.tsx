import styles from '../styles/Input.module.css';
import { toCapitalize } from '../utils/toCapitalize';

// types
import { InputSelectProps } from '../types/input-select';
import useInputSelect from '../Hooks/useInputSelect';

const InputSelect = ({ label, value, onChange, type }: InputSelectProps) => {
  const {
    renderizeOptions,
    renderizeOptionsSize,
    optionsColor,
    optionsSize,
    optionsVariant,
  } = useInputSelect();

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
