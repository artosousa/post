import * as React from 'react';

import Otter from '../images/otter.png';
import PostBgTwo from '../images/postsBgTwo.png';
import {Flex, Image, Text} from '@chakra-ui/react';
import {FormattedMessage} from 'react-intl';
import {Parallax} from 'react-skrollr';

const animateData = {
  'data-top-bottom': 'transform: translate(40vw, 0vh);',
  'data-bottom-top': 'transform: translate(70vw, 50vh) ; '
};

const LoadableParallaxTwo = () => {
  return (
    <Flex
      overflow="hidden"
      color="#000"
      zIndex="3"
      display="inline-flex"
      alignItems={['center', 'center', 'flex-start', 'flex-start']}
      justifyContent="center"
      flexDirection="column"
      bg="#e4194f"
      bgImage={`url(${PostBgTwo})`}
      bgRepeat="no-repeat"
      bgSize={['420px', '420px', '650px', '650px']}
      backgroundPosition={[
        'left 5% top -10%',
        'left 5% top -10%',
        'left 0% top 0%',
        'left 0% top 0%'
      ]}
      w="100vw"
      minHeight="110vh"
      pos="relative"
      zindex="4"
    >
      <Parallax data={animateData}>
        <Flex overflow="hidden" w={['100vw', '100vw', '65vw', '65vw']}>
          <Image
            src={Otter}
            title={
              'City limits sign near Mundy Pond, A panorama of the port of Vancouver from 1910'
            }
            w="105%"
            objectFit="cover"
          />
        </Flex>
      </Parallax>

      <Flex
        flexDir="column"
        w={['90vw', '90vw', '30vw', '30vw']}
        pos={['relative', 'relative', 'absolute', 'absolute']}
        left="5vw"
        textAlign={['left', 'left', 'right', 'right']}
        p={['20px', '20px', '0 5vw 0 0', '0 5vw 0 0']}
        color="#fff"
      >
        <Text
          as="h1"
          margin="0px"
          zIndex="3"
          fontSize={['10vw', '10vw', '3vw', '3vw']}
          fontFamily="Helvetica"
          fontWeight="bolder"
        >
          -Post-
        </Text>
        <Text as="p" zIndex="3" lineHeight="2rem">
          <FormattedMessage
            values={{
              p: msg => <p>{msg}</p>
            }}
            id="otter-text"
          />
        </Text>
      </Flex>
    </Flex>
  );
};

export default LoadableParallaxTwo;
