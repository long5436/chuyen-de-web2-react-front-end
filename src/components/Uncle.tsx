import { useEffect } from 'react';
import Image from '~/components/Image';
import api from '~/services';
import { useStore, actions } from '~/reducers';
import { Link } from 'react-router-dom';

function Uncle() {
  const [states, dispatch] = useStore();
  const { topScoreData } = states;

  useEffect(() => {
    (async () => {
      const resData = await api.getTopscore(17141);
      console.log(resData.data);
      dispatch(actions.addTopScore(resData.data.data));
    })();
  }, []);

  return (
    <div className="uncle-list w-200  mt-5 max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-4">
      <p className="text-center font-extrabold text-[15px] p-2  border-b border-gray-200 dark:border-gray-700">
        Cậu thủ xuất sắc
      </p>
      <div className="unncle border-b border-gray-200 dark:border-gray-700">
        {topScoreData.map((item: any, index: number) => {
          return (
            <Link to={`/player/${item.player_id}`}>
              <div
                className="row flex mt-1 border-b border-gray-200 dark:border-gray-700"
                key={index}
              >
                <div className="col-md-4 mb-5 flex">
                  <div className="w-15 h-16  ">
                    <Image
                      src={item.player.image_path}
                      alt=""
                      className="w-15 h-16 mr-4 m-3 rounded-full border border-indigo-600 p-0.8"
                    />
                  </div>

                  <Image
                    src={item.team.logo_path}
                    alt=""
                    className="w-5 h-5 mr-10 m-2 rounded-full absolute ml-14 mt-14 border border-gray-400"
                  />
                </div>

                <div className="col-md-8 ml-2">
                  <div className="Uncle-name text-sm">
                    <h3 className="mt-6 text-sm font-black">{item.player.common_name}</h3>
                    <h5 className="mt-2 text-sm ">{item.team.name}</h5>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Uncle;
