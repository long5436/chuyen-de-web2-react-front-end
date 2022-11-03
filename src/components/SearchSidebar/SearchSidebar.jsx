import classNames from 'classnames/bind';
import { FiSearch } from 'react-icons/fi';
import styles from './SearchSidebar.module.scss';

const cx = classNames.bind(styles);

function SearchSidebar() {
  return (
    <form className={cx('wrapper')}>
      <div className={cx('search-icon')}>
        <FiSearch className={cx('icon')} />
      </div>
      <input type="text" className={cx('input')} placeholder="Tìm kiếm" />
    </form>
  );
}

export default SearchSidebar;
