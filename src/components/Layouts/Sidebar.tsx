import { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Search from '~/components/Search';
import Image from '~/components/Image';
import { AxiosResponse } from 'axios';

import api from '~/services';

type Data = Array<Array<object>>;

function Sidebar() {
  // const [fakeData, setFakeData] = useState([
  //   [
  //     {
  //       avatar: '',
  //       name: 'Viet Nam',
  //       child: [
  //         { avatar: '', name: 'HCM' },
  //         { avatar: '', name: 'Viet e' },
  //       ],
  //     },
  //     { avatar: '', name: 'Viet e' },
  //     { avatar: '', name: 'Viet Neam' },
  //     { avatar: '', name: 'Viet Nfam' },
  //     { avatar: '', name: 'Viet Nafm' },
  //   ],
  //   [
  //     { avatar: '', name: 'HCM' },
  //     { avatar: '', name: 'Viet e' },
  //   ],
  // ])

  const [data, setData] = useState<Data>([]);

  // useEffect(() => {
  //   console.log(fakeData);
  // }, [fakeData]);

  const backSidebar = (): void => {
    // setFakeData((prev) => prev.slice(0, prev.length - 1));
  };

  const changeSidebar = (item: any): void => {
    console.log(item);
    if (!!item.child) {
      console.log(item.child);
      // setFakeData((prev) => [...prev, item.child]);
    }
  };

  const handleSeach = (value: string) => {
    if (data.length > 1) {
      const resultSeachData = data[data.length - 1].map((item: any) => {
        if (item.country_name.toLowerCase().includes(value.toLowerCase())) return item;
      });

      // console.log(resultSeachData);
    }
  };

  useEffect(() => {
    (async () => {
      const data: AxiosResponse = await api.getCountries();
      const arrData: Array<object> = data.data.rows;

      // setData((preData) => {
      //   const newState: Array<Array<Object>> = [...preData, arrData];
      //   return newState;
      // });

      setData([arrData]);
    })();
  }, []);

  return (
    <>
      <div className="pointer-events-auto  max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0">
        <h2 className="text-md font-bold py-2.5 px-3.5 dark:text-gray-300 text-center mb-3  border-b border-gray-200">
          Quốc gia
        </h2>
        <div className="flex h-10  px-3.5">
          {data.length > 1 && (
            <div
              className="flex items-center justify-center h-8 w-10 mr-2 cursor-pointer"
              onClick={backSidebar}
            >
              <BiArrowBack className="h-6 w-6" />
            </div>
          )}
          <Search callback={handleSeach} />
        </div>

        <div className="border-t border-slate-400/20 py-3 px-3.5 h-[calc(100vh_-_20rem)] overflow-y-auto">
          {data.length > 0 &&
            data[data.length - 1].map((item: any, index: number) => {
              return (
                <div
                  className="flex items-center rounded-md p-1.5 hover:bg-indigo-600 hover:text-white hover:stroke-slate-100 cursor-pointer"
                  key={index}
                  onClick={() => changeSidebar(item)}
                >
                  <Image src={item.image_url} alt="" className="h-5 w-5 mr-2" />
                  {item.country_name}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
