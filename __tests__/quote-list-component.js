import React from 'react';
import { render } from '@testing-library/react';
import QuoteList from '../components/quote-list';
import quotes from '../data/quotes';

describe('Quote list component', () => {
  const testAuthor = 'Will Durant';
  const testQuotes = quotes.filter(q => q.quoteAuthor === testAuthor);

  it('should be rendered', () => {
    render(
      <QuoteList
        author={testAuthor}
        items={testQuotes}
      />
    );
  });

  it('should render a skeleton if is not defined yet', () => {
    const { getByTestId } = render(
      <QuoteList items={null} />
    );

    expect(getByTestId('quoteListSkeleton')).toBeInTheDocument();
  });

  it('should render the correct number of quotes', () => {
    const { getAllByTestId } = render(
      <QuoteList
        author={testAuthor}
        items={testQuotes}
      />
    );

    expect(getAllByTestId('quoteItem')).toHaveLength(2);
  });
});
