import Image from '~/components/Image';

function FollowMatch() {
  return (
    <div className="max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-4">
      <h2 className="text-md text-[15px] pb-2 font-bold dark:text-gray-300 text-center mb-3  border-b border-gray-200 dark:border-gray-500">
        Trận đấu đang theo dõi
      </h2>

      <div className="text-center">
        <h4 className="text-lg font-medium dark:text-gray-300">English Premier League</h4>
        <p className="title-group">Match group F</p>
      </div>
      <div className="flex justify-between mt-5">
        <div className="">
          <Image src="" alt="" className="w-12 h-12" />
          <p className="">Barcelona</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl tracking-widest font-bold">
            <span className="text-orange-500">2</span>:0
          </h2>
          <p className="datetime">19:30</p>
        </div>
        <div className="">
          <Image src="" alt="" className="w-12 h-12" />
          <p className="">Barcelona</p>
        </div>
      </div>
    </div>
  );
}

export default FollowMatch;
