type Props = {
  text: string;
};

function Notify({ text }: Props) {
  return (
    <div className="fixed top-3 right-1/2 translate-x-1/2 z-10 text-center py-4 lg:px-4 ">
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex shadow-2xl shadow-slate-800 animate-bounce"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          New
        </span>
        <span className="font-semibold mr-2 text-left flex-auto">{text}</span>
      </div>
    </div>
  );
}

export default Notify;
