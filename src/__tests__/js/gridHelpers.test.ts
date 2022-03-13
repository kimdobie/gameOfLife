import { nextGrid, changeGridSize } from '../../js/gridHelpers';
import { GridType } from '../../redux/reducers/gridReducer';

describe('gridHelpers', () => {
  describe('nextGrid', () => {
    it('grid cell stays alive - 2 neighbors', () => {
      const grid: GridType = [
        [0, 0, 0, 0],
        [0, 0, 1, 0],
        [0, 1, 2, 0],
        [0, 0, 0, 0],
      ];
      const newGrid = nextGrid(grid);
      const expectedGrid = [
        [0, 0, 0, 0],
        [0, 2, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid cell stays alive - 3 neighbors', () => {
      const grid: GridType = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ];
      const newGrid = nextGrid(grid);
      const expectedGrid = [
        [0, 0, 0, 0, 0],
        [0, 2, 1, 2, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 2, 0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid cell goes from dead to newborn', () => {
      // See top two tests for examples
    });
    it('grid cell dies', () => {
      const grid: GridType = [
        [0, 0],
        [0, 1],
      ];
      const newGrid = nextGrid(grid);
      const expectedGrid = [
        [0, 0],
        [0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid wraps rows', () => {
      const grid: GridType = [
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 2, 0],
      ];
      const newGrid = nextGrid(grid);
      const expectedGrid = [
        [0, 2, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid wraps cols', () => {
      const grid: GridType = [
        [0, 0, 0, 0],
        [1, 0, 0, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
      ];
      const newGrid = nextGrid(grid);
      const expectedGrid = [
        [0, 0, 0, 0],
        [1, 0, 0, 1],
        [2, 0, 0, 1],
        [0, 0, 0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
  });
  describe('changeGridSize', () => {
    it('grid adds additional rows', () => {
      const grid: GridType = [
        [1, 1],
        [1, 1],
      ];
      const newGrid = changeGridSize(grid, 4, 2);
      const expectedGrid = [
        [1, 1],
        [1, 1],
        [0, 0],
        [0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid deletes rows', () => {
      const grid: GridType = [
        [1, 1],
        [1, 1],
        [2, 2],
        [2, 2],
      ];
      const newGrid = changeGridSize(grid, 2, 2);
      const expectedGrid = [
        [1, 1],
        [1, 1],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid adds additional columns', () => {
      const grid: GridType = [
        [1, 1],
        [1, 1],
      ];
      const newGrid = changeGridSize(grid, 2, 4);
      const expectedGrid = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid deletes columns', () => {
      const grid: GridType = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ];
      const newGrid = changeGridSize(grid, 2, 2);
      const expectedGrid = [
        [1, 1],
        [1, 1],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid stays the same size', () => {
      const grid: GridType = [
        [1, 1],
        [1, 1],
      ];
      const newGrid = changeGridSize(grid, 2, 2);
      const expectedGrid = [
        [1, 1],
        [1, 1],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid adds rows and columns', () => {
      const grid: GridType = [
        [1, 1],
        [1, 1],
      ];
      const newGrid = changeGridSize(grid, 4, 4);
      const expectedGrid = [
        [1, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
    it('grid deletes rows and columns', () => {
      const grid: GridType = [
        [1, 1, 2, 2],
        [1, 1, 2, 2],
        [1, 0, 0, 0],
        [1, 0, 0, 0],
      ];
      const newGrid = changeGridSize(grid, 2, 2);
      const expectedGrid = [
        [1, 1],
        [1, 1],
      ];
      expect(newGrid).toEqual(expectedGrid);
    });
  });
});
