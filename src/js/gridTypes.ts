import { GridType, LifeStatusType } from '../redux/reducers/gridReducer';

export const emptyRow = (cols: number): LifeStatusType[] => {
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
