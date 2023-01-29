import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const header = () => {
    return <>
        <Button pos={'fixed'} top={'4'} left={'4'} colorScheme = 'purple'>
            <BiMenuAltLeft size={'20'} />
        </Button>
    </>
}

export default header