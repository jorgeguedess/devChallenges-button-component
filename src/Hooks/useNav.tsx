import { useEffect, useState } from 'react';
import useMedia from './useMedia';
import { useNavigate } from 'react-router-dom';

export const useNav = () => {
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(true);
  const [statusAria, setstatusAria] = useState(true);
  const [aria, setAria] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    handleMenu();
  }, [navigate]);

  function handleMenu() {
    setMobileMenu(!mobileMenu);
    setstatusAria(!statusAria);
    statusAria ? setAria('Abrir Menu') : setAria('Fechar Menu');
  }

  return { mobile, mobileMenu, aria, handleMenu };
};
