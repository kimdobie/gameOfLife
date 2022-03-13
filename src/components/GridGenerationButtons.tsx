/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { nextGeneration } from '../redux/reducers/gridReducer';
import { setRunning } from '../js/startGenerations';
import { useGetIsRunning } from '../redux/selectors/gridSelector';

import { useGetGeneration } from '../redux/selectors/gridSelector';

// *** Main component ***
const GridGenerationButtons = (): ReactElement => {
  const dispatch = useDispatch();
  const generation = useGetGeneration();
  const isRunning = useGetIsRunning();

  return (
    <Row>
      <Col>
        {!isRunning ? (
          <Button
            onClick={() => {
              setRunning(true);
              console.log('button pressed');
            }}
            variant='success'
            data-testid='startButton'
          >
            Start
          </Button>
        ) : (
          <Button
            onClick={() => setRunning(false)}
            variant='danger'
            data-testid='stopButton'
          >
            Stop
          </Button>
        )}{' '}
        {!isRunning ? (
          <Button
            onClick={() => dispatch(nextGeneration())}
            variant='primary'
            data-testid='nextButton'
          >
            Next
          </Button>
        ) : null}{' '}
        Generation: <span data-testid='generation'>{generation}</span>
      </Col>
    </Row>
  );
};

export default GridGenerationButtons;
