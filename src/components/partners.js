import React from 'react'
import { Parallax } from "react-skrollr"
import { FormattedMessage } from 'react-intl'
import { 
    List,
    Text
} from "@chakra-ui/react";
import Partner from './partner'
import Ann from '../images/piper.jpg'
import Anna from '../images/suzanne.png'
// import Aziza from '../images/Ozayr.jpeg'
// import Zach from '../images/blair.jpeg'
// import Nana from '../images/thena.jpeg'
// import Karen from '../images/Ozayr.jpeg'
// import Lisa from '../images/blair.jpeg'
// import Linda from '../images/thena.jpeg'



const data = {partners: [
    {
        name: 'Ann Y. K. Choi',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Anna ',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Ann Y. K. Choi',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Anna',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Ann Y. K. Choi',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Anna',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Anna',
        photo : Ann,
        bio : 'ann-bio'
    },
    
    {
        name: 'Mike York',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Heath Kirchart',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Arthur Sous',
        photo : Anna,
        bio : 'ann-bio'
    },{
        name: 'Mike York',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Heath Kirchart',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Arthur Sous',
        photo : Anna,
        bio : 'ann-bio'
    },{
        name: 'Mike York',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Heath Kirchart',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Arthur Sous',
        photo : Anna,
        bio : 'ann-bio'
    },{
        name: 'Mike York',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Heath Kirchart',
        photo : Ann,
        bio : 'ann-bio'
    },
    {
        name: 'Arthur Sous',
        photo : Anna,
        bio : 'ann-bio'
    },
    {
        name: 'Arthur Sous',
        photo : Anna,
        bio : 'ann-bio'
    }
]
}

export default function Partners(){
  
  
//   {
//     name: 'Piper Bernbaum ',
//     org: 'YOW+',
//     photo: `${Piper}`,
//     title: 'piper-title',
//     bio: 'piper-bio'
//   },
  return (
    <>
        <Text 
          as='h3' 
          margin='0px' 
          lineHeight='100px' 
          zIndex='3' 
          fontSize={['2rem', '2rem', '2rem','2rem']} 
          fontFamily='Helvetica' 
          textAlign='center' 
          fontWeight='bolder' 
        >
            -<FormattedMessage id='partners-title'/>-
        </Text>

        <List 
            w='100%' 
            display='inline-flex' 
            flexDir='row' 
            flexWrap='wrap' 
            alignItems='center' 
            justifyContent='center'
        >
            {data.partners.map((partner, index) => {
                return( <Partner data={partner} key={index} />)
            })}
        </List>
      </>
  )
}

