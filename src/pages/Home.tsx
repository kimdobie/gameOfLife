/* eslint-disable @typescript-eslint/ban-ts-comment */
// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

import Grid from '../components/Grid';
import GridController from '../components/GridController';

// *** Main component ***
const Home = (): ReactElement => (
  <Row data-testid='homePageContainer'>
    <Col>
      <GridController />
      <Grid />
    </Col>
  </Row>
);

export default Home;
