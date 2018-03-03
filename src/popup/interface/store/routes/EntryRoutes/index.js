/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router';
/* ------------------------- Internal Dependencies -------------------------- */
import { BackgroundGradient, Box } from 'atomic'
import Extension from 'layout/entry/Extension'
import DashboardEntry from 'layout/entry/Dashboard'
import { DialogFactory, DrawerFactory } from 'containers'

const Magic = styled.div`
opacity: 0.999999;
z-index: 500;
`

export default () => (
<div>
  <BackgroundGradient gradient='purple' left right top bottom />
  <Box z={[10000]} >
    <DrawerFactory/>
  </Box>
  <Magic>
    <Switch>
      <Route path="/settings" component={Extension} />
      <Route path="/" component={DashboardEntry} />
    </Switch>
  </Magic>
</div>
);
