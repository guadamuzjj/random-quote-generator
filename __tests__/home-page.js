import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Index from '../pages/index'

jest.mock('../services/quotes');

describe('Home page', () => {
  let page;

  beforeEach(async () => {
    await act(async () => {
      page = render(<Index />);
    });
  });

  it('should render the random quote', async () => {
    const { getByTestId } = page;
    expect(getByTestId('quoteText')).toBeDefined();
  });

  it('should render a button to get a new random quote', async () => {
    const { getByTestId } = page;
    expect(getByTestId('getNewQuoteBtn')).toBeDefined();
  });
})
