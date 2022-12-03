import classNames from 'classnames';
import Image from '~/components/Image';
import ItemMatch from '~/components/ItemMatch';
import { useStore, actions } from '~/reducers';

function Match() {
  const [states, dispatch] = useStore();
  const { matchToday, searchMatch } = states;

  return (
    <div className="w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="banner-content">
        <h2 className="text-center dark:text-gray-300 text-[16px] font-extrabold p-2 border-b dark:border-slate-700">
          Lịch thi đấu
        </h2>
        <div>
          {matchToday.length > 0 &&
            matchToday.map((item: any, index: number) => {
              const classes: string = 'group-content ' + classNames({ 'pt-4': !searchMatch });
              return (
                <div key={index} className={classes}>
                  {!searchMatch && (
                    <div className="country-match flex m-3">
                      <div className="flex">
                        <Image src={item.image} alt="" className="w-8 my-auto" />
                      </div>
                      <div className="ml-4">
                        <p className="match-name font-bold ">{item.leagueName}</p>
                        <p className="match-name text-xs">{item.countryName}</p>
                      </div>
                    </div>
                  )}
                  <div>
                    {item.matches.length > 0 &&
                      item.matches.map((e: any) => {
                        if (
                          e.homeTeam.name.toLowerCase().includes(searchMatch) ||
                          e.awayTeam.name.toLowerCase().includes(searchMatch)
                        )
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
