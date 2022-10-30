import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  const fakeData = [
    { avatar: '', name: 'Viet Nam' },
    { avatar: '', name: 'Viet e' },
    { avatar: '', name: 'Viet Neam' },
    { avatar: '', name: 'Viet Nfam' },
    { avatar: '', name: 'Viet Nafm' },
  ];

  return (
    <div className={cx('sidebar')}>
      <h2 className={cx('title')}>Title</h2>
      <div className={cx('content')}>
        {fakeData.map((item, index) => {
          return (
            <div key={index} className={cx('content-item')}>
              <div className={cx('content-avatar')}>
                <Image src="" alt="" className={cx('image')} />
              </div>
              <h3 className={cx('content-title')}>{item.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
