import React, { ReactElement } from 'react';
import {} from 'react-bootstrap';
import styled from 'styled-components';
import GridCell from './GridCell';
//import { useDispatch } from 'react-redux';
import {
  useGetCols,
  useGetRows,
  useGetGrid,
} from '../redux/selectors/gridSelector';
import { GridRowType, LifeStatusType } from '../redux/reducers/gridReducer';

type GridType = { rows: number; columns: number };

const GridBox = styled.div<GridType>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 10px);
  grid-template-rows: repeat(${(props) => props.rows}, 10px);
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
    />
  ));

// *** Main component ***

const Grid = (): ReactElement => {
  const rows = useGetRows();
  const columns = useGetCols();
  const grid = useGetGrid();

  return (
    <GridContainer>
      <GridBox rows={rows} columns={columns}>
        {grid.map((row, rowindex) => GridRows(row, rowindex))}
      </GridBox>
    </GridContainer>
  );
};

export default Grid;
