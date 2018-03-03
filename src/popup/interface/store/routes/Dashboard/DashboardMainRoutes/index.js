/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
// Atoms
import {
  Flex, Box, Absolute,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'

import EnsTools from 'smithing/pages/dashboard/EnsTools'
import Documents from 'smithing/pages/dashboard/Documents'
import Home from 'smithing/pages/dashboard/Home'
import DistributedApplications from 'smithing/pages/dashboard/DistributedApplications'
/* ------------------------------- Component -------------------------------- */

export default () => (
<div>
  <Route
    exact
    path='/'
    component={Home}
  />
  <Route
    exact
    path='/documents'
    component={Documents}
  />
  <Route
    exact
    path='/dapps'
    component={DistributedApplications}
  />
  <Route
    exact
    path='/ens'
    component={EnsTools}
  />
</div>);
