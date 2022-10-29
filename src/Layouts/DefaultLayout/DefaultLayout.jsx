import PropTypes from 'prop-types';
import className from 'classnames/bind';

import Sidebar from '~/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div style={{ background: 'red', height: 50 }}>{/* component header */}header</div>
        <div className={cx('layout-body')}>
          <div style={{ background: '' }} className={cx('sidebar-left')}>
            <Sidebar />
          </div>
          <div style={{ background: 'green' }} className={cx('body-content')}>
            {children}
          </div>
          <div style={{ background: 'orange' }} className={cx('sidebar-right')}>
            sidebar
          </div>
        </div>
        <div style={{ background: 'blue' }} className={cx('footer')}>
          footer
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
