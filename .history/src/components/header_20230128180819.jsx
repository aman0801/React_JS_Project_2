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
        <button
        pos="fixed" top='4' left='4'>
            <BiMenuAltLeft size={20} />
        </button>
    </>
}

export default header