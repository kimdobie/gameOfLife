/*
Selectors pull data from the redux store so individual components
don't need to know the store structure

These selectors are actually custom hooks and must start with "use"
*/

import { useSelector } from 'react-redux';
import { RootState } from '../store';
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
