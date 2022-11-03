import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import SearchSidebar from '~/components/SearchSidebar';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  const [fakeData, setFakeData] = useState([
    [
      {
        avatar: '',
        name: 'Viet Nam',
        child: [
          { avatar: '', name: 'HCM' },
          { avatar: '', name: 'Viet e' },
        ],
      },
      { avatar: '', name: 'Viet e' },
      { avatar: '', name: 'Viet Neam' },
      { avatar: '', name: 'Viet Nfam' },
      { avatar: '', name: 'Viet Nafm' },
    ],
    [
      { avatar: '', name: 'HCM' },
      { avatar: '', name: 'Viet e' },
    ],
  ]);

  useEffect(() => {
    console.log(fakeData);
  }, [fakeData]);

  const backSidebar = () => {
    setFakeData((prev) => prev.slice(0, prev.length - 1));
  };

  const changeSidebar = (item) => {
    console.log(item);
    if (!!item.child) {
      console.log(item.child);
      // setFakeData(fakeData.concat(item.child));
      setFakeData((prev) => [...prev, item.child]);
    }
  };

  return (
    <div className={cx('sidebar')}>
      <h2 className={cx('title')}>Title</h2>
      <div className={cx('actions')}>
        {fakeData.length > 1 && (
          <button className={cx('btn-back')} onClick={backSidebar}>
            <BiArrowBack className={cx('icon')} />
          </button>
        )}
        <SearchSidebar />
      </div>

      <div className={cx('content')}>
        {fakeData[fakeData.length - 1].map((item, index) => {
          return (
            <div key={index} className={cx('content-item')} onClick={() => changeSidebar(item)}>
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
