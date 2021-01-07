import fetch from 'cross-fetch';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const randomQuoteEndpoint = `${apiUrl}/quotes/random`;
export const authorQuotesEndpoint = name => `${apiUrl}/authors/${name}`;

export async function getRandomQuote() {
  const res = await fetch(randomQuoteEndpoint);
  const { data } = await res.json();
  return data[0];
}

export async function getQuotesByAuthor(name) {
  const res = await fetch(authorQuotesEndpoint(name));
  const { quotes } = await res.json();
  return quotes;
}
