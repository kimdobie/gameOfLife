/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialStore from '../__fixtures__/initialStore';
import Home from '../../pages/Home';

const mockStore = configureStore([]);

describe('Home component tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });
  test('Home component is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
