import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('footer')}>
      <h5>Welcome To Football - Latest Football , Results, Fixtures and Tables</h5>
      <p> &copy; 1998-2022 Footer</p>
    </div>
  );
}

export default Footer;
