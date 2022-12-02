import { ReactNode } from 'react';

type Props = {
  data: any;
};

function Summary({ data }: Props) {
  const getScore = (value: any): string => {
    if (!!value) {
      return value[0] + ' - ' + value[1];
    }
    return '';
  };

  const getMinute = (value: string): string => {
    if (value === 'FT' || value === 'HT') {
      return value;
    }
    return `${value}'`;
  };

  const renderItemPlayer = (value: any): ReactNode => {
    if (!!value.player) {
      return <span>{value.player}</span>;
    } else if (!!value.players) {
      return (
        <div className="flex flex-col">
          <span>{value?.players.player1}</span>
          <span>{value?.players.player2}</span>
        </div>
      );
    } else return <></>;
  };

  return (
    <div className="py-2">
      <h3 className="font-bold text-center text-md">Bản tóm tắt trận đấu</h3>
      <div>
        {data.map((item: any, index: number) => {
          return (
            <div className="flex py-2 border-b border-gray-200 dark:border-white/10" key={index}>
              <div className="">
                <span>{getMinute(item.minute)}</span>
              </div>
              <div className="flex-1">
                <div className=" flex justify-center items-center">
                  <div className="flex-1 text-right">
                    {item.nowValue === 1 && renderItemPlayer(item)}
                  </div>
                  <div className="w-32 text-center">
                    <span>{getScore(item?.score)}</span>
                  </div>
                  <div className="flex-1"> {item.nowValue === 2 && renderItemPlayer(item)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Summary;
