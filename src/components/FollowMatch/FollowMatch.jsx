import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './FollowMatch.module.scss';

const cx = classNames.bind(styles);

function FollowMatch() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <h4 className={cx('title-text')}>English Premier League</h4>
        <p className={cx('title-group')}>Match group F</p>
      </div>
      <div className={cx('content')}>
        <div className={cx('team')}>
          {/* <div className={cx('team-avatar')}> */}
          <Image src="" alt="" className={cx('team-avatar')} />
          {/* </div> */}
          <p className={cx('team-name')}>Barcelona</p>
        </div>
        <div className={cx('score')}>
          <h2 className={cx('score-text')}>
            <span className={cx('score-highlight')}>2</span>:0
          </h2>
          <p className={cx('datetime')}>19:30</p>
        </div>
        <div className={cx('team')}>
          <Image src="" alt="" className={cx('team-avatar')} />
          <p className={cx('team-name')}>Barcelona</p>
        </div>
      </div>
    </div>
  );
}

export default FollowMatch;
