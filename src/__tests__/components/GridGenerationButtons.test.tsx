/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/react-in-jsx-scope */
import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
// import initialStore from '../__fixtures__/initialStore';
import GridGenerationButtons from '../../components/GridGenerationButtons';
import { initialState } from '../../redux/reducers/gridReducer';

const mockStore = configureStore([]);

describe('<GridGenerationButtons> tests', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('Is accessible', async () => {
    const { container } = render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('On load there is a start and step button', () => {
    render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.queryByText('Stop')).not.toBeInTheDocument();
  });

  it('Action is called when next buttons is pressed', () => {
    render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    userEvent.click(screen.getByText('Next'));
    expect(store.getActions()).toHaveLength(1);
    expect(store.getActions()[0].type).toEqual('gridSlice/nextGeneration');
  });

  // NOTE: Can't seems to test this because setRunning dispatches without a hook
  it.skip('When  start button is pressed, stop button is available', () => {
    render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    userEvent.click(screen.getByText('Start'));
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.queryByText('Next')).not.toBeInTheDocument();
    expect(screen.queryByText('Stop')).toBeInTheDocument();
  });

  it.skip('When start is pressed, action is called repeatedly', (done) => {
    render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    userEvent.click(screen.getByText('Start'));
    setTimeout(
      () => {
        expect(store.getActions()).toHaveLength(3);
        done();
      },
      //@ts-ignore
      store.getState().grid.genTimeSeconds * 1000 * 2 + 5
    );
  });

  it.skip('When stop is pressed, action is no longer called', (done) => {
    render(
      <Provider store={store}>
        <GridGenerationButtons />
      </Provider>
    );
    userEvent.click(screen.getByText('Start'));
    setTimeout(() => {
      expect(store.getActions()).toHaveLength(3);
      userEvent.click(screen.getByText('Stop'));
      setTimeout(
        () => {
          expect(store.getActions()).toHaveLength(3);
          done();
        },
        //@ts-ignore
        store.getState().grid.genTimeSeconds * 1000 * 2 + 5
      );
      //@ts-ignore
    }, store.getState().grid.genTimeSeconds * 1000 * 2 + 5);
  });
});
