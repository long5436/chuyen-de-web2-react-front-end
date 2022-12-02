import { useState, useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import classnames from 'classnames';
import Image from '~/components/Image';
import FollowMatchTeam from '~/components/FollowMatchTeam';
import FollowMatchInfo from '~/components/FollowMatchInfo';
import Summary from '~/components/MatchDetail/Summary';
import Api from '~/services';

type MenuScrollItem = {
  name: string;
  id: number;
};
type dataMenuScroll = MenuScrollItem[];

function DetailMactch() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>(null);
  const dataMenuScroll: dataMenuScroll = [
    {
      name: 'Tóm tắt trận đấu',
      id: 1,
    },
  ];

  useEffect(() => {
    async function callApi() {
      if (id) {
        const response = await Api.getMatchDetail(id);
        // console.log(response.data.data);
        setDetailData(response.data.data);
      }
    }

    callApi();
  }, []);

  return (
    <>
      {detailData && (
        <>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Trận đấu giữa {detailData.detail.homeTeam.name} và {detailData.detail.awayTeam.name}
            </title>
          </Helmet>
          <div className="detail-match w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-3">
            <div className="country-match flex items-center">
              <Image src={detailData.image} alt="" className="w-10 h-10 m-2" />
              <div>
                <h3 className="font-bold text-lg">{detailData.matchName}</h3>
                <p>{detailData.leagueName}</p>
              </div>
            </div>
            <div className="flex justify-between p-4 rounded-md bg-slate-100 dark:bg-slate-800 dark:text-gray-300">
              <FollowMatchTeam data={detailData.detail.homeTeam} />
              <FollowMatchInfo matchDetail={detailData.detail} />
              <FollowMatchTeam data={detailData.detail.awayTeam} />
            </div>
            <div className="h-11 w-full font-bold cursor-pointer flex items-stretch overflow-x-auto overflow-y-hidden mt-3">
              {dataMenuScroll.map((item: MenuScrollItem, index: number) => {
                return (
                  <div key={index} className="grow-0 shrink-0 basis-auto mr-2 mb-1">
                    <div className="bg-gray-200/70 dark:bg-white/10 h-full flex items-center px-2 rounded hover:text-orange-400">
                      <span className="lin">{item.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <Summary data={detailData.summary} />
            {/* <table className="tab">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding </td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table> */}
          </div>
        </>
      )}
    </>
  );
}

export default DetailMactch;
