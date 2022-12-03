import Image from '~/components/Image';

type Props = {
  data: {
    [key: string]: any;
  };
};

function TableItem({ data }: Props) {
  //   console.log({ data });

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left">#</th>
          <th className="text-left"></th>
          <th className="text-left">Đội</th>
          <th className="text-left" title="Player">
            P
          </th>
          <th className="text-left" title="Win">
            W
          </th>
          <th className="text-left" title="Draw">
            D
          </th>
          <th className="text-left" title="Losses">
            L
          </th>
          <th className="text-left" title="Goals for">
            F
          </th>
          <th className="text-left" title="Goals against">
            A
          </th>
          <th className="text-left" title="Goals difference">
            GD
          </th>
          <th className="text-left" title="Points">
            PTS
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => {
          return (
            <tr key={item.ranking}>
              <td>{item.ranking}</td>
              <td>
                <div>
                  <Image src={item.image} alt="" className="w-5" />
                </div>
              </td>
              <td>
                <div className="">{item.name}</div>
              </td>
              <td className="">
                <div className="w-4">{item.player}</div>
              </td>
              <td className="">
                <div className="w-4">{item.win}</div>
              </td>
              <td className="">
                <div className="w-4">{item.draw}</div>
              </td>
              <td className="">
                <div className="w-4">{item.losses}</div>
              </td>
              <td className="">
                <div className="w-4">{item.goalsFor}</div>
              </td>
              <td className="">
                <div className="w-4">{item.goalsAgainst}</div>
              </td>
              <td className="">
                <div className="w-4">{item.goalsDifference}</div>
              </td>
              <td className="">
                <div className="w-4">{item.points}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableItem;
