import React from 'react';
// import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types';

import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';

const Collaborator = props => {
  const [collaboratorBio, setCollaboratorBio] = React.useState('md');
  const {
    isOpen: isCollaboratorOpen,
    onOpen: onCollaboratorOpen,
    onClose: onCollaboratorClose
  } = useDisclosure();

  const handleCollaborator = newCollaborator => {
    setCollaboratorBio(newCollaborator);
    onCollaboratorOpen();
  };
  const {data} = props;
  return (
    <>
      <Flex
        flexDir="column"
        cursor="pointer"
        onClick={() => handleCollaborator(collaboratorBio)}
        _hover={{
          textDecor: 'underline'
        }}
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
          transition="transform 250ms"
          _hover={{
            transform: 'translateY(-10px)'
          }}
        />

        <Text as="p" fontSize="0.9rem" textAlign="center">
          {data.name}
        </Text>

        <Drawer
          onClose={onCollaboratorClose}
          isOpen={isCollaboratorOpen}
          size="xl"
        >
          <DrawerOverlay backdropFilter="blur(10px)" />
          <DrawerContent color="#fff">
            <DrawerCloseButton zIndex="11" />
            <DrawerHeader display="inline-flex" flexDir="row" bg="#816411">
              <Avatar size="lg" filter="grayscale(100%)" src={data.photo} />
              <Box
                ml="3"
                display="inherit"
                justifyContent="center"
                flexDir="column"
              >
                <Text fontFamily="helvetica" fontWeight="bold">
                  {data.name}
                </Text>
              </Box>
            </DrawerHeader>
            <DrawerBody className="bio-copy" bg="#a68011">
              <Text lineHeight="32px">{data.name}</Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

Collaborator.propTypes = {
  data: propTypes.object
};

export default Collaborator;
