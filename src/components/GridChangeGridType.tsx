import React, { ReactElement, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import {
  createEmptyGrid,
  createRandomGrid,
  createGliderGrid,
} from '../redux/reducers/gridReducer';

type GridType = 'empty' | 'random' | 'glider' | '';

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const GridChangeGridType = (): ReactElement => {
  const dispatch = useDispatch();
  const [gridType, setGridType] = useState<GridType>('');

  const setGrid = (value: GridType) => {
    switch (value) {
      case 'empty':
        dispatch(createEmptyGrid());
        break;
      case 'random':
        dispatch(createRandomGrid());
        break;
      case 'glider':
        dispatch(createGliderGrid());
        break;
    }
  };

  const handleChange = (value: GridType): void => {
    setGridType(value);
    setGrid(value);
  };

  return (
    <>
      <div>
        <Form.Select
          aria-label='Default select example'
          onChange={(e) => handleChange(e.target.value as GridType)}
          value={gridType}
        >
          <option value=''>Change grid to:</option>
          <option value='empty'>Empty</option>
          <option value='random'>Random</option>
          <option value='glider'>Glider</option>
        </Form.Select>
        {gridType !== '' ? (
          <StyledButton onClick={() => setGrid(gridType)}>
            Reset grid type
          </StyledButton>
        ) : null}
      </div>
    </>
  );
};

export default GridChangeGridType;
