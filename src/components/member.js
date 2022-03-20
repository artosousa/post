import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import {
  Avatar,
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';

const colourBg = ['#e31e3d', '#e5501c', '#e28118'];
let pickedBg;

const TeamMember = props => {
  const [memberBio, setMemberBio] = React.useState('md');
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose
  } = useDisclosure();

  const handleMember = newMember => {
    setMemberBio(newMember);
    onDrawerOpen();
    pickedBg = colourBg[Math.floor(Math.random() * colourBg.length)];
  };
  const {data} = props;
  return (
    <>
      <Box
        className="team-member"
        m="15px 0"
        display="inline-flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        onClick={() => handleMember(memberBio)}
        _hover={{
          textDecor: 'underline'
        }}
      >
        <Avatar
          w="220px"
          h="220px"
          filter="grayscale(100%)"
          title={data.name}
          src={data.photo}
          alt={`${data.name} thumbnail`}
          marginBottom="20px"
          transition="transform 250ms"
          _hover={{
            transform: 'translateY(-10px)'
          }}
        />
        <Box w="70%">
          <Text as="p" fontSize="0.9rem" textAlign="center">
            <strong>{data.name}</strong>
            <Badge
              marginLeft="5px"
              p="0 8px"
              variant="outline"
              color="#000"
              boxShadow="inset 0 0 0px 1px #000;"
            >
              {data.org}
            </Badge>
          </Text>
        </Box>

        <Drawer onClose={onDrawerClose} isOpen={isDrawerOpen} size="xl">
          <DrawerOverlay backdropFilter="blur(10px)" />
          <DrawerContent color="#fff">
            <DrawerCloseButton zIndex="11" />
            <DrawerHeader
              bg={pickedBg}
              display="inline-flex"
              flexDir="row"
              filter="brightness(85%)"
            >
              <Avatar size="lg" filter="grayscale(100%)" src={data.photo} />

              <Box
                ml="3"
                display="inherit"
                justifyContent="center"
                flexDir="column"
              >
                <Text fontFamily="helvetica" fontWeight="bold">
                  {data.name}
                  <Badge
                    marginLeft="5px"
                    p="0 8px"
                    variant="outline"
                    color="white"
                    boxShadow="inset 0 0 0px 1px #fff;"
                  >
                    {data.org}
                  </Badge>
                </Text>
              </Box>
            </DrawerHeader>
            <DrawerBody className="bio-copy" bg={pickedBg}>
              <Text lineHeight="32px">
                <FormattedMessage
                  values={{
                    p: msg => <p>{msg}</p>,
                    worldmatter: msg => (
                      <a
                        href="http://www.worldofmatter.net/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {msg}
                      </a>
                    )
                  }}
                  id={data.bio}
                />
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

TeamMember.propTypes = {
  data: PropTypes.object
};

export default TeamMember;
