import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import { AiOutlineStar } from 'react-icons/ai';

type Props = {
  data: {
    [key: string]: any;
  };
};

function ItemMatch({ data }: Props) {
  const getImageUrl = (value: string): string => {
    return value ? 'https://lsm-static-prod.livescore.com/medium/' + value : '';
  };

  const getTimeMatch = (value: string): string => {
    return `${value.substring(8, 10)}:${value.substring(10, 12)}`;
  };

  return (
    <Link to="/detail" className="">
      <div className="flex justify-between items-center border dark:border-slate-700 bg-slate-100 rounded-lg dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 ring-0 p-2 mb-3 hover:bg-slate-200 dark:hover:bg-slate-800">
        <div className="w-10 mr-2">
          <p className="font-extrabold text-gray-400"> {getTimeMatch(data.time.toString())}</p>
        </div>
        <div className="flex-1 border-l-2 border-r-2 border-zinc-200 dark:border-slate-700 px-4">
          <div className="item-team1 flex">
            <div className="">
              <Image src={getImageUrl(data.homeTeam.image)} alt="" className="w-6 h-6" />
            </div>
            <p className="mt-1 ml-2 w-11/12">{data.homeTeam.name}</p>
            <div className="ret text-sm text-red-500">{data.homeTeam.win}</div>
          </div>
          <div className="item-team2 flex mt-1">
            <div className="">
              <Image src={getImageUrl(data.awayTeam.image)} alt="" className="w-6 h-6" />
            </div>
            <p className="mt-1 ml-2 w-11/12">{data.awayTeam.name}</p>
            <div className="ret text-sm text-red-500">{data.awayTeam.win}</div>
          </div>
        </div>
        <div className="pl-2">
          <div className="hover:bg-blue-200 p-1 rounded-md">
            <AiOutlineStar className="text-2xl text-blue-500" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemMatch;
