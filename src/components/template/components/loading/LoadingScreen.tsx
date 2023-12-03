import CardItemSkeleton from './CardItemSkeleton';
import RectangleSkeleton from './RectangleSkeleton';
import SquareSkeleton from './SquareSkeleton';

import styles from '../../../../styles/LoadingScreen.module.css';

export default function LoadingScreen() {
  return (
    <div className={`${styles.cards} mt-6`}>
      <div className={`${styles.card} flex justify-evenly mb-1`}>
        <div className="w-1/3">
          <RectangleSkeleton height={25} />
        </div>
        <div className="w-1/3">
          <RectangleSkeleton height={25} />
        </div>
      </div>
      <div className={`${styles.card} flex flex-wrap gap-2`}>
        <CardItemSkeleton />
        <CardItemSkeleton />
        <CardItemSkeleton />
        <CardItemSkeleton />
      </div>
      <div className={`${styles.card} flex flex-wrap gap-2`}>
        <CardItemSkeleton />
        <CardItemSkeleton />
        <CardItemSkeleton />
        <CardItemSkeleton />
      </div>
      <div className={`${styles.card} card bg-gray-200 dark:bg-gray-700`}>
        <SquareSkeleton height={120} />
      </div>
      <div className={`${styles.card} card bg-gray-200 dark:bg-gray-700`}>
        <SquareSkeleton height={120} />
      </div>
      <div className={`${styles.card} card bg-gray-200 dark:bg-gray-700`}>
        <RectangleSkeleton height={120} />
      </div>
      <div className={`${styles.card} card bg-gray-200 dark:bg-gray-700`}>
        <RectangleSkeleton height={120} />
      </div>
    </div>
  );
}
