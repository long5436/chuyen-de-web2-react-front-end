import { ReactNode } from 'react';
import classnames from 'classnames';

type Props = {
  matchDetail: {
    [key: string]: string;
  };
};

function FollowMatchInfo({ matchDetail }: Props) {
  const getTimeMatch = (value: string): string => {
    return `${value.substring(8, 10)}:${value.substring(10, 12)}`;
  };

  const renderScore = (value: any): ReactNode => {
    const winHome: number = value.homeTeam.win;
    const winAway: number = value.awayTeam.win;
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
    <div className="flex-1 text-center">
      <div className="inline-block bg-gray-200 dark:bg-white/10 rounded-lg py-1 px-2 text-center">
        <h2 className="text-3xl tracking-widest font-bold">{renderScore(matchDetail)}</h2>
      </div>
      {matchDetail.minute === 'NS' ? (
        <p className="datetime">{getTimeMatch(matchDetail.time.toString())}</p>
      ) : (
        <p className="datetime text-red-600">{matchDetail.minute}</p>
      )}
    </div>
  );
}

export default FollowMatchInfo;
