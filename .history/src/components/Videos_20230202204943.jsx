import { Button, Heading, Stack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {

  const [videosserc]

  return <Stack direction={['column', 'row']} h={'100vh'}>
    <VStack w={'full'}>
      <video
      controls
      controlsList="nodownload"
      src=""
      style={{
        width: '100%',
      }}
      ></video>
      <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
        <Heading>Sample Video</Heading>
        <Text>A sample video description</Text>
      </VStack>
    </VStack>
    <VStack w={['full', 'xl']} 
    alignItems={'stretch'}
    p="8"
    spacing={'8'}
    overflowY={'auto'}
    >
      <Button variant={'ghost'} colorScheme={'purple'}>
        Sample Video
      </Button>
    </VStack>
  </Stack>;
}

export default Videos