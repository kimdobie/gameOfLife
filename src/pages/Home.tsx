import React, { ReactElement } from 'react';
import { Row, Col } from 'react-bootstrap';

import Grid from '../components/Grid';
import GridController from '../components/GridController';

// *** Main component ***
const Home = (): ReactElement => (
  <Row data-testid='homePageContainer'>
    <Col>
      <GridController />
    </Col>
    <Col sm={{ order: 'first' }}>
      <Grid />
    </Col>
  </Row>
);

export default Home;
