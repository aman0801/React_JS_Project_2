import React from 'react'
import { Box, Button, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack>
                <Heading size="md" textTransform={'uppercase'}>
                    About
                </Heading>
                <HStack>
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant
                    ></Button>
                </HStack>
            </VStack>
        </Stack>
    </Box>
  );
};

export default Footer