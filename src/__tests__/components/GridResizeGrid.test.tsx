/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialStore from '../__fixtures__/initialStore';
import GridResizeGrid from '../../components/GridResizeGrid';

const mockStore = configureStore([]);

describe('<GridResizeGrid> tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('Is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <GridResizeGrid />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Action sent when button is pressed', () => {
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
        <GridResizeGrid />
      </Provider>
    );
    userEvent.type(screen.getByTestId('floatingInputRows'), '{backspace}55');
    userEvent.type(screen.getByTestId('floatingInputCols'), '{backspace}66');
    userEvent.click(screen.getByText('Change grid'));
    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0]).toEqual({
      type: 'gridSlice/resizeGrid',
      payload: { rows: 55, columns: 66 },
    });
  });
});
