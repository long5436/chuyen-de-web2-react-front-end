import { ReactNode } from 'react';
import Header from '~/components/Layouts/Header';

type Props = {
  children: ReactNode;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className="">
      <Header />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
}

export default DefaultLayout;
