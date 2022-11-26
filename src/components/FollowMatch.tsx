import { useEffect, useState, ReactNode } from 'react';
import classnames from 'classnames';
import Image from '~/components/Image';
import { useStore, actions } from '~/reducers';
import Api from '~/services';

function FollowMatch() {
  const [state, dispatch] = useStore();
  const [leagueDetail, setLeagueDatail] = useState<any>(null);
  const { followLeagueId } = state;

  useEffect(() => {
    if (followLeagueId) {
      async function callApi() {
        const response = await Api.getMatchDetail(followLeagueId);
        setLeagueDatail(response.data.data);
        console.log(response.data.data);
      }
      callApi();
    } else {
      setLeagueDatail(null);
    }
  }, [followLeagueId]);

  const getTimeMatch = (value: string): string => {
    return `${value.substring(8, 10)}:${value.substring(10, 12)}`;
  };

  const renderScore = (value: any): ReactNode => {
    const winHome: number = value.detail.homeTeam.win;
    const winAway: number = value.detail.awayTeam.win;
    const checkClassHightlight: number = winHome - winAway;

    return (
      <>
        <span className={classnames({ 'text-orange-500': checkClassHightlight > 0 })}>
          {winHome || 0}
        </span>
        :
        <span className={classnames({ 'text-orange-500': checkClassHightlight < 0 })}>
          {winAway || 0}
        </span>
      </>
    );
  };

  return (
    leagueDetail && (
      <div className="max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-4">
        <h2 className="text-md text-[15px] pb-2 font-bold dark:text-gray-300 text-center mb-3  border-b border-gray-200 dark:border-gray-500">
          Trận đấu đang theo dõi
        </h2>

        <div className="text-center">
          <h4 className="text-lg font-medium dark:text-gray-300">{leagueDetail.leagueName}</h4>
          <p className="title-group">{leagueDetail.matchName}</p>
        </div>
        <div className="flex justify-between mt-5">
          <div className="">
            <Image
              key={leagueDetail.detail.homeTeam.image}
              src={leagueDetail.detail.homeTeam.image}
              alt=""
              className="w-12 h-12"
            />
            <p className="">{leagueDetail.detail.homeTeam.name}</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl tracking-widest font-bold">{renderScore(leagueDetail)}</h2>
            {leagueDetail.detail.minute === 'NS' ? (
              <p className="datetime">{getTimeMatch(leagueDetail.detail.time.toString())}</p>
            ) : (
              <p className="datetime text-red-600">{leagueDetail.detail.minute}</p>
            )}
          </div>
          <div className="">
            <Image
              key={leagueDetail.detail.awayTeam.image}
              src={leagueDetail.detail.awayTeam.image}
              alt=""
              className="w-12 h-12"
            />
            <p className="">{leagueDetail.detail.awayTeam.name}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default FollowMatch;
