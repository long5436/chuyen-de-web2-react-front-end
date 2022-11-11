import { FiSearch } from 'react-icons/fi';

type Props = {
  className?: string;
};

function Seach({ className }: Props) {
  const classes = 'bg-white dark:bg-slate-900 relative pointer-events-auto ' + className;
  return (
    <div className={classes}>
      <button
        type="button"
        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
      >
        <FiSearch className="mr-3 flex-none text-xl" />

        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="flex-1 h-5 w-full border-none focus:ring-0 px-0"
        />
      </button>
    </div>
  );
}

export default Seach;
