import { useEffect } from 'react';
import Image from '~/components/Image';
import ItemMatch from '~/components/ItemMatch';
import Api from '~/services';
import { actions } from '~/reducers';
import { useStore } from '~/reducers';

function Match() {
  const [states, dispatch] = useStore();
  const { matchToday, followLeagueId } = states;

  const localFollowLeagueId: string = localStorage.followLeagueId
    ? localStorage.followLeagueId
    : '';

  // kiem tra neu co global state thi khong goi lai api
  useEffect(() => {
    // set gia tri id tran dau dang theo doi vao state
    dispatch(actions.setFollowLeagueId(localFollowLeagueId));

    if (matchToday.length <= 0) {
      async function callApi() {
        const data = await Api.getMatchesToday();
        dispatch(actions.setMatch(data.data));
      }

      callApi();
    }
  }, []);

  const getImageUrl = (value: string) => {
    return value ? `https://static.livescore.com/i2/fh/${value}.jpg` : '';
  };

  return (
    <div className="w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="banner-content">
        <h2 className="text-center dark:text-gray-300 text-[16px] font-extrabold p-2 border-b dark:border-slate-700">
          Lịch thi đấu
        </h2>
        <div>
          {matchToday.length > 0 &&
            matchToday.map((item: any, index: number) => {
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
