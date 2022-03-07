/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import initialStore from '../__fixtures__/initialStore';
import ChangeGridType from '../../components/GridChangeGridType';

const mockStore = configureStore([]);

describe('<ChangeGridType> tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialStore);
  });

  it('Is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <ChangeGridType />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('Choosing an option calls correct action', () => {
    render(
      <Provider store={store}>
        <ChangeGridType />
      </Provider>
    );
    userEvent.selectOptions(screen.getByRole('combobox'), ['empty']);
    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0].type).toEqual('gridSlice/createEmptyGrid');

    userEvent.click(screen.getByRole('button'));
    expect(store.getActions()).toHaveLength(2);
    expect(store.getActions()[1].type).toEqual('gridSlice/createEmptyGrid');

    userEvent.selectOptions(screen.getByRole('combobox'), ['random']);
    expect(store.getActions()).toHaveLength(3);
    expect(store.getActions()[2].type).toEqual('gridSlice/createRandomGrid');

    userEvent.selectOptions(screen.getByRole('combobox'), ['glider']);
    expect(store.getActions()).toHaveLength(4);
    expect(store.getActions()[3].type).toEqual('gridSlice/createGliderGrid');
  });
});
