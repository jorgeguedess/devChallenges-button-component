import styles from '../pages/Buttons.module.css';

interface InputBoxProps {
  label: string;
  box: boolean;
  setBox: (box: boolean) => void;
}

const InputBox = ({ label, box, setBox }: InputBoxProps) => {
  return (
    <div className={styles.input}>
      <label htmlFor={label}>
        {label.charAt(0).toUpperCase() + label.slice(1)}:
      </label>
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={box}
        onChange={() => setBox(!box)}
      />
    </div>
  );
};

export default InputBox;
