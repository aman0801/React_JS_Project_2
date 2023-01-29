import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import { Box } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos = 
};

const Home = () => {
  return <Box>
    <MyCarousel />
  </Box>
}

const MyCarousel = () => (
    <Carousel autoPlay 
    infiniteLoop 
    interval={1000} 
    showStatus={false} 
    showThumbs={false} 
    showArrows={false}>
        <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} >
        Img 1</Heading>
        </Box>

    </Carousel>
);


export default Home