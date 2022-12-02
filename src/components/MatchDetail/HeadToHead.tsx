import { ReactNode, useState, useRef } from 'react';
import HeadToHeadItem from './HeadToHeadItem';
import Image from '~/components/Image';

type Props = {
  data: {
    [key: string]: any;
  };
};

function HeadToHead({ data }: Props) {
  const checkRef = useRef(null);

  const renderItem = (value: any): ReactNode => {
    if (value.matchName === checkRef.current) {
      return <HeadToHeadItem data={value} />;
    } else {
      checkRef.current = value.matchName;
      return (
        <>
          <div className="flex items-center pb-2">
            <div>
              <Image src={value.image} alt="" className="w-6 h-6" />
            </div>
            <div className="flex-1 ml-2">
              <h4 className="text-base font-bold">{value.matchName}</h4>
              <p>{value.leagueName}</p>
            </div>
          </div>
          <HeadToHeadItem data={value} />
        </>
      );
    }
  };

  return (
    <>
      <div className="py-2">
        <h3 className="font-bold text-center text-md">Đầu đối đầu</h3>
      </div>
      <div>
        {data.map((item: any, index: number) => {
          return <div key={index}>{renderItem(item)}</div>;
        })}
      </div>
    </>
  );
}

export default HeadToHead;
