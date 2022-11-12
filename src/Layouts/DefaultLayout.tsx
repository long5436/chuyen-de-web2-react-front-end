import { ReactNode } from 'react';
import Header from '~/components/Layouts/Header';
import Footer from '~/components/Layouts/Footer';
import Sidebar from '~/components/Layouts/Sidebar';
import FollowMatch from '~/components/FollowMatch';
type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className="dark:bg-slate-700 dark:text-gray-300 bg-slate-100">
      <Header />
      {/* body content*/}
      <div className="container mx-auto px-4">
        {/* <div className="grid grid-flow-col auto-cols-max justify-between gap-4 py-5"> */}
        <div className="flex justify-between gap-4 py-5">
          <div className="w-64">
            <Sidebar />
          </div>
          <div className="flex-1">{children}</div>
          <div className="w-80">
            <FollowMatch />
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
