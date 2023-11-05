import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';

interface NavMenuProps {
  mobile: boolean | null;
}

const NavMenu = ({ mobile }: NavMenuProps) => {
  return (
    <ul id="menu" className={`${mobile ? styles.menuMobile : styles.menu}`}>
      <li>
        <NavLink to="colors">Colors</NavLink>
      </li>
      <li>
        <NavLink to="typography">Typography</NavLink>
      </li>
      <li>
        <NavLink to="spaces">Spaces</NavLink>
      </li>
      <li>
        <NavLink to="buttons">Buttons</NavLink>
      </li>
      <li>
        <NavLink to="inputs">Inputs</NavLink>
      </li>
      <li>
        <NavLink to="grid">Grid</NavLink>
      </li>
    </ul>
  );
};

export default NavMenu;
