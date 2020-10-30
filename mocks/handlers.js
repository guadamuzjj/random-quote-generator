import { rest } from 'msw';
import quotes from '../data/quotes';

export const handlers = [
  rest.get('https://quote-garden.herokuapp.com/api/v2/quotes/random', (_req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        quote: quotes[0]
      })
    )
  }),
  rest.get('https://quote-garden.herokuapp.com/api/v2/authors/Will%20Durant', (_req, res, ctx) => {
    const authorQuotes = quotes.filter(q => q.quoteAuthor === 'Will Durant');
    return res(
      ctx.json({
        statusCode: 200,
        quotes: authorQuotes,
      })
    )
  }),
]
