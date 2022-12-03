import React from 'react';
import { useParams } from 'react-router-dom';
import Uncle from '~/components/Uncle';
import Api from '~/services';
import Image from '~/components/Image';

const Detailtopscore = () => {
  const [data, setData] = React.useState<any>({});
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      if (id) {
        const resData = await Api.getTopscoreDetail(id);
        setData(resData.data.data[0]);
        console.log(resData.data.data[0]);
      }
    })();
  }, []);

  return (
    <div className="detailtop  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <h2 className="text-center text-[15px] p-2 font-black border-b border-gray-200 dark:border-gray-700">
        Thông tin cậu thủ
      </h2>

      <div className="player bg-slate-100 flex border-b border-gray-200 dark:border-gray-700">
        <Image
          src={data.image_path}
          alt=""
          key={data.image_path}
          className="w-44 h-44 mr-4 m-4 rounded-full border border-indigo-600 p-0.8"
        />

        <p className="mt-20 ml-10 text-3xl font-black ">{data.common_name}</p>
      </div>
      <div className="detailplayer">
        <div className="flex text-base mt-7">
          <p className="ml-4  font-black">Quốc Tịch:</p>
          <p className="ml-4">{data.nationality}</p>
        </div>
        <div className="flex text-base mt-7">
          <p className="ml-4  font-black">Nơi Sinh:</p>
          <p className="ml-4">{data.birthcountry}</p>
        </div>
        <div className="flex text-base mt-7">
          <p className="ml-4  font-black">Chiều cao:</p>
          <p className="ml-4">{data.height}</p>
        </div>
        <div className="flex text-base mt-7">
          <p className="ml-4  font-black">Cân nặng:</p>
          <p className="ml-4">{data.weight}</p>
        </div>
        <div className="flex text-base mt-7">
          <p className="ml-4  font-black">Ngày Sinh:</p>
          <p className="ml-4">{data.birthdate}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailtopscore;
