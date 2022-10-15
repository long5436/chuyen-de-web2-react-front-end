import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <h1 className={cx('title')}>This is home</h1>
    </div>
  );
}

export default Home;
