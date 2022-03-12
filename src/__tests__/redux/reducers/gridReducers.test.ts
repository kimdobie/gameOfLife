/* eslint-disable @typescript-eslint/ban-ts-comment */
import reducer, {
  nextGeneration,
  flipCell,
  resizeGrid,
  createEmptyGrid,
  createGliderGrid,
  createRandomGrid,
  GateStateType,
} from '../../../redux/reducers/gridReducer';

describe('gridReducer tests', () => {
  it('nextGeneration advances the generation', () => {
    const previousState: GateStateType = {
      grid: [
        [0, 0, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    expect(reducer(previousState, nextGeneration())).toEqual({
      grid: [
        [0, 0, 0],
        [0, 0, 0],
        [2, 1, 2],
        [0, 0, 0],
      ],
      generation: 2,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    });
  });

  it('flipCell changes a single cell', () => {
    const previousState: GateStateType = {
      grid: [
        [0, 0],
        [0, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    expect(reducer(previousState, flipCell({ row: 0, column: 1 }))).toEqual({
      grid: [
        [0, 2],
        [0, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    });
  });

  it('resizeGrid changes the size of the grid', () => {
    const previousState: GateStateType = {
      grid: [
        [1, 1],
        [1, 1],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    expect(reducer(previousState, resizeGrid({ rows: 4, columns: 4 }))).toEqual(
      {
        grid: [
          [1, 1, 0, 0],
          [1, 1, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        generation: 1,
        gridCellSize: 10,
        genTimeSeconds: 0.25,
        isRunning: false,
      }
    );
  });

  it('empty grid sets an empty grid', () => {
    const previousState: GateStateType = {
      grid: [
        [1, 1],
        [1, 1],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    expect(reducer(previousState, createEmptyGrid())).toEqual({
      grid: [
        [0, 0],
        [0, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    });
  });

  it('random grid sets an empty grid', () => {
    const previousState: GateStateType = {
      grid: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    const newGrid = reducer(previousState, createRandomGrid()).grid;
    expect(newGrid.flat().includes(1)).toBe(true);
  });

  it('glider grid sets a glider grid', () => {
    const previousState: GateStateType = {
      grid: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    };
    expect(reducer(previousState, createGliderGrid())).toEqual({
      grid: [
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
      ],
      generation: 1,
      gridCellSize: 10,
      genTimeSeconds: 0.25,
      isRunning: false,
    });
  });
});
