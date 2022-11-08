import PropTypes from 'prop-types';
import className from 'classnames/bind';

import Sidebar from '~/components/Sidebar';
import FollowMatch from '~/components/FollowMatch';
import Header from '~/components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '~/components/Footer';
import BannerContent from '~/components/Banner-Content';

const cx = className.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header-top')}>
        <Header />
      </div>
      <div className={cx('content')}>
        <div className={cx('layout-body')}>
          <div style={{ background: '' }} className={cx('sidebar-left')}>
            <Sidebar />
          </div>
          <div  className={cx('body-content')}>
           <BannerContent />
          </div>
          <div style={{ background: '' }} className={cx('sidebar-right')}>
            <FollowMatch />
          </div>
        </div>
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
