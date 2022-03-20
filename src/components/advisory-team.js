import AdvisoryMember from './advisory-member';
import React from 'react';
import ResearchProTeam from './research-pro-team';
import {ComissionedData} from '../data/commissioned-data';
import {Divider, Flex, SimpleGrid, Text} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import {advisoryData} from '../data/advisory-team-data';
import {curatorialAdvisor} from '../data/curatorial-advisors-data';

const curatorialData = curatorialAdvisor;
const data = advisoryData;
const commissionWorks = ComissionedData;

export default function AdvisoryTeam() {
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
          <FormattedMessage id="curatorial-advisor" />
        </Text>
        <SimpleGrid
          mt="1rem"
          w={{base: '100vw', md: '80vw'}}
          p={{base: '2rem', md: '0'}}
          columns={{base: '2', md: '4', lg: '6'}}
          spacing={{base: '5', md: '10'}}
        >
          {curatorialData.curators.map((curator, index) => {
            return <AdvisoryMember data={curator} key={index} />;
          })}
        </SimpleGrid>
      </Flex>
      <Divider mt="4rem" mb="3rem" />
      <Flex
        mt="2rem"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text
          as="h3"
          w="80vw"
          zIndex="3"
          fontSize={['2rem', '2rem', '2rem', '2rem']}
          fontFamily="Helvetica"
          fontWeight="bolder"
        >
          <FormattedMessage id="content-advisor" />
        </Text>
        <SimpleGrid
          w={{base: '100vw', md: '80vw'}}
          p={{base: '2rem', md: '0'}}
          columns={{base: '2', md: '4', lg: '6'}}
          spacing={{base: '5', md: '10'}}
        >
          {data.advisors.map((advisor, index) => {
            return <AdvisoryMember data={advisor} key={index} />;
          })}
        </SimpleGrid>
      </Flex>
      <Divider mt="4rem" mb="3rem" />
      <Flex
        mt="2rem"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
      >
        <Text
          as="h3"
          w="80vw"
          zIndex="3"
          fontSize={['2rem', '2rem', '2rem', '2rem']}
          fontFamily="Helvetica"
          fontWeight="bolder"
        >
          <FormattedMessage id="commissioned-works" />
        </Text>
        <SimpleGrid
          mt="1rem"
          w={{base: '100vw', md: '80vw'}}
          columns={{base: '2', md: '4', lg: '6'}}
          spacing={{base: '5', md: '10'}}
        >
          {commissionWorks.workers.map((commission, index) => {
            return <AdvisoryMember data={commission} key={index} />;
          })}
        </SimpleGrid>
      </Flex>
      <Divider mt="4rem" mb="3rem" />
      <ResearchProTeam />
    </>
  );
}
