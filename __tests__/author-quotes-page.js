import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import * as nextRouter from 'next/router';
import AuthorPage from '../pages/authors/[authorName]'

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({
  query: {
    authorName: 'Will Durant'
  }
}));

describe('Author page', () => {
  it('should render correctly', async () => {
    render(<AuthorPage />);

    const backButton = await waitForElement(() => screen.getByTestId('backBtn'));
    const quoteList = await waitForElement(() => screen.getByTestId('quoteList'));

    expect(backButton).toHaveAttribute('href', '/');
    expect(quoteList).toBeInTheDocument();
  });
})
