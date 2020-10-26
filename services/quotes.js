const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const randomQuoteEndpoint = `${apiUrl}/quotes/random`;
const authorQuotesEndpoint = name => `${apiUrl}/authors/${name}`;

export async function getRandomQuote() {
  const res = await fetch(randomQuoteEndpoint);
  const { quote } = await res.json();
  return quote;
}

export async function getQuotesByAuthor(name) {
  const res = await fetch(authorQuotesEndpoint(name));
  const { quotes } = await res.json();
  return quotes;
}
