import React, { ReactElement, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nextGeneration } from '../redux/reducers/gridReducer';
import {
  useGetGenTimeSeconds,
  useGetGeneration,
} from '../redux/selectors/gridSelector';

// *** Main component ***
const GridGenerationButtons = (): ReactElement => {
  const dispatch = useDispatch();
  const generation = useGetGeneration();
  const genTimeSeconds = useGetGenTimeSeconds();

  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

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

  return (
    <Row>
      <Col>
        {intervalId === null ? (
          <Button onClick={handleStart} variant='success'>
            Start
          </Button>
        ) : (
          <Button onClick={handleStop} variant='danger'>
            Stop
          </Button>
        )}{' '}
        {intervalId === null ? (
          <Button onClick={handleClick} variant='primary'>
            Next
          </Button>
        ) : null}{' '}
        Generation: {generation}
      </Col>
    </Row>
  );
};

export default GridGenerationButtons;
