import React, {useMemo} from 'react'
import { Box,Flex,Image,Link,List,ListItem,Text } from "@chakra-ui/react"
import Loadable from "react-loadable"
import {Helmet} from 'react-helmet'

import "../css/style.css";
import vidMp4 from '../videos/heroVid.mp4'
import vidWebm from '../videos/heroVid.webm'
import vidOgv from '../videos/heroVid.ogv'
import vidPoster from '../images/vidPoster.jpg'
import postBg from '../images/postsBg.png'
import postBgTwo from '../images/postsBgTwo.png'
import Planes from '../images/planes.jpg'
import Stump from '../images/stump.jpg'
import ShareImg from '../images/shareImg.jpg'

import Piper from '../images/piper.jpeg'
import Suzanne from '../images/suzanne.png'
import Ozayr from '../images/Ozayr.jpeg'
import Balir from '../images/blair.jpeg'
import Thena from '../images/thena.jpeg'





const teamMembers = [
  {
    name: 'Piper Bernbaum ',
    org: 'YOW+',
    photo: `${Piper}`
  },
  {
    name: 'Suzanne Harris-Brandts',
    org: 'YOW+',
    photo: `${Suzanne}`
  },
  {
    name: 'Ozayr Saloojee',
    org: 'YOW+',
    photo:`${Ozayr}`
  },
  {
    name: 'Blair Satterfield',
    org: 'HiLo',
    photo:`${Balir}`
  },
  {
    name: 'Thena Tak',
    org: 'HiLo',
    photo:`${Thena}`
  }
]

const colourBg = ['#e31e3d', '#e5501c','#e28118'  ]

// markup

const loader = ()=>(<div>Loading Content ...</div>)
const MyParallaxComponent = Loadable({
  loader: () => import('../components/LoadableParallax'),
  loading: loader,
})

