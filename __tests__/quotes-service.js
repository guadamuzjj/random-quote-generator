import { getQuotesByAuthor, getRandomQuote } from '../services/quotes';
import mockQuotes from '../data/quotes';

describe('Quotes service', () => {
  afterAll(() => {
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('should fetch a random quote', async () => {
    const mockJsonPromise = Promise.resolve({
      quote: mockQuotes[0],
    });

    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const quote = await getRandomQuote();
    expect(quote).toBeDefined();
  });

  it('should fetch a list quote by author', async () => {
    const mockJsonPromise = Promise.resolve({ quotes: mockQuotes });
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    const fetchedQuotes = await getQuotesByAuthor();
    expect(fetchedQuotes.length).toEqual(mockQuotes.length);
  });
});
