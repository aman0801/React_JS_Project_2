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
                    <VStack>
                        <Button>
                            <Link to=>Home</Link>
                        </Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>

        </Drawer>
    </>
}

export default Header