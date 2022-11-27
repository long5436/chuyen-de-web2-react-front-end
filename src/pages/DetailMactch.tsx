import { useState, useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import classnames from 'classnames';
import Image from '~/components/Image';
import FollowMatchTeam from '~/components/FollowMatchTeam';
import FollowMatchInfo from '~/components/FollowMatchInfo';
import Api from '~/services';

function DetailMactch() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>(null);

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
          <div className="detail-match w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
            <div className="country-match flex items-center m-3">
              <Image src={detailData.image} alt="" className="w-10 h-10 m-2" />
              <div>
                <h3 className="font-bold text-lg">{detailData.matchName}</h3>
                <p>{detailData.leagueName}</p>
              </div>
            </div>
            <div className="flex px-20 justify-between m-5 bg-slate-200 p-4 rounded-md dark:bg-slate-800/25 dark:text-gray-300 shadow-xl">
              <FollowMatchTeam data={detailData.detail.homeTeam} />
              <FollowMatchInfo matchDetail={detailData.detail} />
              <FollowMatchTeam data={detailData.detail.awayTeam} />
            </div>
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
