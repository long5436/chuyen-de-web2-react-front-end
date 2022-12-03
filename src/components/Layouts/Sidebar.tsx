import SideBarItem from '~/components/Layouts/SidebarItem';

function Sidebar() {
  return (
    <>
      <SideBarItem title="Giải đấu" type="league" />
      <SideBarItem title="Quốc gia" type="country" />
    </>
  );
}

export default Sidebar;
