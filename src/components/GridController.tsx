import React, { ReactElement } from 'react';
import GridResizeGrid from './GridResizeGrid';
import GridChangeGridType from './GridChangeGridType';

const GridController = (): ReactElement => (
  <div>
    <GridResizeGrid />
    <hr />
    <GridChangeGridType />
  </div>
);

export default GridController;
