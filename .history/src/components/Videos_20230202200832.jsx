import { Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Videos = () => {
  return <Stack direction={['column', 'row']} h={'100vh'}>
    <VStack w={'full'}>
      <video
      controls
      controlsList="nodownload"
      src=""
      style={}
      ></video>
    </VStack>
  </Stack>;
}

export default Videos