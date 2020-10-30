import { getQuotesByAuthor, getRandomQuote } from '../services/quotes';

describe('Quotes service', () => {
  it('should fetch a random quote', async () => {
    const quote = await getRandomQuote();
    expect(quote).toBeDefined();
  });

  it('should fetch a list quote by author', async () => {
    const quotes = await getQuotesByAuthor('Will Durant');
    expect(quotes.length).toEqual(2);
  });
});
