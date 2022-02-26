// Contains routing for entire application

import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import ROUTES from './AppRouteNames';

import Home from './pages/Home';
import Version from './pages/Version';
import FourOhFour from './pages/FourOhFour';

const AppRoutes = (): ReactElement => (
  <>
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />

      <Route path={ROUTES.VERSION} element={<Version />} />

      <Route path='*' element={<FourOhFour />} />
    </Routes>
  </>
);

export default AppRoutes;
