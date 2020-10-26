import Link from 'next/link';
import ArrowRightIcon from './icons/arrow-right';
import { QuoteSkeleton } from './skeletons';

const Quote = ({
  featured,
  info,
}) => {
  if (!info) {
    return <QuoteSkeleton featured />;
  }

  const {
    quoteText,
    quoteAuthor,
    quoteGenre,
  } = info;

  return (
    <div data-testid="quoteItem">
      <div className="border-l-8 border-yellow-500">
        <div className="pl-8 sm:pl-16 xl:pl-24">
          <h1 data-testid="quoteText" className="text-lg md:text-xl lg:text-2xl xl:text-3xl">{quoteText}</h1>
        </div>
      </div>
      <div className="border-l-8 border-transparent">
        {featured && (
          <Link href={`/authors/${quoteAuthor}`}>
            <a data-testid="authorLink" >
              <div className="flex justify-between items-center px-8 sm:pl-16 xl:pl-24 py-4 mt-12 text-gray-700 group hover:bg-gray-800 hover:text-white">
                <div className="flex flex-col">
                  <span data-testid="quoteAuthor" className="text-base md:text-lg lg:text-xl xl:text-xl font-bold">{quoteAuthor}</span>
                  <span data-testid="quoteGenre" className="text-sm font-medium">{quoteGenre || '-'}</span>
                </div>
                <div className="hidden group-hover:block">
                  <ArrowRightIcon color="#fff" width={24} height={24} />
                </div>
              </div>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Quote;
