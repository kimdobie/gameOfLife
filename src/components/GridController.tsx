/* eslint-disable @typescript-eslint/ban-ts-comment */
// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement } from 'react';
import GridResizeGrid from './GridResizeGrid';
import GridChangeGridType from './GridChangeGridType';
// *** Main component ***
const GridController = (): ReactElement => (
  <div>
    <GridResizeGrid />
    <hr />
    <GridChangeGridType />
  </div>
);

export default GridController;