const IndexPage = () => {
   
  return (
    <main id='skrollr-body'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>-Post- | a design/research collaborative from HiLo/YOW+.</title>
        <meta
          name="description"
          content="We are delighted to announce that HiLo/YOW+, a design/research collaborative with the @hilolab.sala at @ubcsala and the YOW+ collective at @carleton_architecture - has been shortlisted as one of four teams to curate the Canadian Pavilion at the 2023 Venice Architecture Biennale. Thank you to the @canada.council and to the jury for this acknowledgement and our congratulations to the other teams! We’re looking forward to what comes next, and to sharing our proposal - titled “-Post-“ with all of you."
        />
        <meta property="og:image" content={ShareImg} />
        <meta property="og:image:width" content="400" />
      </Helmet>
      <Flex w='100vw' h='100vh'>
        <Box pos='absolute' zIndex='2' background='rgba(0,0,0,0.7)' w='100vw' h='100vh'></Box>
        <Flex position='fixed' top='0' left='0' width='100vw' height='100vh' isolation='isolate'>
          <video zindex='-1' className='vidFile' id='video' playsInline='' autoPlay muted loop poster={vidPoster} >
            <source src={vidMp4}  type="video/mp4" />
            <source src={vidWebm} type="video/webm" />
            <source src={vidOgv} type="video/ogv" />
          </video> 
        </Flex>
        <Flex flexDir='column' pos='fixed' zIndex='2' w='100vw'  h='100vh' justifyContent='center' alignItems='center' >
          <Text as='h1' margin='0px' lineHeight='100px' zIndex='2' fontSize={['10vw', '10vw', '5vw','5vw']} color='#fff' fontFamily='Helvetica' fontWeight='bolder' >-Post-</Text>
          <Text as='h3' margin='0px' fontStyle='italic' color='#fff' zIndex='3'>HiLo/YOW+ Collaborative</Text>
        
         
        </Flex>
      </Flex>
      <Flex 
        id='intro'
        zIndex='3' 
        color='#fff' 
        display='inline-flex' 
        alignItems='center' 
        justifyContent='center' 
        flexDirection='column' 
        bg={`${colourBg[Math.floor(Math.random()*colourBg.length)]}`} 
        bgImage={`url(${postBg})`} 
        bgRepeat='no-repeat' 
        bgSize={['270px', '270px', '600px', '600px']} 
        backgroundPosition={['right 5% bottom -17%','right 5% bottom -17%','right 0% bottom 0%','right 0% bottom 0%']} 
        w='100vw' 
        h='100vh' 
        pos='relative' 
        zindex='4'
      >
        <Box w={['90%', '90%', '50%', '50%']} >
          <Text as='h1' margin='0px' lineHeight='100px' zIndex='3' fontSize={['10vw', '10vw', '5vw','5vw']} fontFamily='Helvetica' fontWeight='bolder' >-Post-</Text>
          <Text textAlign='justify' m='0 0 20px 0' as='p' >
            We are delighted to announce that HiLo/YOW+, a design/research collaborative with the <Link textDecor='underline' href='https://www.instagram.com/hilolab.sala/' isExternal>@hilolab.sala</Link> at <Link textDecor='underline' href='https://www.instagram.com/ubcsala/' isExternal>@ubcsala</Link> and the YOW+ collective at <Link isExternal textDecor='underline' href='https://www.instagram.com/carleton_architecture/'>@carleton_architecture</Link> - has been shortlisted as one of four teams to curate the Canadian Pavilion at the 2023 Venice Architecture Biennale. 
          </Text>
          <Text textAlign='justify' as='p'>
            Thank you to the <Link textDecor='underline' href='https://www.instagram.com/canada.council/' isExternal>@canada.council</Link> and to the jury for this acknowledgement and our congratulations to the other teams! We’re looking forward to what comes next, and to sharing our proposal - titled “-Post-“ with all of you.
          </Text>
        </Box>
      </Flex>
      <Flex 
        display='inline-flex' 
        zIndex='3' 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center' 
        w='100vw' 
        h='100vh'
        bgImage={`url(${Planes})`} 
        bgRepeat='no-repeat' 
        bgPos={['right', 'right' , 'top left' , 'top left']} 
        bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']} 
        bgSize={`cover`} 
        pos='relative' 
      >
        <Box 
          pos='absolute' 
          zindex='4' 
          background='rgba(0,0,0,0.5)' 
          w='100vw' 
          h='100vh'></Box>
        <Box 
          w='50%' 
          zindex='5' 
          textAlign='center' 
          pos='relative' >
          <Text as='h2' color='#fff'>
            [Design Reverie / Inspirations / Reflections] Kong on a stack of cash.
          </Text>
        </Box>
        
      </Flex>
      <Flex 
        color='#3d3b46' 
        zIndex='3' 
        display='inline-flex' 
        alignItems='center' 
        justifyContent='center' 
        flexDirection='column' 
        bg='#c7e416' 
        bgImage={`url(${postBgTwo})`} 
        bgRepeat='no-repeat' 
        bgSize={['420px', '420px', '650px', '650px']} 
        backgroundPosition={[
          'left 5% top -10%',
          'left 5% top -10%',
          'left 0% top 0%',
          'left 0% top 0%'
        ]} 
        w='100vw' 
        minHeight='100vh' 
        pos='relative' 
        zindex='4'
      >
        <Box  >
          <Text as='h1' margin='0px' lineHeight='100px' zIndex='3' fontSize={['5vw', '5vw', '3vw','3vw']} color='#3d3b46' fontFamily='Helvetica' textAlign='center' fontWeight='bolder' >-Team-</Text>
          <List m='0' display='inline-flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
          {teamMembers.map(member => 
            <ListItem
              className='team-member'
              m='2em' 
              key={member.name}
              
            >
              <Box 
                className='team-overlay'
                borderRadius='125px' 
                zIndex='3' 
                bgColor='#c7e416' 
                blendMode='darken' 
                pointerEvents='none'
                w='250px' 
                h='250px' 
                position='absolute'
              />
              <Box className="team-thumb" display='inline-flex'  borderRadius='125px' w='250px' h='250px' overflow='hidden' bgColor='pink' >
                <Image 
                  filter='grayscale(100%)' 
                  w='100%' objectFit='cover' 
                  src={member.photo} 
                  title={member.name} 
                  alt={`${member.name} thumbnail`}  
                  
                />
              </Box>
              <Text as='p' fontSize='0.9rem' textAlign='center'><strong>{member.name}</strong> / <em>{member.org}</em></Text>
            </ListItem>
          )}
          </List>
        </Box>
      </Flex>
      <Flex 
        display='inline-flex' 
        zIndex='3' 
        flexDirection='column' 
        alignItems='center' 
        justifyContent='center' 
        w='100vw' 
        h='100vh'
        bgImage={`url(${Stump})`} 
        bgRepeat='no-repeat' 
        bgPos={['right', 'right' , 'top left' , 'top left']} 
        bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']} 
        bgSize='cover' 
        pos='relative' 
        >
        <Box pos='absolute' zindex='4' background='rgba(0,0,0,0.5)' w='100vw' h='100vh'></Box>
        <Box w='50%' zindex='5' textAlign='center' pos='relative' >
          <Text as='h2' color='#fff'>
          [Design Reverie / Inspirations / Reflections] A cut Sequioa, in Sequioa National Park, California, ca. 1910. Photographer unknown. Collection Library of Congress
          </Text>
        </Box>
        
      </Flex>

      
      <MyParallaxComponent />
      
        <Flex 
          display='inline-flex' 
          zIndex='1' 
          flexDirection='column' 
          alignItems='center' 
          justifyContent='center' 
          w='100vw' h='100vh' 
          
          pos='relative' 
          >
            <Box pos='absolute' zindex='4' background='rgba(0,0,0,0.5)' w='100vw' h='100vh'></Box>
                
          </Flex>
      
    </main>
  )
}

export default IndexPage
