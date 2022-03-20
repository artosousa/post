import React from 'react';
import ResearchProMember from './research-pro-member';
import {Flex, SimpleGrid, Text} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import {ResearchProData} from '../data/research-production-data';

const data = ResearchProData;

export default function ResearchProTeam() {
  return (
    <>
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Text
          as="h2"
          w="80vw"
          zIndex="3"
          fontSize={['2rem', '2rem', '2rem', '2rem']}
          fontFamily="Helvetica"
          fontWeight="bolder"
        >
          <FormattedMessage id="research-pro-title" />
        </Text>
        <SimpleGrid
          mt="1rem"
          w={{base: '100vw', md: '80vw'}}
          p={{base: '2rem', md: '0'}}
          columns={{base: '2', md: '4', lg: '6'}}
          spacing={{base: '5', md: '10'}}
        >
          {data.members.map((member, index) => {
            return <ResearchProMember data={member} key={index} />;
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}
