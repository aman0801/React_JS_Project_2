import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={"full"}>
                <Heading size="md" textTransform={'uppercase'}>
                    About
                </Heading>
                <HStack borderBottom={'2px solid white'} py="2">
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
                        <AiOutlineSend size = {20} />
                    </Button>
                </HStack>
            </VStack>
            <VStack w={"full"} 
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    License & Certification
                </Heading>
            </VStack>
            <VStack w={'full'}></VStack>
        </Stack>
    </Box>
  );
};

export default Footer