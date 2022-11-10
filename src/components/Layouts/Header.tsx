import { FiSearch } from 'react-icons/fi';
import { Input } from 'antd';

function Header() {
  return (
    <header className="h-14 border-b border-gray-200">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-col-3 grid-flow-col gap-4 h-full items-center">
          <div>01</div>
          <div className="">
            <form className="w-80 h-9 mx-auto flex border border-gray-300 rounded-md">
              <div className="h-9 flex">
                <FiSearch className="my-auto mx-2 text-2xl text-gray-500" />
              </div>
              <Input
                className="flex-1 outline-none border-none bg-transparent pl-0 hover:border-none"
                placeholder="Tìm kiếm"
              />
            </form>
          </div>
          <div>09</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
