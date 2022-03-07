/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialStore from '../__fixtures__/initialStore';
import Grid from '../../components/Grid';

const mockStore = configureStore([]);

describe('<Grid> tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('Is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Displays correct number of cells', () => {
    const newStore = {
      ...initialStore,
      grid: {
        ...initialStore.grid,
        grid: [
          [0, 1],
          [1, 0],
        ],
      },
    };
    store = mockStore(newStore);
    render(
      <Provider store={store}>
        <Grid />
      </Provider>
    );
    const GridCells = screen.getAllByTestId('GridCell');
    expect(GridCells).toHaveLength(4);
  });
});
