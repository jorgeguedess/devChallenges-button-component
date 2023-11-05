import styles from '../pages/Buttons.module.css';
import { toCapitalize } from '../utils/toCapitalize';

interface InputBoxProps {
  label: string;
  box: boolean;
  setBox: (box: boolean) => void;
}

const InputBox = ({ label, box, setBox }: InputBoxProps) => {
  const handleMarkBox = () => {
    setBox(!box);
  };

  return (
    <div className={styles.input}>
      <label htmlFor={label}>{toCapitalize(label)}:</label>
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={box}
        onChange={handleMarkBox}
      />
    </div>
  );
};

export default InputBox;
