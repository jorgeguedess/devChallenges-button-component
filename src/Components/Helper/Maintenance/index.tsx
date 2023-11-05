import { PropsWithChildren } from 'react';
import styles from './Maintenance.module.css';

export const Maintenance = ({ children }: PropsWithChildren) => {
  return <h4 className={styles.subtitle}>{children}</h4>;
};
