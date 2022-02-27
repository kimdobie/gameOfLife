/*
Reducers update the redux store.
*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nextGrid, randomGrid, changeGridSize } from '../../js/gridHelpers';

// *** Data types ***
// export type SampleItemType = string;
export type LifeStatusType = 0 | 1 | 2;
export type GridRowType = LifeStatusType[];
export type GridType = GridRowType[]; // 0 is dead, 1 is alive, 2 is newborn

// *** Type of the store ***
export type GateStateType = {
  grid: GridType;
  generation: number;
  gridCellSize: number;
  genTimeSeconds: number;
};

// *** Initial state  ***
// exported ONLY for testing purposes
export const initialState: GateStateType = {
  grid: randomGrid(20, 50),
  generation: 1,
  gridCellSize: 10,
  genTimeSeconds: 0.25,
};

/* *************** Slice ***************** */
export const SampleSlice = createSlice({
  name: 'sampleSlice', // unique name - not used in the application
  initialState,
  reducers: {
    // updateGrid: (state: GateStateType, action: PayloadAction<GridType>) => {
    //   state.grid = action.payload;
    //   state.generation = 1;
    // },
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

    // NOTE this resets the state to the initial state
    // normally this isn't used in application, but can be helpful during testing
    resetStore: () => initialState,
  },
});

// Reducers that can be called in the application
export const { nextGeneration, resetStore, flipCell, resizeGrid } =
  SampleSlice.actions;

// To be imported in the index reducer file
export default SampleSlice.reducer;
