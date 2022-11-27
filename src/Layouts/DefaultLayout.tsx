import { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import Header from '~/components/Layouts/Header';
import Footer from '~/components/Layouts/Footer';
import Sidebar from '~/components/Layouts/Sidebar';
import MobileSidebar from '~/components/Layouts/MobileSidebar';
import FollowMatch from '~/components/FollowMatch';
import Uncle from '~/components/Uncle';
import { useStore } from '~/reducers';

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  const [state, dispatch] = useStore();
  const { enableMobileMenu } = state;

  const classes =
    'app-layout dark:bg-gray-900 dark:text-gray-300 bg-slate-100 ' +
    classNames({ 'app-layout-op': enableMobileMenu });

  return (
    <div className="overflow-hidden">
      <div className={classes}>
        <Header />
        {/* body content*/}
        <div className="container mx-auto px-4 pt-14">
          {/* <div className="grid grid-flow-col auto-cols-max justify-between gap-4 py-5"> */}
          <div className="flex justify-between gap-4 py-5">
            <div className="hidden lg:block w-64">
              <Sidebar />
            </div>
            <div className="flex-1">
              <div>{children}</div>
            </div>
            <div className="w-80">
              <FollowMatch />
              <Uncle />
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
      </div>
      <MobileSidebar checkEnable={enableMobileMenu} />
    </div>
  );
}

export default DefaultLayout;
