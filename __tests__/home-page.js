import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Index from '../pages/index';
import quotes from '../data/quotes';


describe('Home page', () => {
  it('should render correctly', async () => {
    render(<Index />);

    const randomQuote = await waitForElement(() => screen.getByTestId('quoteText'));
    const newQuoteBtn = await waitForElement(() => screen.getByTestId('getNewQuoteBtn'));

    expect(newQuoteBtn).toBeInTheDocument();
    expect(randomQuote).toBeInTheDocument();

    const [mockQuote] = quotes; // See handlers
    expect(randomQuote).toHaveTextContent(mockQuote.quoteText);
  });
})
