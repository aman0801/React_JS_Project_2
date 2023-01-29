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
    pos : 'absolute',
    left : '50%',
    top : '50%',
    transform : 'translate(-50%, -50%)',
    textTransform : 'uppercase',
    p : '4',
    size : '4xl',
};

const Home = () => {
  return <Box>
    <MyCarousel />

    <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading ></Heading>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure possimus quisquam rerum 
        voluptate vitae atque voluptatem voluptas harum, provident fugiat tenetur praesentium 
        cumque asperiores enim, labore odio adipisci nesciunt cupiditate.
    </Container>
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
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Img 1</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Img 2</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Img 3</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Img 4</Heading>
        </Box>

        <Box w="full" h={'100vh'}>
        <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Img 5</Heading>
        </Box>

    </Carousel>
);


export default Home