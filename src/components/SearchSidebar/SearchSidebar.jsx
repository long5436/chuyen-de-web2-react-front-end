import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchSidebar.module.scss';

const cx = classNames.bind(styles);

function SearchSidebar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('search-icon')}>
        <FiSearch className={cx('icon')} />
      </div>
      <input className={cx('input')} placeholder="Tìm kiếm" />
      {/* <div className={cx('input')}></div> */}
    </div>
  );
}

export default SearchSidebar;
