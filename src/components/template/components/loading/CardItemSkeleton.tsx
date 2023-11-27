import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAppData from '../../../data/hook/useAppData';

const CardItemSkeleton = () => {
  const { tema } = useAppData();

  return (
    <SkeletonTheme baseColor={tema === 'dark' ? '#232a38' : '#d3d3d3'} highlightColor={tema === 'dark' ? '#2f384a' : '#c9c9c9'}>
      <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-4 flex flex-col justify-center basis-[240px] flex-grow text-gray-50 shadow-md">
        <div className="flex flex-row justify-end items-center">
          <div className="flex-1 mr-5">
            <Skeleton />
          </div>
          <div>
            <Skeleton width={30} height={30}/>
          </div>
        </div>
        <div className="">
          <Skeleton width={70}/>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CardItemSkeleton;
