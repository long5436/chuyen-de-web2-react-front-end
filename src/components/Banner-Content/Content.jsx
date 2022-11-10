import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import { AiOutlineStar } from 'react-icons/ai';
import { BiImageAlt } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx('banner-content')}>
      <h2>Match Schedule</h2>
      <div className={cx('group-content')}>
        <div className={cx('country-match')}>
          <BiImageAlt className={cx('icon')} />
          <p className={cx('match-name')}>Name country</p>
        </div>

        <div className={cx('match-top')}>
          <div className={cx('match-time')}>
            <p>00:00</p>
          </div>
          <div className={cx('match')}>
            <div className={cx('item-team1')}>
              <div className={cx('logo-image')}>
                <BiImageAlt className={cx('icon')} />
              </div>
              <p>Đội A</p>
            </div>
            <div className={cx('item-team2')}>
              <div className={cx('logo-image')}>
                <BiImageAlt className={cx('icon')} />
              </div>
              <p>Đội B</p>
            </div>
          </div>
          <div className={cx('star')}>
            <AiOutlineStar className={cx('icon')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
