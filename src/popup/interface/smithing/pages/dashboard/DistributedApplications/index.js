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
  <Flex direction='column' br={7} boxShadow={1} {...props} h={[200]} mb={20} >
    <Box height={0.7} color='white' gradient='purple' p={20} justify='flex-end'  w={1} >
      <Heading level={[3]} f={[3]}>
        {props.title} - <Span color='white' fw='300' >{props.type} </Span>
      </Heading>
    </Box>
    <Box height={0.3}  p={20}  w={1} >
    <Paragraph f={[1]}>
      <Span><strong>Hash</strong>: {props.hash} </Span>
    </Paragraph>
    <Paragraph f={[1]}>
      <Span><strong>Download Link:</strong> {props.type} </Span>
    </Paragraph>
    </Box>
  </Flex>


const documents = [
  {
    title: 'Ethesence',
    type: 'Education',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Gnosis Olympia',
    type: 'Prediction',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Meshpass',
    type: 'Consensys',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
  {
    title: 'Gitcoin',
    type: 'bounty',
    hash: '0G4J81NCKAJ37592NKVN2317465HVNAK29CJA'
  },
]

/* ------------------------------- Component -------------------------------- */
export default props =>
<Box p={50} >
  <Heading level={[3]} f={[4,5]}>
    Đecentralized Applicaitons
  </Heading>
  <Flex wrap='wrap' >
    {
      documents.map(props=><DocumentCard w={1} {...props}/> )
    }
  </Flex>
</Box>