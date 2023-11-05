import ShopCartIcon from '../../svg/AddShopping';
import classnames from 'classnames';

// types
import { IButtonProps } from '../../types/button';

import styles from './Button.module.css';
import gridBtnStyles from '../../styles/Grid.module.css';

const Button = ({
  classGrid,
  visibleText = false,
  hiddenTag = false,
  label = true,
  text = 'Default',
  active = false,
  variant,
  disabledShadow = false,
  disabled = false,
  startIcon,
  endIcon,
  color,
  size,
}: IButtonProps) => {
  return (
    <div
      className={classnames({
        [styles.containerBtn]: true,
        [gridBtnStyles.classGrid]: classGrid,
      })}
    >
      <code>
        {active || hiddenTag
          ? ''
          : label && (
              <p className="tag">
                &lt;Button
                {variant && ` variant="${variant}"`} {disabled && ' disabled'}
                {!variant && disabledShadow && 'disableShadow '}{' '}
                {color && !size && visibleText && ` color="${color}"`}{' '}
                {size && visibleText && ` size="${size}"`}{' '}
                {startIcon && ` startIcon="${startIcon}"`}{' '}
                {endIcon && ` endIcon="${endIcon}"`} /&gt;
              </p>
            )}
        {active && !visibleText && <p className="info">&:hover, &:focus</p>}
      </code>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.active]: active,
          [styles.disabled]: disabled,
          [styles.disabledShadow]: disabledShadow,
          [styles[variant || '']]: variant,
          [styles[color || '']]: color,
          [styles[size || '']]: size,
        })}
      >
        {startIcon && (
          <span className={styles.startIcon}>
            {startIcon === 'local_grocery_store' ? (
              <ShopCartIcon size={24} />
            ) : (
              ''
            )}
          </span>
        )}
        {text}
        {endIcon && (
          <span className={styles.endIcon}>
            {endIcon === 'local_grocery_store' ? (
              <ShopCartIcon size={24} />
            ) : (
              ''
            )}
          </span>
        )}
      </button>
    </div>
  );
};

export default Button;
