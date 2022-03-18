import Balir from '../images/blair.jpeg';
import Ozayr from '../images/Ozayr.jpeg';
import Piper from '../images/piper.jpg';
import React from 'react';
import Suzanne from '../images/suzanne.png';
import TeamMember from './member';
import Thena from '../images/thena.jpeg';
import {Avatar, Divider, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';

const supports = [
  'Émélie Desrochers-Turgeon',
  'Shelby Hagerman',
  'Anna Longrigg',
  "Connor O'Grady",
  'Rehab Salama'
];
const data = {
  members: [
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
      photo: `${Ozayr}`,
      title: 'ozayr-title',
      bio: 'ozayr-bio'
    },
    {
      name: 'Blair Satterfield',
      org: 'HiLo',
      photo: `${Balir}`,
      title: 'blair-title',
      bio: 'blair-bio'
    },
    {
      name: 'Thena Tak',
      org: 'HiLo',
      photo: `${Thena}`,
      title: 'thena-title',
      bio: 'thena-bio'
    }
  ]
};
export default function TeamMembers() {
  return (
    <>
      <Text
        as="h1"
        margin="0px"
        lineHeight="100px"
        zIndex="3"
        fontSize={['5vw', '5vw', '3vw', '3vw']}
        color="#3d3b46"
        fontFamily="Helvetica"
        textAlign="center"
        fontWeight="bolder"
      >
        -<FormattedMessage id="team-title" />-
      </Text>
      <SimpleGrid w="100vw" columns={{base: '1', md: '3', lg: '5'}} spacing={0}>
        {data.members.map((member, index) => {
          return <TeamMember data={member} key={index} />;
        })}
      </SimpleGrid>

      <Flex
        w="100vw"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Divider borderColor="rgba(0,0,0,0.4)" m="75px 0" />
        <Text
          as="h2"
          fontSize="1.6rem"
          m="0 0 30px 0"
          fontWeight="bolder"
          fontFamily="helvetica"
        >
          <FormattedMessage id="support-title" />
        </Text>
        <SimpleGrid
          w="90%"
          columns={{base: '1', md: '3', lg: '5'}}
          spacing={10}
        >
          {supports.map((support, index) => {
            return (
              <Flex
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                key={index}
              >
                <Avatar
                  w="150px"
                  h="150px"
                  bg="#78890f"
                  color="#fff"
                  marginBottom="20px"
                />
                <Text as="p">{support}</Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
