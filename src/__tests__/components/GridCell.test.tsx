/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialStore from '../__fixtures__/initialStore';
import GridCell from '../../components/GridCell';

const mockStore = configureStore([]);

describe('<GridCell> tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('Is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <GridCell />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Clicking button call action to flip value', () => {
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
        <GridCell row={0} column={1} />
      </Provider>
    );

    userEvent.click(screen.getByRole('button'));

    expect(store.getActions()).toHaveLength(1);
    // @ts-ignore
    expect(store.getActions()[0].payload).toEqual({ row: 0, column: 1 });
    expect(store.getActions()[0].type).toEqual('gridSlice/flipCell');
  });
});
