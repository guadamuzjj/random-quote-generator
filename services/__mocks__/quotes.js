import quotes from '../../data/quotes';

export const getRandomQuote = async () => {
  return await new Promise(async (resolve) => {
    resolve(quotes[0]);
  });
};

export const getQuotesByAuthor = async () => {
  return await new Promise(resolve => {
    resolve(quotes);
  });
};
