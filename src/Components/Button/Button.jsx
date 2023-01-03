import { ReactComponent as ShopCart } from "../../Assets/icons/add_shopping.svg";

import styles from "./Button.module.css";
import gridBtn from "./GridButton.module.css";

const Button = ({
  classGrid,
  visibleText = false,
  label = true,
  text = "Default",
  active = false,
  variant,
  disabledShadow,
  disabled,
  startIcon,
  endIcon,
  color,
  size,
}) => {
  return (
    <div
      className={`${styles.containerBtn} ${
        classGrid ? gridBtn[classGrid] : ""
      }`}
    >
      <code>
        {active
          ? ""
          : label && (
              <p className={styles.tag}>
                &lt;Button
                {variant && ` variant="${variant}"`} {disabled && " disabled"}
                {disabledShadow && "disableShadow "}{" "}
                {color && !size && visibleText && ` color="${color}"`}{" "}
                {size && visibleText && ` size="${size}"`}{" "}
                {startIcon && ` startIcon="${startIcon}"`}{" "}
                {endIcon && ` endIcon="${endIcon}"`} /&gt;
              </p>
            )}
        {active && !visibleText && (
          <p className={styles.info}>&:hover, &:focus</p>
        )}
      </code>
      <button
        className={`
        ${styles.button}
        ${active === false ? "" : styles.active} 
        ${disabled === undefined ? "" : styles.disabled} 
        ${variant === undefined ? "" : styles[variant]} 
        ${disabledShadow === undefined ? "" : styles[disabledShadow]}
        ${color === undefined ? "" : styles[color]} 
        ${size === undefined ? "" : styles[size]} 
        `}
      >
        {startIcon && (
          <span className={styles.startIcon}>
            {startIcon === "local_grocery_store" ? <ShopCart /> : ""}
          </span>
        )}
        {text}
        {endIcon && (
          <span className={styles.endIcon}>
            {endIcon === "local_grocery_store" ? <ShopCart /> : ""}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
