import React, { ReactElement, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { resizeGrid } from '../redux/reducers/gridReducer';
import { useGetCols, useGetRows } from '../redux/selectors/gridSelector';

const FloatingLabelStyled = styled(FloatingLabel)`
  width: 75px;
  display: inline-block;
`;

const GridResizeGrid = (): ReactElement => {
  const dispatch = useDispatch();
  const rowsState = useGetRows();
  const colsState = useGetCols();
  const [rows, setRows] = useState<number>(rowsState);
  const [cols, setColumns] = useState<number>(colsState);

  const handleGridSizeChange = (): void => {
    dispatch(resizeGrid({ rows, columns: cols }));
  };

  return (
    <>
      <div>
        <FloatingLabelStyled
          controlId='floatingInputRows'
          label='Rows'
          style={{ width: '75px' }}
        >
          <Form.Control
            type='number'
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </FloatingLabelStyled>
        <FloatingLabelStyled
          controlId='floatingInputCols'
          label='Columns'
          style={{ width: '75px' }}
        >
          <Form.Control
            type='number'
            value={cols}
            onChange={(e) => setColumns(parseInt(e.target.value))}
          />
        </FloatingLabelStyled>
        <Button variant='secondary' onClick={handleGridSizeChange}>
          Change grid
        </Button>
      </div>
    </>
  );
};

export default GridResizeGrid;
