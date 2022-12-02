import Team from '~/components/Team';

type Props = {
  data: {
    [key: string]: any;
  };
};

function HeadToHeadItem({ data }: Props) {
  const getTimeMatch = (value: string): string => {
    return `${value.substring(0, 4)}`;
  };

  return (
    <div className="">
      <div className="flex justify-between items-center border dark:border-slate-700 bg-slate-100 rounded-md dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 ring-0 p-2 mb-3 hover:bg-slate-200 dark:hover:bg-slate-800">
        <div className="w-10 mr-2 text-center">
          <p className="font-medium"> {getTimeMatch(data.time.toString())}</p>
          <p className="font-medium"> {data.minute}</p>
        </div>
        <div className="flex-1 px-4">
          <Team data={data.homeTeam} showWin />
          <Team data={data.awayTeam} showWin />
        </div>
        <div className="pl-2"></div>
      </div>
    </div>
  );
}

export default HeadToHeadItem;
