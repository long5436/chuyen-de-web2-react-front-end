import classname from 'classnames';
import Sidebar from '~/components/Layouts/Sidebar';

type Props = {
  checkEnable: boolean;
};

function MobileSidebar({ checkEnable }: Props) {
  const classes: string =
    'mobile-menu fixed top-0 left-0 w-60 h-full bg-orange-400 ' +
    classname({ 'open-mobile-menu': checkEnable });

  return checkEnable ? (
    <div className={classes}>
      <Sidebar />
    </div>
  ) : (
    <></>
  );
}

export default MobileSidebar;
