import Skeleton from 'react-loading-skeleton';

export default function ({ featured = false }) {
  return (
    <div data-testid="quoteSkeleton">
      <Skeleton className="text-xl mt-2" count={4} />
      {featured && (
        <div className="mt-12 w-4/12">
          <Skeleton className="text-lg" />
          <Skeleton className="text-xs" />
        </div>
      )}
    </div>
  )
}
