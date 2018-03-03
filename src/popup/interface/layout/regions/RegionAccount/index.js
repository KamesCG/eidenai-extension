/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { icons } from 'assets'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Image from 'atoms/Image'
import Span from 'atoms/Span'
import SVG from 'atoms/SVG'
import DrawerOpen from 'containers/drawer/DrawerOpen'
import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Flex
align='center' justify='center' wrap='wrap' pos='relative'
gradientDir='182deg' bs={[0]}  color={['white']}>
  <Flex
    align="center" direction="column" justify='center'
    px={20} py={[10]} w={[1]}
  >
    <UPortCredentialsRequest text="Sovereign Login" />
  </Flex>
  <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[1]} fontWeight={'100'}>eidenai</Heading></Link>
</Flex>
