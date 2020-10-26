import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';

describe('Quote component', () => {
  const testQuote = {
    quoteText: 'Every science begins as philosophy and ends as art.',
    quoteAuthor: 'Will Durant',
    quoteGenre: 'science',
  }

  it('should be rendered', () => {
    const { getByTestId } = render(<Quote info={testQuote} />);
    expect(getByTestId('quoteItem')).toBeDefined();
  });

  it('should render a skeleton if is not defined yet', () => {
    const { getByTestId } = render(
      <Quote info={null} />
    );

    expect(getByTestId('quoteSkeleton')).toBeInTheDocument();
  });

  it('should render with the featured info', () => {
    const { getByTestId } = render(
      <Quote
        featured
        info={testQuote}
      />
    );

    expect(getByTestId('quoteText')).toHaveTextContent(testQuote.quoteText);
    expect(getByTestId('authorLink')).toHaveAttribute('href', `/authors/${encodeURI(testQuote.quoteAuthor)}`);
    expect(getByTestId('quoteAuthor')).toHaveTextContent(testQuote.quoteAuthor);
    expect(getByTestId('quoteGenre')).toHaveTextContent(testQuote.quoteGenre);
  });


  it('should render with the basic info', () => {
    const { queryByTestId } = render(
      <Quote info={testQuote} />
    );

    expect(queryByTestId('quoteText')).toHaveTextContent(testQuote.quoteText);
    expect(queryByTestId('quoteAuthor')).toBeNull();
    expect(queryByTestId('quoteGenre')).toBeNull();
  });

  it('should render a hyphen as genre if genre is not provided', () => {
    const { quoteText, quoteAuthor } = testQuote;

    const { getByTestId } = render(
      <Quote
        featured
        info={quoteText, quoteAuthor}
      />
    );
    expect(getByTestId('quoteGenre')).toHaveTextContent('-');
  });

  it('match to snapshot', () => {
    const quoteComponent = renderer.create(<Quote featured info={testQuote} />).toJSON();
    expect(quoteComponent).toMatchSnapshot();
  });
});
