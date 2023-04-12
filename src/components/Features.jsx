import { HStack, Icon, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { HassleFreeIcon, MoneyBackGuaranteeIcon, MonthlySubscribtionIcon } from "../icons/Icons";

function Feature(props) {
  const { icon, children, ...rest } = props;
  return (
      <HStack {...rest} spacing='6' textAlign='left'>
        <Icon as={icon} w='40px' h='40px' boxSize='12'/>
        <Text color='#171923' fontWeight='bold' maxW='220px' fontSize='lg'>{children}</Text>
      </HStack>
  )
}

export function Features(props) {
  return (
    <Stack direction={['column', 'column', 'row']} as='section' spacing='5' maxW='927px' px='5' m='auto' mt='14' align='center'>
      <Feature icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</Feature>
      <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
      <Feature icon={MonthlySubscribtionIcon}>No monthly subscription Pay once and for all</Feature>
    </Stack>
  )
}