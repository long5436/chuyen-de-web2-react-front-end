import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import SearchSidebar from '~/components/SearchSidebar';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const htmlElement = document.documentElement;

function Header() {
  const checkBoxRef = useRef();
  const theme = localStorage.getItem('theme');
  const themestyle = {
    dark: {
      backgroundcolor: '#fff',
      color: '#000',
    },
    light: {
      backgroundcolor: '#000',
      color: '#fff',
    },
  };
  const [darkLight, setDarkLight] = useState(() => {
    return theme;
  });

  function handleChangeDarkMode(event) {
    setDarkLight(event.target.checked ? 'light' : 'dark');
  }

  useEffect(() => {
    if (theme === 'dark') {
      checkBoxRef.current.checked = true;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkLight);
    htmlElement.setAttribute('theme', darkLight);
  }, [darkLight]);

  return (
    <div className={cx('header')}>
      <div className={cx('container')}>
        <div className={cx('logo-top')}>
          <h3 className={cx('logo')}>Football</h3>
        </div>
        <div className={cx('search')}>
          <SearchSidebar />
        </div>
        <div className={cx('btn-radio')}>
          <input
            ref={checkBoxRef}
            type="checkbox"
            value={darkLight}
            onChange={handleChangeDarkMode}
            className={cx('switch-toggle')}
            id="light-dark"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Header;
