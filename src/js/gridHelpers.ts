import { GridType } from '../redux/reducers/gridReducer';
import { emptyRow } from './gridTypes';

const checkValue = (grid: GridType, row: number, col: number): number => {
  const val = grid[row] && grid[row][col] ? grid[row][col] : 0;
  return val > 0 ? 1 : 0;
};

const numNeighbors = (grid: GridType, row: number, col: number): number => {
  const top = row === 0 ? grid.length - 1 : row - 1;
  const bottom = row === grid.length - 1 ? 0 : row + 1;
  const left = col === 0 ? grid[0].length - 1 : col - 1;
  const right = col === grid[0].length - 1 ? 0 : col + 1;

  const count =
    checkValue(grid, top, left) +
    checkValue(grid, top, col) +
    checkValue(grid, top, right) +
    checkValue(grid, row, left) +
    checkValue(grid, row, right) +
    checkValue(grid, bottom, left) +
    checkValue(grid, bottom, col) +
    checkValue(grid, bottom, right);

  return count;
};

export const nextGrid = (grid: GridType): GridType => {
  const newGrid: GridType = [];

  grid.forEach((row, rowIndex) => {
    newGrid.push([...row]);
    row.forEach((lifeVal, colIndex) => {
      const neighbors = numNeighbors(grid, rowIndex, colIndex);
      if (lifeVal > 0 && (neighbors === 2 || neighbors === 3)) {
        newGrid[rowIndex][colIndex] = 1; // stay alive
      } else if (lifeVal === 0 && neighbors === 3) {
        newGrid[rowIndex][colIndex] = 2; // is newborn
      } else {
        newGrid[rowIndex][colIndex] = 0; // is dead
      }
    });
  });
  return newGrid;
};

export const changeGridSize = (
  grid: GridType,
  rows: number,
  cols: number
): GridType => {
  let newGrid: GridType = [...grid];
  if (rows > grid.length) {
    for (let i = 0; i < rows - grid.length; i++) {
      newGrid.push([...emptyRow(cols)]);
    }
  } else if (rows < grid.length) {
    newGrid = newGrid.slice(0, rows);
  }

  if (cols > newGrid[0].length) {
    newGrid = newGrid.map((row) => [...row, ...emptyRow(cols - row.length)]);
  } else if (cols < newGrid[0].length) {
    newGrid = newGrid.map((row) => row.slice(0, cols));
  }

  return newGrid;
};
