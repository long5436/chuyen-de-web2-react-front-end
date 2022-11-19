import Image from '~/components/Image';

function Uncle() {
  return (
    <div className="uncle-list w-200  mt-5 max-w-sm rounded-lg bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-4">
      <p className="text-center font-extrabold text-[15px] p-2  border-b border-gray-200 dark:border-gray-500">
        Cậu thủ xuất sắc
      </p>
      <div className="unncle border-b border-gray-200">
        <div className="row flex">
          <div className="col-md-4">
            <Image src="" alt="" className="w-15 h-20 mr-4 m-2" />
          </div>
          <div className="col-md-8">
            <div className="Uncle-name">
              <h4>Karim Benzema</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="unncle border-b border-gray-200">
        <div className="row flex">
          <div className="col-md-4">
            <Image src="" alt="" className="w-15 h-20 mr-4 m-2" />
          </div>
          <div className="col-md-8">
            <div className="Uncle-name">
              <h4>Karim Benzema</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uncle;
