/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { act, render, screen } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router'; // see https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
import initialStore from './__fixtures__/initialStore';
import AppRoutes from '../AppRoutes';
import App from '../App';

const mockStore = configureStore([]);

describe('App (router) tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });
  test('Is accessible', async () => {
    await act(async () => {
      const { container } = render(
        <MemoryRouter initialEntries={['/']}>
          <Provider store={store}>
            <AppRoutes />
          </Provider>
        </MemoryRouter>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
      expect(screen.getByTestId('homePageContainer')).toBeInTheDocument();
    });
  });

  test('404 is shown for /cannnotFindPage', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/cannnotFindPage']} initialIndex={0}>
          <AppRoutes />
        </MemoryRouter>
      );
      expect(screen.queryByTestId('homePageContainer')).not.toBeInTheDocument();
      expect(screen.getByTestId('404PageContainer')).toBeInTheDocument();
    });
  });
});

describe('App renders correctly', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });
  test('App is accessible', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
