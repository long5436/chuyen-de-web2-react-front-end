import { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import Image from '~/components/Image';
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
    return value ? 'https://lsm-static-prod.livescore.com/medium/' + value : '';
  };

  return (
    <div className="w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="banner-content">
        <h2 className="text-center dark:text-gray-300 text-[16px] font-extrabold p-2 border-b dark:border-gray-500">
          Lịch thi đấu
        </h2>
        {matches.length > 0 &&
          matches.map((item: any, index: number) => {
            return (
              <div key={index} className="group-content p-4 ">
                <div className="country-match flex m-3">
                  <Image src="" alt="" className="w-10 h-10" />
                  <div className="ml-4">
                    <p className="match-name font-bold ">{item.leagueName}</p>
                    <p className="match-name text-xs">{item.countryName}</p>
                  </div>
                </div>
                <div>
                  {item.matches.length > 0 &&
                    item.matches.map((e: any) => {
                      return (
                        <Link key={e.leagueId} to="/detail" className="">
                          <div className="match-top flex justify-between items-center bg-slate-100 rounded-md dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2 mb-3">
                            <div className="match-time w-1/12 pl-4 ">
                              <p className="font-extrabold"> 00:00</p>
                            </div>
                            <div className="match w-9/12 border-l-2 border-zinc-200">
                              <div className="item-team1 flex">
                                <div className="logo-image">
                                  <Image
                                    src={getImageUrl(e.homeTeam.image)}
                                    alt=""
                                    className="w-6 h-6 ml-2"
                                  />
                                </div>
                                <p className="mt-1 ml-2 w-11/12">{e.homeTeam.name}</p>
                                <div className="ret text-sm ">0</div>
                              </div>
                              <div className="item-team2 flex mt-1">
                                <div className="logo-image">
                                  <Image
                                    src={getImageUrl(e.awayTeam.image)}
                                    alt=""
                                    className="w-6 h-6 ml-2"
                                  />
                                </div>
                                <p className="mt-1 ml-2 ml-2 w-11/12">{e.awayTeam.name}</p>
                                <div className="ret text-sm ">0</div>
                              </div>
                            </div>
                            <div className="star hover:text-amber-400 ">
                              <AiOutlineStar className="icon text-2xl" />
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Match;
