import Image from '~/components/Image';

function DetailMactch() {
  return (
    <div className="detail-match w-full rounded-md  bg-white dark:bg-slate-800/25 text-[0.8125rem] leading-5 text-slate-700 dark:text-gray-300 shadow-xl shadow-black/5 ring-0 p-2">
      <div className="country-match flex m-3">
        <Image src="" alt="" className="w-10 h-10" />
        <p className="match-name font-bold m-2 ">Name country</p>
      </div>
      <div className="flex px-20 justify-between m-5 bg-slate-200 p-4 rounded-md dark:bg-slate-800/25 dark:text-gray-300 shadow-xl">
        <div className="">
          <Image src="" alt="" className="w-12 h-12" />
          <p className="">Barcelona</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl tracking-widest font-bold">
            <span className="text-orange-500">2</span>:0
          </h2>
          <p className="datetime">19:30</p>
        </div>
        <div className="">
          <Image src="" alt="" className="w-12 h-12" />
          <p className="">Barcelona</p>
        </div>
      </div>
      {/* <table className="tab">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding </td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default DetailMactch;
