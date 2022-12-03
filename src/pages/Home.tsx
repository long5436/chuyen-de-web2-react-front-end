import { Helmet } from 'react-helmet-async';
import Match from '~/components/Match';
import Detailtopscore from './detailtopscore';

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lịch thi đấu bóng đá hôm nay</title>
      </Helmet>
      <Match />
    </>
  );
}

export default Home;
