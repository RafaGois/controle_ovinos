import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAppData from '../../../data/hook/useAppData';

interface SquareSkeletonProps {
    height: number,
}

export default function SquareSkeleton (props: SquareSkeletonProps) {
    const {tema} = useAppData();

    return (
        <SkeletonTheme baseColor={tema === 'dark' ? '#232a38' : '#d3d3d3'} highlightColor={tema === 'dark' ? '#2f384a' : '#c9c9c9'}>
            <div>
                <Skeleton height={props.height} />
            </div>
        </SkeletonTheme>
    )
}