import { useEffect, useState } from 'react';
import { getRandomQuote } from '../services/quotes';
import Page from '../components/page';
import Quote from '../components/quote';
import RefreshIcon from '../components/icons/refresh-icon';

const Home = () => {
  const [randomQuote, setRandomQuote] = useState();

  const fetchQuote = async () => {
    setRandomQuote(undefined);
    const quote = await getRandomQuote();
    setRandomQuote(quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const getHeader = () => (
    <div className="flex justify-end">
      <button
        data-testid="getNewQuoteBtn"
        title="New random quote"
        className="mr-2 text-right float-right"
        onClick={fetchQuote}
      >
        <RefreshIcon width={24} height={24} />
      </button>
    </div>
  );

  return (
    <Page
      header={getHeader()}
    >
      <Quote
        featured
        info={randomQuote}
      />
    </Page >
  )
}

export default Home
