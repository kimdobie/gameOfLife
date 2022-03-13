import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nextGrid, changeGridSize } from '../../js/gridHelpers';
import { emptyGrid, gliderGrid, randomGrid } from '../../js/gridTypes';

// *** Data types ***
export type LifeStatusType = 0 | 1 | 2;
export type GridRowType = LifeStatusType[];
export type GridType = GridRowType[]; // 0 is dead, 1 is alive, 2 is newborn

// *** Type of the store ***
export type GateStateType = {
  grid: GridType;
  generation: number;
  gridCellSize: number;
  genTimeSeconds: number;
  isRunning: boolean;
};

// *** Initial state  ***
// exported ONLY for testing purposes
export const initialState: GateStateType = {
  grid: emptyGrid(25, 50),
  generation: 1,
  gridCellSize: 10,
  genTimeSeconds: 0.25,
  isRunning: false,
};

/* *************** Slice ***************** */
export const GridSlice = createSlice({
  name: 'gridSlice', // unique name - not used in the application
  initialState,
  reducers: {
    startSimulation: (state: GateStateType) => {
      state.isRunning = true;
    },
    stopSimulation: (state: GateStateType) => {
      state.isRunning = false;
    },
    nextGeneration: (state: GateStateType) => {
      state.grid = nextGrid(state.grid);
      state.generation += 1;
    },
    flipCell: (
      state: GateStateType,
      action: PayloadAction<{ row: number; column: number }>
    ) => {
      const newCellState =
        state.grid[action.payload.row][action.payload.column] === 0 ? 2 : 0;
      state.grid[action.payload.row][action.payload.column] = newCellState;
    },

    resizeGrid: (
      state: GateStateType,
      action: PayloadAction<{ rows: number; columns: number }>
    ) => {
      state.grid = changeGridSize(
        [...state.grid],
        action.payload.rows,
        action.payload.columns
      );
    },

    createEmptyGrid: (state: GateStateType) => {
      state.grid = emptyGrid(state.grid.length, state.grid[0].length);
      state.generation = 1;
    },

    createRandomGrid: (state: GateStateType) => {
      state.grid = randomGrid(state.grid.length, state.grid[0].length);
      state.generation = 1;
    },

    createGliderGrid: (state: GateStateType) => {
      state.grid = gliderGrid(state.grid.length, state.grid[0].length);
      state.generation = 1;
    },
  },
});

// let intervalId: NodeJS.Timer | null = null;
// /*** Side actions */
// export const useSetIsRunning = (isRunning: boolean): void => {
//   const dispatch = useDispatch();
//   console.log('setIsRunning: ' + isRunning);
//   if (isRunning) {
//     console.log('setIsRunning: starting interval');
//     dispatch(GridSlice.actions.nextGeneration());
//     intervalId = setInterval(() => {
//       console.log('INTERVAL');
//       dispatch(GridSlice.actions.nextGeneration());
//     }, 1000);
//   } else {
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//     intervalId = null;
//   }
// };

// Reducers that can be called in the application
export const {
  nextGeneration,
  //resetStore,
  flipCell,
  resizeGrid,
  createEmptyGrid,
  createGliderGrid,
  createRandomGrid,
  startSimulation,
  stopSimulation,
} = GridSlice.actions;

// To be imported in the index reducer file
export default GridSlice.reducer;
