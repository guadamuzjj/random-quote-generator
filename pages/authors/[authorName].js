import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { getQuotesByAuthor } from '../../services/quotes';
import Page from '../../components/page';
import QuoteList from '../../components/quote-list';

const AuthorPage = () => {
  const [quotes, setQuotes] = useState();
  const { query } = useRouter();

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotes = await getQuotesByAuthor(query.authorName);
      setQuotes(quotes);
    };

    fetchQuotes();
  }, [query]);

  const getHeader = () => (
    <div>
      <Link href="/">
        <a data-testid="backBtn" className="underline text-blue-500">random</a>
      </Link>
    </div>
  );

  return (
    <Page header={getHeader()}>
      <QuoteList
        author={query.authorName}
        items={quotes} />
    </Page>
  )
}

export default AuthorPage;
