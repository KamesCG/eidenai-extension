/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { svg, images, screen} from 'assets'
import {
  Flex, Box, 
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'

import IpfsFileAdd from 'assimilation/fetching/ipfs/IpfsFileAdd'

const DocumentCard = props => 
  <Box br={7} boxShadow={1} p={20} {...props} >
    <Heading level={[3]} f={[3]}>
      {props.title} - <Span color='purple' fw='700' >{props.type} </Span>
    </Heading>
    <Paragraph f={[1]}>
      <Span><strong>Hash</strong>: {props.hash} </Span>
    </Paragraph>
    <Paragraph f={[1]}>
      <Span><strong>Download Link:</strong> {props.type} </Span>
    </Paragraph>
  </Box>


const documents = [
  {
    title: 'KYC Identity',
    type: 'PDF',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Ethesense Certificate',
    type: 'json',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Meshpass',
    type: 'txt',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Bounty Hunter',
    type: 'json',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
]

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={50} >
  <Heading level={[3]} f={[4,5]}>
    Đocuments
  </Heading>
  <IpfsFileAdd/>
  <Flex wrap='wrap' >
    {
      documents.map(props=><DocumentCard w={1} {...props}/> )
    }
  </Flex>
</Box>