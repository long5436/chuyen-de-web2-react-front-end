import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <div style={{ background: 'red', height: 50 }}>
          {/* component header */}header
        </div>
        <div className={cx('layout-body')}>
          <div
            style={{ background: 'pink', height: 50 }}
            className={cx('sidebar-left')}
          >
            sidebar
          </div>
          <div
            style={{ background: 'green', height: 50 }}
            className={cx('body-content')}
          >
            {children}
          </div>
          <div
            style={{ background: 'orange', height: 50 }}
            className={cx('sidebar-right')}
          >
            sidebar
          </div>
        </div>
        <div
          style={{ background: 'blue', height: 50 }}
          className={cx('footer')}
        >
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
