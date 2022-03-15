import * as React from "react"
import { ParallaxProvider, Parallax } from "react-skrollr"
import { Flex,Image,Text } from "@chakra-ui/react"
import { FormattedMessage } from 'react-intl'
import Base from '../images/base.png'
import postBgTwo from '../images/postsBgTwo.png'

const animateData = {
    "data-top-bottom": "transform: translate(0px, -200px);",
    "data-bottom-top": "transform: translate(-300px, 400px) ; "
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
            <Flex 
                overflow='hidden' 
                color='#000' 
                zIndex='3' 
                display='inline-flex' 
                alignItems={['center', 'center','flex-start','flex-start']} 
                justifyContent='center' 
                flexDirection='column' 
                bg='#e3711b' 
                bgImage={`url(${postBgTwo})`} 
                bgRepeat='no-repeat' 
                bgSize={['420px', '420px', '650px', '650px']} 
                backgroundPosition={['left 5% top -10%','left 5% top -10%','left 0% top 0%','left 0% top 0%']} 
                w='100vw' 
                minHeight='110vh' 
                pos='relative' 
                zindex='4'
            >
                <Parallax data={animateData}>
                    <Flex  overflow='hidden' w={['100vw', '100vw', '65vw', '65vw']}>
                        <Image src={Base} title={`laurentian mlitary base in St-Adolphe-d'Howard, Quebec`} w='100%' objectFit='cover' />
                    </Flex>
                </Parallax>

                
                <Flex 
                    flexDir='column' 
                    w={['90vw', '90vw','30vw','30vw']}
                    pos={['relative', 'relative', 'absolute', 'absolute']}
                    right='2vw'
                    textAlign={['left', 'left','right','right']}
                    p={['20px','20px','0 5vw 0 0','0 5vw 0 0']}
                    color='#fff'
                >
                    <Text 
                        as='h1' 
                        margin='0px' 
                        zIndex='3' 
                        fontSize={['10vw', '10vw', '3vw','3vw']} 
                        fontFamily='Helvetica' 
                        fontWeight='bolder' 
                    >
                        -Post-
                    </Text>
                    <Text 
                        as='p'
                        zIndex='3' 
                        
                        lineHeight='2rem'
                    >
                        <FormattedMessage id='laurentian-military'  />
                    </Text>
                </Flex>  
            </Flex>
        </ParallaxProvider>
    )
}

export default LoadableParallax 