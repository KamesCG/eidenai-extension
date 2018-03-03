/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg, images, screen} from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'

/*-* Foundry *-*/

import { IconCircle } from 'foundry'

import { LocalStore } from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props =>
<div>
  <Container w={[1120]} py={[15,25]} >
    <LocalStore/>
  </Container>
</div>