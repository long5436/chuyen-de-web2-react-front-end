import Search from '~/components/Search';

function Header() {
  return (
    <header className="h-14 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-col-3 grid-flow-col gap-0 h-full items-center">
          <div>
            <h2 className="text-lg">Football</h2>
          </div>
          <div className="text-center">
            <div className="max-w-xs m-auto">
              <Search />
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-end">
              <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Chế độ tối
              </span>
              <label
                htmlFor="default-toggle"
                className="inline-flex relative items-center cursor-pointer"
              >
                <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
