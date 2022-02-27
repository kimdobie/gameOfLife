/* eslint-disable @typescript-eslint/ban-ts-comment */
// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nextGeneration } from '../redux/reducers/gridReducer';
import {
  useGetGeneration,
  useGetGenTimeSeconds,
} from '../redux/selectors/gridSelector';

// *** Main component ***
const GridController = (): ReactElement => {
  const dispatch = useDispatch();
  const generation = useGetGeneration();
  const genTimeSeconds = useGetGenTimeSeconds();

  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);
  const [rows, setRows] = useState(50);
  const [columns, setColumns] = useState(100);

  const handleClick = (): void => {
    dispatch(nextGeneration());
  };
  const handleStart = (): void => {
    dispatch(nextGeneration());
    const id: ReturnType<typeof setInterval> | null = setInterval(() => {
      dispatch(nextGeneration());
    }, genTimeSeconds * 1000);
    setIntervalId(id);
  };

  const handleStop = (): void => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(null);
  };

  const handleGridSizeChange = (): void => {};
  return (
    <Row data-testid='homePageContainer'>
      <Col>
        <div>
          {intervalId === null ? (
            <button onClick={handleClick}>Next</button>
          ) : null}
          {generation}
          <div>
            {intervalId === null ? (
              <button onClick={handleStart}>Start</button>
            ) : (
              <button onClick={handleStop}>Stop</button>
            )}
          </div>
          <div>
            Rows:
            <input
              value={rows}
              onChange={(e) => setRows(parseInt(e.target.value))}
            />{' '}
            Cols:
            <input
              value={columns}
              onChange={(e) => setColumns(parseInt(e.target.value))}
            />
            <button onChange={handleGridSizeChange}>Change grid</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default GridController;
