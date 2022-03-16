import React from "react"
import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types'

import { 
    Avatar,
    Badge,
    Box,
    Divider,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Image,
    ListItem,
    Text,
    useDisclosure

} from "@chakra-ui/react";


const colourBg = ['#e31e3d', '#e5501c','#e28118'  ]
const TeamMember = props => {
    const [memberBio, setMemberBio] = React.useState('md')
    const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()

    const handleMember = (newMember) => {
        setMemberBio(newMember)
        onDrawerOpen()
    }
    const {data} = props
    return (
        <>
            <ListItem
                className='team-member'
                m='2em' 
                key={data.name}
                display='inline-flex'
                flexDir='column'
                alignItems='center'
                justifyContent='center'
              >
                <Box 
                  cursor='pointer'
                  className="team-thumb" 
                  display='inline-flex'  
                  borderRadius='125px' 
                  w='250px' 
                  h='250px' 
                  overflow='hidden' 
                  bgColor='pink' 
                  m='0 0 15px 0'
                  onClick={() => handleMember(data)}
                  key={data}
                  
                >
                    <Image 
                        filter='grayscale(100%)' 
                        w='100%' objectFit='cover' 
                        src={data.photo} 
                        title={data.name} 
                        alt={`${data.name} thumbnail`}  
                    />
                </Box>
                <Text as='p' fontSize='0.9rem' textAlign='center'><strong>{data.name}</strong> / <em>{data.org}</em></Text>
                <Text as='p' fontSize='0.9rem' textAlign='center'>
                  <FormattedMessage  id={data.title} />
                </Text>

                <Drawer onClose={onDrawerClose} isOpen={isDrawerOpen} size='xl'>
                    <DrawerOverlay />
                    <DrawerContent color='#fff'>
                        <DrawerCloseButton/>
                        <DrawerBody className='bio-copy' bg={`${colourBg[Math.floor(Math.random()*colourBg.length)]}`} >
                            <Flex className='bio-header' >
                                <Avatar size='lg' filter='grayscale(100%)'  src={data.photo} />

                                <Box ml='3' display='inherit' justifyContent='center' flexDir='column'>
                                    <Text fontFamily='helvetica' fontWeight='bold'>
                                        {data.name} / <Badge marginLeft='5px' p='0 8px' variant='outline' color='white' boxShadow='inset 0 0 0px 1px #fff;'> {data.org}</Badge>
                                    </Text>
                                    <Text fontSize='sm'>
                                        <FormattedMessage  id={data.title} />
                                    </Text>
                                </Box>
                                
                            </Flex>
                            <Divider m='15px 0' borderColor='#fff' orientation='horizontal' />
                            <FormattedMessage
                                values={{
                                    p: msg => (
                                      <p>{msg}</p>
                                    )
                                }}
                                id={data.bio}
                            />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </ListItem>
        </>
    )
}

TeamMember.propTypes = {
    data: propTypes.object
}

export default TeamMember