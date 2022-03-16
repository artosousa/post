import React from 'react'
import { FormattedMessage } from 'react-intl'
import { 
  List,
  Text
} from "@chakra-ui/react";
import TeamMember from './member'
import Piper from '../images/piper.jpeg'
import Suzanne from '../images/suzanne.png'
import Ozayr from '../images/Ozayr.jpeg'
import Balir from '../images/blair.jpeg'
import Thena from '../images/thena.jpeg'

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
        <List m='0' display='inline-flex' flexDirection='row' flexWrap='wrap' alignItems='center' justifyContent='center'>
          {data.members.map((member, index) => {
            return(
              <>
                <TeamMember data={member} key={index} />
              </>
            )
          })}
        </List>
      </>
  )
}

