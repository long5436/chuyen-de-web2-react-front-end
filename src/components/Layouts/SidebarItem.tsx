import { useState, useEffect, useRef } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import Search from '~/components/Search';
import Image from '~/components/Image';
import { useStore, actions } from '~/reducers';
import { AxiosResponse } from 'axios';

import api from '~/services';

type Data = Array<Array<object>>;
type Props = {
  title: string;
  type: string;
};

function SidebarItem({ title, type }: Props) {
  const [state, dispatch] = useStore();
  const [data, setData] = useState<Data>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const backSidebar = (): void => {
    setData((prev) => prev.slice(0, prev.length - 1));
  };

  const changeSidebar = (item: any): void => {
    const slug: string = item?.slug || '';

    if (!item?.country_slug) {
      async function callApi() {
        let resData: AxiosResponse = await api.getMenuData(slug);
        setData((prev) => [...prev, resData.data]);
      }
      callApi();
    } else {
      console.log(item);
      // goi api va set du lieu vao state global
      async function callApi2() {
        const resData2 = await api.getMatchFromMenu(item?.slug);
        dispatch(actions.setMatch(resData2.data.data));
        dispatch(actions.changeDate(0));
      }

      callApi2();
    }
  };

  const handleSeach = (value: string) => {
    if (data.length > 0) {
      setSearchValue(value);
    }
  };

  useEffect(() => {
    (async () => {
      let data: AxiosResponse;
      if (type === 'country') {
        data = await api.getCountries();
      } else if (type === 'league') {
        data = await api.getLeagues();
      }

      const arrData: Array<object> = data.data;

      setData([arrData]);
    })();
  }, []);

  return (
    <>
      <div className="pointer-events-auto  max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 mb-4">
        <h2 className="text-md font-bold py-2.5 px-3.5 text-[15px] dark:text-gray-300 text-center mb-3  border-b border-gray-200 dark:border-slate-700">
          {title}
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
          <div>
            <Search callback={handleSeach} />
          </div>
        </div>

        <div className="border-t border-slate-400/20 py-3 px-3.5 h-52 overflow-y-auto">
          {data.length > 0 &&
            data[data.length - 1].map((item: any, index: number) => {
              if (item?.name?.toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                  <div
                    className="flex items-center rounded-md p-1.5 hover:bg-orange-400 hover:text-white hover:stroke-slate-100 cursor-pointer"
                    key={index}
                    onClick={() => changeSidebar(item)}
                  >
                    <Image src={item.image} alt="" className="w-5 mr-2" />
                    {item?.name}
                  </div>
                );
              }
            })}
        </div>
      </div>
    </>
  );
}

export default SidebarItem;
