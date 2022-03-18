import Ann from '../images/piper.jpg';
import Anna from '../images/suzanne.png';
import Partner from './partner';
import React from 'react';
import {Flex, SimpleGrid, Text} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
// import Aziza from '../images/Ozayr.jpeg'
// import Zach from '../images/blair.jpeg'
// import Nana from '../images/thena.jpeg'
// import Karen from '../images/Ozayr.jpeg'
// import Lisa from '../images/blair.jpeg'
// import Linda from '../images/thena.jpeg'

const data = {
  partners: [
    {
      name: 'Ann Y. K. Choi',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Anna ',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Ann Y. K. Choi',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Anna',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Ann Y. K. Choi',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Anna',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Anna',
      photo: Ann,
      bio: 'ann-bio'
    },

    {
      name: 'Mike York',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Heath Kirchart',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Arthur Sousa',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Mike York',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Heath Kirchart',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Arthur Sous',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Mike York',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Heath Kirchart',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Arthur Sous',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Mike York',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Heath Kirchart',
      photo: Ann,
      bio: 'ann-bio'
    },
    {
      name: 'Arthur Sous',
      photo: Anna,
      bio: 'ann-bio'
    },
    {
      name: 'Arthur Sous',
      photo: Anna,
      bio: 'ann-bio'
    }
  ]
};

export default function Partners() {
  return (
    <>
      <Text
        as="h3"
        margin="0px"
        lineHeight="100px"
        zIndex="3"
        fontSize={['2rem', '2rem', '2rem', '2rem']}
        fontFamily="Helvetica"
        textAlign="center"
        fontWeight="bolder"
      >
        -<FormattedMessage id="partners-title" />-
      </Text>

      <Flex alignItems="center" justifyContent="center">
        <SimpleGrid
          w={{base: '100vw', md: '80vw'}}
          p={{base: '2rem', md: '0'}}
          columns={{base: '3', md: '4', lg: '6'}}
          spacing={{base: '5', md: '10'}}
        >
          {data.partners.map((partner, index) => {
            return <Partner data={partner} key={index} />;
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
