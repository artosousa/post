import React from 'react'
import { FormattedMessage } from 'react-intl'
import { 
  Avatar,
  Badge,
  Divider,
  Flex,
  List,
  ListItem,
  Text
} from "@chakra-ui/react";
import TeamMember from './member'
import Piper from '../images/piper.jpg'
import Suzanne from '../images/suzanne.png'
import Ozayr from '../images/Ozayr.jpeg'
import Balir from '../images/blair.jpeg'
import Thena from '../images/thena.jpeg'

const supports = ['Émélie Desrochers-Turgeon', 'Shelby Hagerman', 'Anna Longrigg', 'Connor O\'Grady', 'Rehab Salama']
export default function TeamMembers(){
  const data = {members: [
      {
        name: 'Piper Bernbaum ',
        org: 'YOW+',
        photo: `${Piper}`,
        title: 'piper-title',
        bio: 'piper-bio'
      },
      {
        name: 'Suzanne Harris-Brandts',
        org: 'YOW+',
        photo: `${Suzanne}`,
        title: 'suzanne-title',
        bio: 'suzanne-bio'
      },
      {
        name: 'Ozayr Saloojee',
        org: 'YOW+',
        photo:`${Ozayr}`,
        title: 'ozayr-title',
        bio: 'ozayr-bio'
      },
      {
        name: 'Blair Satterfield',
        org: 'HiLo',
        photo:`${Balir}`,
        title: 'blair-title',
        bio: 'blair-bio'
      },
      {
        name: 'Thena Tak',
        org: 'HiLo',
        photo:`${Thena}`,
        title: 'thena-title',
        bio: 'thena-bio'
      }
    ]
  }
 
  return (
      <>
        <Text 
          as='h1' 
          margin='0px' 
          lineHeight='100px' 
          zIndex='3' 
          fontSize={['5vw', '5vw', '3vw','3vw']} 
          color='#3d3b46' 
          fontFamily='Helvetica' 
          textAlign='center' 
          fontWeight='bolder' 
        >
            -<FormattedMessage id='team-title'/>-
        </Text>
        <List m='0' w='100vw' display='inline-flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
          {data.members.map((member, index) => {
            return(
              <TeamMember data={member} key={index} />
            )
          })}
        </List>
        
        <Flex w='100vw' flexDir='column'  alignItems='center' justifyContent='center'>
          <Divider borderColor='rgba(0,0,0,0.4)' m='75px 0' />
          <Text as='h2' fontSize='1.6rem' m='0 0 30px 0' fontWeight='bolder' fontFamily='helvetica'>
            <FormattedMessage id='support-title' />
          </Text>
          <List m={['0 0 75px 0','0 0 75px 0','0 0 75px 0','0 0 55px 0']} w='100vw' display='inline-flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
              {supports.map((support, index) => {
                return (
                      <ListItem w='280px' m='10px 10px' key={index}>
                        <Flex flexDir='row'>
                          <Badge 
                            variant='outline' 
                            p='10px' 
                            w='100%'
                            flexDir='row' 
                            display='inline-flex' 
                            alignItems='center' 
                            justifyContent='flex-start'
                            color='#000' 
                            boxShadow='inset 0 0 0px 1px rgba(0,0,0,0.5)'
                            borderRadius='50px'
                            bg='rgba(0,0,0,0.2)'

                            _hover={{bg:'white'}}
                          >
                            <Avatar marginRight='20px' name={support} bg='#000' color='#fff'/>
                            <Text as='p'>{support}</Text>
                          </Badge>
                        </Flex>
                      </ListItem>
                )
              })}
          </List>
        </Flex>
      </>
  )
}

