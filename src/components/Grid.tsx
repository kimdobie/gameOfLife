import React, { ReactElement } from 'react';
import styled from 'styled-components';
import GridCell from './GridCell';

import {
  useGetCols,
  useGetRows,
  useGetGrid,
  useGetGridCellSize,
} from '../redux/selectors/gridSelector';
import { GridRowType, LifeStatusType } from '../redux/reducers/gridReducer';
import GridGenerationButtons from './GridGenerationButtons';

type GridType = { rows: number; columns: number; size: number };

const GridBox = styled.div<GridType>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    ${(props) => props.size}px
  );
  grid-template-rows: repeat(
    ${(props) => props.rows},
    ${(props) => props.size}px
  );
  grid-gap: 1px;
`;

const GridContainer = styled.div`
  background: #aaa;
  display: inline-block;
  border: 3px solid #333;
`;

const GridRows = (row: GridRowType, rowindex: number): ReactElement[] =>
  row.map((lifeStatus: LifeStatusType, colindex: number) => (
    <GridCell
      key={`${rowindex}${colindex}`}
      isAlive={lifeStatus > 0}
      isNewborn={lifeStatus > 1}
      row={rowindex}
      column={colindex}
      testid='GridCell'
    />
  ));

// *** Main component ***

const Grid = (): ReactElement => {
  const rows = useGetRows();
  const columns = useGetCols();
  const grid = useGetGrid();
  const size = useGetGridCellSize();

  return (
    <>
      <GridGenerationButtons />
      <GridContainer>
        <GridBox rows={rows} columns={columns} size={size}>
          {grid.map((row, rowindex) => GridRows(row, rowindex))}
        </GridBox>
      </GridContainer>
    </>
  );
};

export default Grid;
