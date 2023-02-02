import { Button, Heading, Stack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {

  const [videosrc, setVideosrc] = useState('videosArr[0]')

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
      {
        videosArr.map((item, index) =>(
          <Button variant={'ghost'}
          colorScheme></Button>
        ) 
      }
    </VStack>
  </Stack>;
}

export default Videos