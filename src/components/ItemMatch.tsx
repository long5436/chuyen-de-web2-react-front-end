import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Team from '~/components/Team';
import Notify from '~/components/Notify';
import { actions } from '~/reducers';
import { useStore } from '~/reducers';

type Props = {
  data: {
    [key: string]: any;
  };
};

function ItemMatch({ data }: Props) {
  const [showNoty, setShowNoty] = useState<boolean>(false);
  const [textNoty, setTextNoty] = useState<string>('');
  const [states, dispatch] = useStore();
  const { followLeagueId } = states;

  const getTimeMatch = (value: string): string => {
    return `${value.substring(8, 10)}:${value.substring(10, 12)}`;
  };

  const handleClickFollow = (idLeague: string): void => {
    if (idLeague === followLeagueId) {
      dispatch(actions.setFollowLeagueId(''));
      localStorage.followLeagueId = '';
      setTextNoty(`Đã hủy bỏ theo dõi trận đấu ${data.homeTeam.name} vs ${data.awayTeam.name}`);
      setShowNoty(true);
      setTimeout(() => {
        setShowNoty(false);
      }, 3000);
    } else {
      dispatch(actions.setFollowLeagueId(idLeague));
      localStorage.followLeagueId = idLeague;
      setTextNoty(`Đã theo dõi trận đấu ${data.homeTeam.name} vs ${data.awayTeam.name}`);
      setShowNoty(true);
      setTimeout(() => {
        setShowNoty(false);
      }, 3000);
    }
  };

  return (
    <>
      <Link to={`/detail/${data.leagueId}`} className="">
        <div className="flex justify-between items-center border dark:border-slate-700 bg-slate-100 rounded-md dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 ring-0 p-2 mb-3 hover:bg-slate-200 dark:hover:bg-slate-800">
          <div className="w-10 mr-2 text-center">
            {data.minute === 'NS' ? (
              <p className="font-medium text-gray-400"> {getTimeMatch(data.time.toString())}</p>
            ) : (
              <p className="font-medium text-red-600"> {data.minute}</p>
            )}
          </div>
          <div className="flex-1 border-l-2 border-r-2 border-zinc-200 dark:border-slate-700 px-4">
            <Team data={data.homeTeam} showWin={data.minute !== 'NS'} />
            <Team data={data.awayTeam} showWin={data.minute !== 'NS'} />
          </div>
          <div className="pl-2">
            <div
              className="hover:bg-blue-200 p-1 rounded-md"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleClickFollow(data.leagueId);
              }}
            >
              {followLeagueId === data.leagueId ? (
                <>
                  {showNoty && <Notify text={textNoty} />}
                  <AiFillStar className="text-2xl text-blue-500" />
                </>
              ) : (
                <>
                  {showNoty && <Notify text={textNoty} />}
                  <AiOutlineStar className="text-2xl text-blue-500" />
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ItemMatch;
