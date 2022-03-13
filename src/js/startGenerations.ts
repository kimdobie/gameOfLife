import { store } from '../redux/store';
import {
  nextGeneration,
  startSimulation,
  stopSimulation,
} from '../redux/reducers/gridReducer';

import { genTimeSeconds } from '../redux/selectors/gridSelector';

let intervalId: NodeJS.Timer | null = null;

export const setRunning = (isRunning: boolean): void => {
  if (isRunning) {
    store.dispatch(nextGeneration());
    store.dispatch(startSimulation());
    intervalId = setInterval(() => {
      store.dispatch(nextGeneration());
    }, 1000 * genTimeSeconds);
  } else {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = null;
    store.dispatch(stopSimulation());
  }
};
