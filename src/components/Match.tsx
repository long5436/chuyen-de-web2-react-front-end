import { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import Image from '~/components/Image';
import ItemMatch from '~/components/ItemMatch';
import { Link } from 'react-router-dom';
import Api from '~/services';

type Data = Array<Object>;

function Match() {
  const [matches, setMatches] = useState<Data>([]);

  useEffect(() => {
    (async () => {
      const data = await Api.getMatchesToday();
      setMatches(data.data);
      // console.log(data.data);
    })();
  }, []);

  const getImageUrl = (value: string) => {
    return value ? `https://static.livescore.com/i2/fh/${value}.jpg` : '';
  };

  // https://static.livescore.com/i2/fh/uefa-women-s-champions-league.jpg

  return (
    <div className="w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="banner-content">
        <h2 className="text-center dark:text-gray-300 text-[16px] font-extrabold p-2 border-b dark:border-slate-700">
          Lịch thi đấu
        </h2>
        <div>
          {matches.length > 0 &&
            matches.map((item: any, index: number) => {
              return (
                <div key={index} className="group-content px-4 pt-4">
                  <div className="country-match flex m-3">
                    <Image src={getImageUrl(item.image)} alt="" className="w-8 h-8" />
                    <div className="ml-4">
                      <p className="match-name font-bold ">{item.leagueName}</p>
                      <p className="match-name text-xs">{item.countryName}</p>
                    </div>
                  </div>
                  <div>
                    {item.matches.length > 0 &&
                      item.matches.map((e: any) => {
                        return <ItemMatch key={e.leagueId} data={e} />;
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Match;
