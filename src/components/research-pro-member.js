import React from 'react';
import propTypes from 'prop-types';

import {Avatar, Flex, Text} from '@chakra-ui/react';

const AdvisoryMember = props => {
  const {data} = props;
  return (
    <>
      <Flex
        flexDir="column"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Avatar
          size={['2xl']}
          filter="grayscale(100%)"
          src={data.photo}
          title={data.name}
          alt={`${data.name} thumbnail`}
          marginBottom="20px"
        />

        <Text as="p" fontSize="0.9rem" textAlign="center">
          {data.name}
        </Text>
        <Text as="p" fontSize="0.9rem" textAlign="center">
          {data?.team}
        </Text>
      </Flex>
    </>
  );
};

AdvisoryMember.propTypes = {
  data: propTypes.object
};

export default AdvisoryMember;
