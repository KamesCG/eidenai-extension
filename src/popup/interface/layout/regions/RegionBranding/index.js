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
  align={"stretch"} wrap='wrap'
  bs={[0]} 
  color={['white']}
  py={20}
  pos='relative'
>

  <Flex align="center" justify="left" w={[0.1]} pl={[15]} py={[7]} direction={['row']} >
    <DrawerOpen>
      <a><SVG svg={icons.uiListDetail} svgColor='white' ml={10} width={20}/></a>
    </DrawerOpen>
    {/* <DrawerOpen>
      <Heading f={[2]} level={[4]} mb={0} ml={10}><a>menu</a></Heading>
    </DrawerOpen> */}
  </Flex>
  <Flex align="center" justify="left" w={[0.70]} pl={[15]} py={[7]} direction={['row']} >
    {/* <UPortCredentialsRequest/> */}
    <Flex justify='space-evenly' w={1} >
      <Box px={10} >
        <Link to="/dapps">ĐApps</Link>
      </Box>
      <Box px={10} >
        <Link to="/documents" >Đocuments</Link>
      </Box>
      <Box px={10} >
        <Link to="/tokens">Tokens</Link>
      </Box>
      <Box px={10} >
        <Link to="/ens">ENS</Link>
      </Box>
    </Flex>
  </Flex>
  
  <Flex
    align="center" justify='flex-end' 
    pr={10} py={[10]} w={[0.20]}
  >
  </Flex>
</Flex>
