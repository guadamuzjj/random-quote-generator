import Skeleton from 'react-loading-skeleton';
import QuoteSkeleton from './quote';

const Quote = () => (
  <div className="mt-6">
    <QuoteSkeleton />
  </div>
);

export default function () {
  return (
    <div data-testid="quoteListSkeleton">
      <div className="w-1/5">
        <Skeleton className="text-3xl" />
      </div>
      <div className="mt-12 text-sm">
        <Quote />
        <Quote />
        <Quote />
        <Quote />
        <Quote />
      </div>
    </div>
  )
}
