import { ReactNode } from 'react';
import Header from '~/components/Layouts/Header';
import Footer from '~/components/Layouts/Footer';
import Sidebar from '~/components/Layouts/Sidebar';

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className="">
      <Header />
      {/* body content*/}
      <div className="container mx-auto px-4">
        <div className="grid grid-flow-col auto-cols-max gap-4 py-5">
          <div className="w-64">
            <Sidebar />
          </div>
          <div>{children}</div>
          <div></div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
