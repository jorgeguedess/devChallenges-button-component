import { useState } from 'react';
import styles from '../pages/Buttons.module.css';

import { toCapitalize } from '../utils/toCapitalize';

interface InputBoxProps {
  label: string;
}

const InputBox = ({ label }: InputBoxProps) => {
  const [box, setBox] = useState(false);

  return (
    <div className={styles.input}>
      <label htmlFor={label}>{toCapitalize(label)}:</label>
      <input
        type="checkbox"
        name={label}
        id={label}
        checked={box}
        onChange={() => setBox((prevBox) => !prevBox)}
      />
    </div>
  );
};

export default InputBox;
