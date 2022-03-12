import { useSelector } from 'react-redux';
import { RootState, store } from '../store';
import { GridType } from '../reducers/gridReducer';

export const useGetGrid = (): GridType =>
  useSelector((state: RootState) => state.grid.grid);

export const useGetRows = (): number =>
  useSelector((state: RootState) => state.grid.grid.length);

export const useGetCols = (): number =>
  useSelector((state: RootState) => state.grid.grid[0].length);

export const useGetGeneration = (): number =>
  useSelector((state: RootState) => state.grid.generation);

export const useGetGridCellSize = (): number =>
  useSelector((state: RootState) => state.grid.gridCellSize);

export const useGetGenTimeSeconds = (): number =>
  useSelector((state: RootState) => state.grid.genTimeSeconds);

export const genTimeSeconds = store.getState().grid.genTimeSeconds;

export const useGetIsRunning = (): boolean =>
  useSelector((state: RootState) => state.grid.isRunning);
