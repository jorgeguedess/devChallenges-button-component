import React from "react";

import styles from "../pages/Buttons.module.css";

const InputBox = ({ label, box, setBox, onChangeBox }) => {
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
