import { FiSearch } from 'react-icons/fi';

type Props = {
  className?: string;
};

function Seach({ className }: Props) {
  const classes = 'bg-white relative pointer-events-auto dark:bg-slate-800/25' + ' ' + className;
  return (
    <div className={classes}>
      <button
        type="button"
        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-0 shadow-sm py-1.5 pl-2 pr-3 dark:bg-slate-700"
      >
        <FiSearch className="mr-3 flex-none text-xl cursor-default" />

        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="flex-1 h-5 w-full border-none focus:ring-0 px-0 dark:bg-slate-700 dark:text-gray-300"
        />
      </button>
    </div>
  );
}

export default Seach;
