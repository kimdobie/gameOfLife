import { GridType, LifeStatusType } from '../redux/reducers/gridReducer';

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

const emptyRow = (cols: number): LifeStatusType[] => {
  const row: LifeStatusType[] = [];
  for (let i = 0; i < cols; i++) {
    row.push(0);
  }
  return row;
};

export const emptyGrid = (rows: number, cols: number): GridType => {
  const row: LifeStatusType[] = emptyRow(cols);

  const grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push([...row]);
  }
  return grid;
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

export const blinkerGrid = (rows: number, cols: number): GridType => {
  const grid: GridType = emptyGrid(rows, cols);
  grid[1][4] = 1;
  grid[2][4] = 1;
  grid[3][4] = 1;
  return grid;
};

export const randomGrid = (rows: number, cols: number): GridType => {
  const grid: GridType = emptyGrid(rows, cols);
  return grid.map((row) => row.map(() => (Math.random() < 0.25 ? 1 : 0)));
};

export const gliderGrid = (rows: number, cols: number): GridType => {
  const grid: GridType = emptyGrid(rows, cols);

  grid[2][1] = 1;
  grid[2][1] = 1;
  grid[3][2] = 1;
  grid[1][3] = 1;
  grid[2][3] = 1;
  grid[3][3] = 1;
  return grid;
};
