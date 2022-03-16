import React from "react"
import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types'

import { 
    Avatar,
    Box,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Image,
    ListItem,
    Text,
    useDisclosure

} from "@chakra-ui/react";



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
                        <DrawerHeader bg='#e31e3d'>
                            <Flex>
                                <Avatar filter='grayscale(100%)'  src={data.photo} />
                                <Box ml='3'>
                                    <Text fontFamily='helvetica' fontWeight='bold'>
                                        {data.name}
                                    </Text>
                                    <Text fontSize='sm'>
                                        <FormattedMessage  id={data.title} />
                                    </Text>
                                </Box>
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody className='bio-copy' bg='#e31e3d'>
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