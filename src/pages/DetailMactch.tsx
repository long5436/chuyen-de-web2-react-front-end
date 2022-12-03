import { useState, useEffect, ReactNode, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import classnames from 'classnames';
import Image from '~/components/Image';
import FollowMatchTeam from '~/components/FollowMatchTeam';
import FollowMatchInfo from '~/components/FollowMatchInfo';
import Summary from '~/components/MatchDetail/Summary';
import HeadToHead from '~/components/MatchDetail/HeadToHead';
import Table from '~/components/MatchDetail/Table';
import Api from '~/services';

type MenuScrollItem = {
  name: string;
  id: number;
};
type dataMenuScroll = MenuScrollItem[];

function DetailMactch() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<any>(null);
  const [selectedMenuScroll, setSelectedMenuScroll] = useState<number>(0);
  const dataMenuScroll: dataMenuScroll = [
    {
      name: 'Tóm tắt trận đấu',
      id: 0,
    },
    {
      name: 'Bảng',
      id: 1,
    },
    {
      name: 'Đầu đối đầu',
      id: 2,
    },
  ];

  useEffect(() => {
    async function callApi() {
      if (id) {
        const response = await Api.getMatchDetail(id);
        setDetailData(response.data.data);
      }
    }

    callApi();
  }, []);

  const renderItem = (data: any): ReactNode => {
    switch (selectedMenuScroll) {
      case 0:
        return data.summary ? <Summary data={data.summary} /> : <Fragment />;

      case 1:
        return data.table ? <Table data={data.table} /> : <Fragment />;

      case 2:
        return data.headToHead ? <HeadToHead data={data.headToHead} /> : <Fragment />;

      default:
        return <Fragment />;
    }
  };

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
              <Image src={detailData.image} alt="" className="w-10 m-2" />
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
                const classes: string =
                  'grow-0 shrink-0 basis-auto mr-2 mb-1 ' +
                  classnames({ 'text-orange-400': selectedMenuScroll === item.id });

                return (
                  <div
                    key={index}
                    className={classes}
                    onClick={() => setSelectedMenuScroll(item.id)}
                  >
                    <div className="bg-gray-200/70 dark:bg-white/10 h-6 flex items-center px-2 hover:text-orange-400 rounded-full">
                      <span className="lin">{item.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            {renderItem(detailData)}
          </div>
        </>
      )}
    </>
  );
}

export default DetailMactch;
