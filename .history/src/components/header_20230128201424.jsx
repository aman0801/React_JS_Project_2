import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <>
        <Button
            pos={'fixed'}
            top={'4'}
            left={'4'}
            colorScheme='yellow'
            p={'0'}
            w={'10'}
            h={'10'}
            borderRadius={"full"}
            onClick={onOpen}
            >

            <BiMenuAltLeft size={'20'} />
        </Button>
        <Drawer isOpen={isOpen} placement = "left" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton /> 
                <DrawerHeader>Porn Hub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button variant={'solid'} colorScheme={'purple'}>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button variant={'solid'} colorScheme={'purple'}>
                            <Link to={'/videos'}>Video</Link>
                        </Button>
                        <Button variant={'solid'} colorScheme={'purple'}>
                            <Link to={'/videos?category=free'}>Free Videos</Link>
                        </Button>
                        <Button variant={'solid'} colorScheme={'purple'}>
                            <Link to={'/upload'}>Upload Video</Link>
                        </Button>
                    </VStack>

                   <HStack>
                    
                   </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
}

export default Header