import { Box, Button, Flex, Heading, Text, HStack, Icon, Stack } from "@chakra-ui/react";
import React from "react";
import { IconCheckForList } from "../icons/Icons";

export const ListItem = (props) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest} alignItems='start'>
      <Icon as={IconCheckForList} w='22px' h='22px' ></Icon>
      <Text textAlign='left'>{children}</Text>
    </HStack>
  )
}

export function Pricing() {
  return (
    <Box m={['0', '0', '5']}>
    <Box
      as="section"
      maxW='994px'
      margin='auto'
      mt='-141px'
      bg='white'
      borderRadius='12px'
      overflow='hidden'
      boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'
      mx={['6', '4', 'auto']}
    >
      <Flex direction={['column', 'column', 'row']}>
        <Box color='#171923' bg='rgba(29, 17, 83, 0.1)' p={['8', '4','16']}>
          <Text fontWeight='800px' fontSize='24px'>Premium PRO</Text>
          <Heading as='h3' fontWeight='800px' fontSize={['5xl', '5xl', '6xl']} mt='4'>$329</Heading>
          <Text fontWeight='500px' fontSize='18px' mt='8px'>billed just once</Text>
          <Button colorScheme="purple" size='lg' w='282px' h='51px' mt='6'>Get started</Button>
        </Box>
        <Box fontSize='18px' p={['5', '4','16']}>
          <Text>Access these features when you get this pricing package for your business.</Text>
          <Stack as='ul' spacing='16px' mt='6' pl={['0', '10%', '0']}>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
      </Box>
    </Box>
  )
}