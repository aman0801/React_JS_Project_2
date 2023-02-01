import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack>
                <Heading size="md" textTransform={'uppercase'}>
                    About
                </Heading>
                <HStack>
                    <Input placeholder="Email" 
                    border={'none'}
                    borderRadius="none"
                    outline={'none'}
                    focusBorderColor={'none'}
                    />
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <
                    </Button>
                </HStack>
            </VStack>
        </Stack>
    </Box>
  );
};

export default Footer