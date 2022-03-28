import React from 'react';
import propTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {
  Avatar,
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

const AdvisoryMember = props => {
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
        justifyContent="flex-start"
      >
        <Avatar
          size={['2xl']}
          filter="grayscale(100%)"
          src={data.photo}
          title={data.name}
          alt={`${data.name} jpg`}
          marginBottom="20px"
          transition="transform 250ms"
          _hover={{
            transform: 'translateY(-10px)'
          }}
        />

        <Text as="p" fontSize="0.9rem" textAlign="center">
          {data.name}
        </Text>
        <Text as="p" fontSize="0.9rem" textAlign="center">
          {data?.team}
        </Text>
        <Drawer
          onClose={onCollaboratorClose}
          isOpen={isCollaboratorOpen}
          size="xl"
        >
          <DrawerOverlay backdropFilter="blur(10px)" />
          <DrawerContent color="#fff">
            <DrawerCloseButton zIndex="11" />
            <DrawerHeader display="inline-flex" flexDir="row" bg="#4c8710">
              <Avatar size="lg" filter="grayscale(100%)" src={data.photo} />
              <Flex ml="3" justifyContent="center" flexDir="column">
                <Text fontFamily="helvetica" fontWeight="bold">
                  {data.name}{' '}
                </Text>
              </Flex>
            </DrawerHeader>
            <DrawerBody className="bio-copy" bg="#63a414">
              <FormattedMessage
                values={{
                  p: msg => <p>{msg}</p>
                }}
                id={data.bio}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
};

AdvisoryMember.propTypes = {
  data: propTypes.object
};

export default AdvisoryMember;
