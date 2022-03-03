import * as React from "react"
import { ParallaxProvider, Parallax } from "react-skrollr"
import { Flex,Image,Text } from "@chakra-ui/react"
import Base from '../images/base.png'

const animateData = {
    "data-top-bottom": "transform: translate(0px, -200px);",
    "data-bottom-top": "transform: translate(-300px, 400px) ; "
}
const animateRightText = {
    "data-top-bottom": "transform: translate(0px, 0px); ",
    "data-bottom-top": "transform: translate(50px, 0px) ;  "
}

const LoadableParallax = () => {
    return(
        <ParallaxProvider
            init={{
            smoothScrollingDuration: 400,
            smoothScrolling: true,
            forceHeight: false
            }}
        >
            <Parallax data={animateData}>
                <Flex  overflow='hidden' w={['100vw', '100vw', '65vw', '65vw']}>
                    <Image src={Base} title={`laurentian mlitary base in St-Adolphe-d'Howard, Quebec`} w='100%' objectFit='cover' />
                </Flex>
            </Parallax>

            <Parallax data={animateRightText}>
                <Flex 
                    flexDir='column' 
                    w='30vw'
                    pos='absolute'
                    right='2vw'
                    textAlign='right'
                    p='0 5vw 0 0'
                    color='#fff'
                >
                    <Text 
                        as='h1' 
                        margin='0px' 
                        zIndex='3' 
                        fontSize={['5vw', '5vw', '3vw','3vw']} 
                        fontFamily='Helvetica' 
                        fontWeight='bolder' 
                    >
                        -Post-
                    </Text>
                    <Text 
                        as='p'
                        zIndex='3' 
                        fontSize='14px' 
                        fontFamily='Helvetica' 
                        lineHeight='2rem'
                    >
                        The now abandoned Laurentian military base begin operations in 1950, in St. Adolphe-d’Howard, Quebec. Operated by NORAD, the base was part of the Pinetree Line, a network of 33 radar stations under join Canadian and American control, established to monitor possible air attaches from the former Soviet Union. The base was closed in 1987. Source -urbexplayground and photographs by Pierre Bourgault.
                    </Text>
                </Flex>  
            </Parallax>
        </ParallaxProvider>
    )
}

export default LoadableParallax