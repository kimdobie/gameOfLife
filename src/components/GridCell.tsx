import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { flipCell } from '../redux/reducers/gridReducer';
import { useGetGridCellSize } from '../redux/selectors/gridSelector';

type GridCellType = {
  isAlive?: boolean;
  isNewborn?: boolean;
  row?: number;
  column?: number;
  testid?: string;
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

type LifeType = 'dead' | 'alive' | 'newborn';

const GridCell = ({
  isAlive = false,
  isNewborn = false,
  row = 0,
  column = 0,
  testid,
}: GridCellType): ReactElement => {
  const dispatch = useDispatch();
  const size = useGetGridCellSize();

  const life = (): LifeType => {
    if (!isAlive && !isNewborn) {
      return 'dead';
    }
    return isNewborn ? 'newborn' : 'alive';
  };

  return (
    <GridBox
      isAlive={isAlive}
      isNewborn={isNewborn}
      data-testid={testid}
      data-life={life()}
      data-row={row}
      data-column={column}
    >
      <Button
        onClick={() => {
          dispatch(flipCell({ row, column }));
        }}
        size={size}
        aria-label='Update cell'
      />
    </GridBox>
  );
};

export default GridCell;
