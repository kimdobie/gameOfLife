/* eslint-disable @typescript-eslint/ban-ts-comment */
// NOTE This is a sample page and should either be
// modified or removed from a real project

import React, { ReactElement } from 'react';
import GridGenerationButtons from './GridGenerationButtons';
import GridResizeGrid from './GridResizeGrid';
// *** Main component ***
const GridController = (): ReactElement => (
  <div>
    <GridGenerationButtons />
    <GridResizeGrid />
  </div>
);

export default GridController;
