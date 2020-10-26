import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import AuthorPage from '../pages/authors/[authorName]'

jest.mock('../services/quotes');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/authors/John%20Doe',
      pathname: '',
      query: {
        authorName: 'John Doe'
      },
      asPath: '',
    };
  },
}));

describe('Author page', () => {
  let page;

  beforeEach(async () => {
    await act(async () => {
      page = render(<AuthorPage />);
    });
  });

  it('should render the quotes list', async () => {
    const { getByTestId } = page;
    expect(getByTestId('quoteList')).toBeDefined();
  });

  it('should render a button which redirect to home', async () => {
    const { getByTestId } = page;
    expect(getByTestId('backBtn')).toHaveAttribute('href', '/');
  });
})
