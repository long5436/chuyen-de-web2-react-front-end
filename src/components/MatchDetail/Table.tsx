import { useState } from 'react';
import classnames from 'classnames';
import TableItem from './TableItem';

type Props = {
  data: {
    [key: string]: any;
  };
};

function Table({ data }: Props) {
  const [seletedMenu, setSelectedMenu] = useState<number>(0);

  const menuTable = [
    { name: 'Tất cả', id: 0 },
    { name: 'Đội nhà', id: 1 },
    { name: 'Đội khách', id: 2 },
  ];

  return (
    <div className="py-2">
      <h3 className="font-bold text-center text-md">Bảng</h3>

      {data[0].length > 1 && (
        <div className="h-11 w-full font-bold cursor-pointer flex items-stretch overflow-x-auto overflow-y-hidden mt-3">
          {menuTable.map((item: any, index: number) => {
            const classes: string =
              'grow-0 shrink-0 basis-auto mr-2 mb-1 ' +
              classnames({ 'text-orange-400': seletedMenu === item.id });

            return (
              <div className={classes} key={index} onClick={() => setSelectedMenu(item.id)}>
                <div className="bg-gray-200/70 dark:bg-white/10 h-6 flex items-center px-2 hover:text-orange-400 rounded-full">
                  <span className="lin">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div>
        {data[0].map((item: any, index: number) => {
          return (
            index === seletedMenu && (
              <div key={index}>
                <TableItem data={item} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Table;
