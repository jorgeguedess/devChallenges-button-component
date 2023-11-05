import { NavLink } from 'react-router-dom';
import styles from './NavMenu.module.css';
import { toCapitalize } from '../../../utils/toCapitalize';

interface NavMenuProps {
  mobile: boolean | null;
}

const NavMenu = ({ mobile }: NavMenuProps) => {
  const links = ['colors', 'typography', 'spaces', 'buttons', 'inputs', 'grid'];

  return (
    <ul id="menu" className={`${mobile ? styles.menuMobile : styles.menu}`}>
      {links.map((link) => (
        <li key={link}>
          <NavLink to={link}>{toCapitalize(link)}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
