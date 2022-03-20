import '../css/style.css';
import AdvisoryTeam from '../components/advisory-team';
import HighJump from '../images/highjump.jpeg';
import Horses from '../images/stmarks.jpeg';
import Loadable from 'react-loadable';
import Planes from '../images/planes.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';
import ShareImg from '../images/shareImg.jpg';
import Stump from '../images/stump.jpg';
import TeamMembers from '../components/team-members';
import postBg from '../images/postsBg.png';
import postBgThree from '../images/postsBgThree.png';
import postBgTwo from '../images/postsBgTwo.png';
import vidMp4 from '../videos/heroVid.mp4';
import vidOgv from '../videos/heroVid.ogv';
import vidPoster from '../images/vidPoster.jpg';
import vidWebm from '../videos/heroVid.webm';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Link,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import {FormattedMessage, IntlProvider} from 'react-intl';
import {Link as GatsbyLink} from 'gatsby';
import {Helmet} from 'react-helmet';
import {ParallaxProvider} from 'react-skrollr';

const colourBg = ['#e31e3d', '#e5501c', '#e28118'];

// markup

const loader = () => <div>Loading Content ...</div>;
const MyParallaxComponent = Loadable({
  loader: () => import('../components/LoadableParallax'),
  loading: loader
});
const MyParallaxComponentTwo = Loadable({
  loader: () => import('../components/LoadableParallaxTwo'),
  loading: loader
});
const OverlayOne = () => (
  <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
);
const IndexPage = props => {
  const {
    isOpen: isModalopen,
    onOpen: onModalOpen,
    onClose: onModalClose
  } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const {language, messages} = props.pageContext;
  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 100,
        smoothScrolling: true,
        forceHeight: false
      }}
    >
      <IntlProvider locale={language} messages={messages}>
        <main id="skrollr-body">
          <Flex
            position="fixed"
            w="100vw"
            h="px"
            alignItems="flex-end"
            justify-content="center"
            zIndex="10"
            flexDir="column"
          >
            <List
              w="100vw"
              display="inherit"
              flexDirection="row"
              alignItems="flex-end"
              justifyContent="flex-end"
              p="0 1.5vw 0 0"
              bg="rgba(0,0,0,0.8)"
            >
              <ListItem m="5px">
                <Link
                  color="#fff"
                  as={GatsbyLink}
                  to="/"
                  _hover={{textDecor: 'underline'}}
                >
                  EN
                </Link>
              </ListItem>
              <ListItem m="5px" color="#fff">
                |
              </ListItem>
              <ListItem m="5px">
                <Link color="#fff" as={GatsbyLink} to="/fr">
                  FR
                </Link>
              </ListItem>
            </List>
          </Flex>

          <Helmet>
            <meta charSet="utf-8" />
            <title>
              -Post- | a design/research collaborative from HiLo/YOW+.
            </title>
            <meta
              name="description"
              content="We are delighted to announce that HiLo/YOW+, a design/research collaborative with the @hilolab.sala at @ubcsala and the YOW+ collective at @carleton_architecture - has been shortlisted as one of four teams to curate the Canadian Pavilion at the 2023 Venice Architecture Biennale. Thank you to the @canada.council and to the jury for this acknowledgement and our congratulations to the other teams! We’re looking forward to what comes next, and to sharing our proposal - titled “-Post-“ with all of you."
            />
            <meta property="og:image" content={ShareImg} />
            <meta property="og:image:width" content="400" />
          </Helmet>
          <Flex w="100vw" h="100vh">
            <Box
              pos="absolute"
              zIndex="2"
              background="rgba(0,0,0,0.7)"
              w="100vw"
              h="100vh"
            ></Box>
            <Flex
              position="fixed"
              top="0"
              left="0"
              width="100vw"
              height="100vh"
              isolation="isolate"
            >
              <video
                zindex="-1"
                className="vidFile"
                id="video"
                playsInline=""
                autoPlay
                muted
                loop
                poster={vidPoster}
              >
                <source src={vidMp4} type="video/mp4" />
                <source src={vidWebm} type="video/webm" />
                <source src={vidOgv} type="video/ogv" />
              </video>
            </Flex>
            <Flex
              flexDir="column"
              pos="fixed"
              zIndex="2"
              w="100vw"
              h="100vh"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                as="h1"
                margin="0px"
                lineHeight="100px"
                zIndex="2"
                fontSize={['10vw', '10vw', '5vw', '5vw']}
                color="#fff"
                fontFamily="Helvetica"
                fontWeight="bolder"
              >
                -Post-
              </Text>
              <Text
                as="h3"
                margin="0px"
                fontStyle="italic"
                color="#fff"
                zIndex="3"
              >
                HiLo/YOW+ <FormattedMessage id="hero-title" />
              </Text>
              <Button
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onModalOpen();
                }}
                bg={`${colourBg[Math.floor(Math.random() * colourBg.length)]}`}
                color="#fff"
                m="20px 0px"
                transition="transform 250ms"
                borderRadius="0"
                _hover={{
                  filter: 'brightness(65%)',
                  transform: 'translateY(-10px)'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 26"
                  width="16"
                  height="16"
                  fill="#fff"
                  className="play-btn"
                >
                  <polygon
                    className="play-btn__svg"
                    points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
                  />
                  <path
                    className="play-btn__svg"
                    d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
                  />
                </svg>
                <FormattedMessage id="video-btn" />
              </Button>

              <Modal
                isOpen={isModalopen}
                onClose={onModalClose}
                isCentered
                size="6xl"
                bg="blue"
                backdropFilter="blur(10px) hue-rotate(90deg)"
              >
                {overlay}
                <ModalContent>
                  <ModalCloseButton
                    zIndex="222"
                    bg="black"
                    color="#fff"
                    borderRadius="50%"
                    top="0px"
                    right="0px"
                  />
                  <ModalBody bg="black">
                    <AspectRatio ratio={16 / 9} bgColor="#000">
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url="https://www.youtube.com/watch?v=YfjrzM-DjBw"
                        playing
                        config={{
                          youtube: {
                            playerVars: {
                              controls: 1,
                              showinfo: 0
                            }
                          }
                        }}
                      />
                    </AspectRatio>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
          <Flex
            id="intro"
            zIndex="3"
            color="#fff"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bg={`${colourBg[Math.floor(Math.random() * colourBg.length)]}`}
            bgImage={`url(${postBg})`}
            bgRepeat="no-repeat"
            bgSize={['270px', '270px', '600px', '600px']}
            backgroundPosition={[
              'right 5% bottom -17%',
              'right 5% bottom -17%',
              'right 0% bottom 0%',
              'right 0% bottom 0%'
            ]}
            w="100vw"
            h="100vh"
            pos="relative"
            zindex="4"
          >
            <Box w={['90%', '90%', '50%', '50%']}>
              <Text
                as="h1"
                margin="0px"
                lineHeight="100px"
                zIndex="3"
                fontSize={['3rem', '3rem', '3rem', '3rem']}
                fontFamily="Helvetica"
                fontWeight="bolder"
              >
                -Post-
              </Text>

              <FormattedMessage
                id="about-text"
                values={{
                  p: msg => <p>{msg}</p>,
                  hilolink: msg => (
                    <a
                      href="https://www.instagram.com/hilolab.sala/?hl=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {msg}
                    </a>
                  ),
                  ubcsala: msg => (
                    <a
                      href="https://www.instagram.com/ubcsala/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {msg}
                    </a>
                  ),
                  carleton: msg => (
                    <a
                      href="https://www.instagram.com/carleton_architecture/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {msg}
                    </a>
                  ),
                  canadacouncil: msg => (
                    <a
                      href="https://www.instagram.com/canada.council/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {msg}
                    </a>
                  )
                }}
              />
            </Box>
          </Flex>
          <Flex
            display="inline-flex"
            zIndex="3"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100vw"
            h="100vh"
            bgImage={`url(${Planes})`}
            bgRepeat="no-repeat"
            bgPos={['right', 'right', 'top left', 'top left']}
            bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']}
            bgSize={'cover'}
            pos="relative"
          >
            <Box
              pos="absolute"
              zindex="4"
              background="rgba(0,0,0,0.5)"
              w="100vw"
              h="100vh"
            ></Box>
            <Box w="50%" zindex="5" textAlign="center" pos="relative">
              <Text as="h2" color="#fff">
                <FormattedMessage id="king-kong" />
              </Text>
            </Box>
          </Flex>
          <Flex
            color="#3d3b46"
            zIndex="3"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bg="#c7e416"
            bgImage={`url(${postBgTwo})`}
            bgRepeat="no-repeat"
            bgSize={['420px', '420px', '650px', '650px']}
            backgroundPosition={[
              'left 5% top -10%',
              'left 5% top -10%',
              'left 0% top 0%',
              'left 0% top 0%'
            ]}
            w="100vw"
            minHeight="100vh"
            pos="relative"
            zindex="4"
          >
            <Box w="100vw">
              <TeamMembers />
            </Box>
          </Flex>
          <Flex
            display="inline-flex"
            zIndex="3"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100vw"
            h="100vh"
            bgImage={`url(${Stump})`}
            bgRepeat="no-repeat"
            bgPos={['right', 'right', 'top left', 'top left']}
            bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']}
            bgSize="cover"
            pos="relative"
          >
            <Box
              pos="absolute"
              zindex="4"
              background="rgba(0,0,0,0.5)"
              w="100vw"
              h="100vh"
            ></Box>
            <Box w="50%" zindex="5" textAlign="center" pos="relative">
              <Text as="h2" color="#fff">
                <FormattedMessage id="sequioa" />
              </Text>
            </Box>
          </Flex>
          <Flex
            color="#fff"
            p="100px 0 0 0"
            zIndex="3"
            display="inline-flex"
            alignItems="center"
            justifyContent="flex-start"
            flexDirection="column"
            bg="#a41464"
            bgImage={`url(${postBgThree})`}
            bgRepeat="no-repeat"
            bgSize={['420px', '420px', '650px', '650px']}
            backgroundPosition={[
              'right 0% top -10%',
              'right 0% top -10%',
              'right 0% -20px 0%',
              'right 0% -20px 0%'
            ]}
            w="100vw"
            minHeight="100vh"
            pos="relative"
            zindex="4"
          >
            <Box w="100vw" pb="150px">
              <AdvisoryTeam />
            </Box>
          </Flex>

          <Flex
            display="inline-flex"
            zIndex="3"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100vw"
            h="100vh"
            bgImage={`url(${Horses})`}
            bgRepeat="no-repeat"
            bgPos={['right', 'right', 'top left', 'top left']}
            bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']}
            bgSize={'cover'}
            pos="relative"
          >
            <Box
              pos="absolute"
              zindex="4"
              background="rgba(0,0,0,0.5)"
              w="100vw"
              h="100vh"
            ></Box>
            <Box w="50%" zindex="5" textAlign="center" pos="relative">
              <Text as="h2" color="#fff">
                <FormattedMessage
                  values={{
                    p: msg => <p>{msg}</p>
                  }}
                  id="horses"
                />
              </Text>
            </Box>
          </Flex>
          <MyParallaxComponent />
          <Flex
            display="inline-flex"
            zIndex="3"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100vw"
            h="100vh"
            bgImage={`url(${HighJump})`}
            bgRepeat="no-repeat"
            bgPos={['right', 'right', 'top left', 'top left']}
            bgAttachment={['inherit', 'inherit', 'fixed', 'fixed']}
            bgSize={'cover'}
            pos="relative"
          >
            <Box
              pos="absolute"
              zindex="4"
              background="rgba(0,0,0,0.5)"
              w="100vw"
              h="100vh"
            ></Box>
            <Box w="50%" zindex="5" textAlign="center" pos="relative">
              <Text as="h2" color="#fff">
                <FormattedMessage
                  values={{
                    p: msg => <p>{msg}</p>
                  }}
                  id="high-jump"
                />
              </Text>
            </Box>
          </Flex>
          <MyParallaxComponentTwo />

          <Flex
            bg="#000"
            mt="-10px"
            color="#fff"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            p="100px"
            zIndex="5"
            pos="relative"
          >
            <Text
              as="h3"
              w="80vw"
              zIndex="3"
              fontSize={['2rem', '2rem', '2rem', '2rem']}
              fontFamily="Helvetica"
              fontWeight="bolder"
              textAlign="center"
              mb="15px"
              textDecor="underline"
            >
              <FormattedMessage id="with-thanks-title" />
            </Text>
            <Box w="55%">
              <FormattedMessage
                values={{
                  p: msg => <p>{msg}</p>
                }}
                id="with-thanks-text"
              />
            </Box>
            <Text
              as="h1"
              fontSize="2rem"
              m="20px 0 0 0"
              fontFamily="Helvetica"
              textTransform="uppercase"
              fontWeight="bolder"
            >
              <FormattedMessage id="without-post" />
            </Text>
          </Flex>
        </main>
      </IntlProvider>
    </ParallaxProvider>
  );
};

IndexPage.propTypes = {
  pageContext: PropTypes.object.isRequired
};
export default IndexPage;
