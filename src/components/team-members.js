import React from 'react';
import TeamMember from './member';
import {FormattedMessage} from 'react-intl';
import {SimpleGrid, Text} from '@chakra-ui/react';
import {teamData} from '../data/team-data';

const data = teamData;
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
    </>
  );
}
