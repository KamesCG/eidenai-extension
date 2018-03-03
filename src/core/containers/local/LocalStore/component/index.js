/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
/* ------------------------- Internal Dependencies -------------------------- */
import { icons, graphics } from 'assets'
import Container from 'atoms/Container'
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Heading from 'atoms/Heading'
import Button from 'atoms/Button'
import Link from 'atoms/Link'
import Paragraph from 'atoms/Paragraph'
import Image from 'atoms/Image'
import Span from 'atoms/Span'
import SVG from 'atoms/SVG'
import BackgroundImage from 'atoms/BackgroundImage'
/* ------------------------------- Component -------------------------------- */

const DocumentCard = props => 
  <Flex direction='column' br={7} boxShadow={1} {...props} h={[200]} mb={20} >
    <Box height={0.7} color='white' gradient='purple' p={20} justify='flex-end' pos='relative'  w={1} >
      <BackgroundImage src={`https://ipfs.infura.io/${props.banner.contentUrl}`} o={0.3} />
      <Box>
        <Image src={`https://ipfs.infura.io/${props.image.contentUrl}`} w={75} />
        <Heading level={[3]} f={[3]} mt={15} >
          {props.name}
        </Heading>
      </Box>
    </Box>
    <Box height={0.3}  p={20}  w={1} >
    <Paragraph f={[1]}>
      <Span><strong>Address</strong>: {props.address} </Span>
    </Paragraph>
    <Paragraph f={[1]}>
      <Span><strong>Description</strong>: {props.description} </Span>
    </Paragraph>
    </Box>
  </Flex>


export default props =>
<Box>
  {
    Object.keys(props.data).map(i => {
      let json = JSON.parse(props.data[i])
      console.log(json)
      if(json['@type'] == 'App') return <DocumentCard {...json} />
      return null
    })
  }

</Box>
