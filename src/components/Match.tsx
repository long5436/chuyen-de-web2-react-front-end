import { AiOutlineStar } from 'react-icons/ai';
import Image from '~/components/Image';

function Match() {
  return (
    <div className="w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="banner-content">
        <h2 className="text-center text-[16px] font-extrabold p-2 border-b border-gray-200 dark:border-gray-400">
          Match Schedule
        </h2>
        <div className="group-content p-4 ">
          <div className="country-match flex m-3">
            <Image src="" alt="" className="w-10 h-10" />
            <p className="match-name font-bold m-2 ">Name country</p>
          </div>
          <a href="" className="">
            <div className="match-top flex justify-between items-center bg-slate-100 rounded-md dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
              {/* <div className="match-time">
              <p>00:00</p>
            </div> */}
              <div className="match ml-5 w-80">
                <div className="item-team1 flex">
                  <div className="logo-image">
                    <Image src="" alt="" className="w-6 h-6" />
                  </div>
                  <p className="mt-1 ml-2">Đội A</p>
                </div>
                <div className="item-team2 flex mt-1">
                  <div className="logo-image">
                    <Image src="" alt="" className="w-6 h-6" />
                  </div>
                  <p className="mt-1 ml-2">Đội B</p>
                </div>
              </div>
              <div className="star ">
                <AiOutlineStar className="icon text-2xl" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Match;
