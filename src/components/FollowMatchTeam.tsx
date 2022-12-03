import Image from '~/components/Image';

type Props = {
  data: {
    [key: string]: string;
  };
};

function FollowMatchTeam({ data }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <Image key={data.image} src={data.image} alt="" className="w-12 mb-2" />
      <p className="text-center">{data.name}</p>
    </div>
  );
}

export default FollowMatchTeam;
