import { Link } from 'react-router-dom';

import styles from './Nav.module.css';
import NavMenu from './NavMenu';
import { useNav } from '../../Hooks/useNav';

const Nav = () => {
  const { mobile, mobileMenu, aria, handleMenu } = useNav();

  return (
    <nav
      className={`${mobile ? styles.navMobile : styles.nav} ${
        mobileMenu !== false ? styles.active : ''
      }`}
    >
      <Link className={styles.logo} to="/">
        <span>Dev</span>Challenges.io
      </Link>
      {mobile && (
        <button
          aria-label={aria}
          onClick={handleMenu}
          className={`${styles.buttonMobile}`}
        ></button>
      )}
      <NavMenu mobile={mobile} />
    </nav>
  );
};

export default Nav;
