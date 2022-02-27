import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { flipCell } from '../redux/reducers/gridReducer';
import { useGetGridCellSize } from '../redux/selectors/gridSelector';

// ** Main component type */
// eslint-disable-next-line @typescript-eslint/ban-types
type GridCellType = {
  isAlive?: boolean;
  isNewborn?: boolean;
  row?: number;
  column?: number;
};
type GridButtonType = {
  size?: number;
};

const GridBox = styled.div<GridCellType>`
  background-color: ${(props) => {
    if (props.isNewborn) {
      return `#ff8c00`;
    }
    if (props.isAlive) {
      return `#f00`;
    }
    return `#fff`;
  }};
  position: relative;
`;
const Button = styled.button<GridButtonType>`
  border: none;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  background: none;
`;

// *** Main component ***

const GridCell = ({
  isAlive = false,
  isNewborn = false,
  row = 0,
  column = 0,
}: GridCellType): ReactElement => {
  const dispatch = useDispatch();
  const size = useGetGridCellSize();

  return (
    <GridBox isAlive={isAlive} isNewborn={isNewborn}>
      <Button onClick={() => dispatch(flipCell({ row, column }))} size={size} />
    </GridBox>
  );
};

export default GridCell;
