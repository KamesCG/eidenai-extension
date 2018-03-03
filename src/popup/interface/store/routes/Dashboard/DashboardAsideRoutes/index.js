/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
/* ------------------------- Internal Dependencies -------------------------- */
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import RegionAccount from 'layout/regions/RegionAccount'
import AsideDrawerMenu from 'smithing/layout/AsideDrawerMenu'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Box>
  <RegionAccount/>
  <AsideDrawerMenu owner="aside" />
</Box>
