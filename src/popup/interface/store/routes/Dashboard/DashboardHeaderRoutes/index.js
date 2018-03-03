/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import Box from 'atoms/Box'
import Route from 'molecules/Route'
/* ------------------------- Internal Dependencies -------------------------- */
import RegionBranding  from 'layout/regions/RegionBranding'

export default () =>
<Box>
  <Route path="/" component={RegionBranding} />
</Box>