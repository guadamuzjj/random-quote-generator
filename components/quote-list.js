import Quote from './quote';
import { QuoteListSkeleton } from './skeletons';

const QuoteList = ({ author, items }) => {
  if (!items) {
    return <QuoteListSkeleton />;
  }

  return (
    <div data-testid="quoteList">
      <h3 className="text-2xl font-bold">{author}</h3>
      {items.map(item => (
        <div key={item._id} className="mt-24" >
          <Quote info={item} />
        </div>
      ))}
    </div>
  );
};

export default QuoteList;
