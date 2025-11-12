"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      w="100%"
      as="header"
      position="sticky"
      top="0"
      h="60px"
      zIndex={1500}
      justify="center"
      align="center"
      bgColor="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      py={{ base: 2, md: 0 }}
    >
      <Flex
        w="100%"
        px={{ base: 6, md: "5%" }}
        h="100%"
        justify="space-between"
        align="center"
        py="0"
      >
        <Box>
          <Heading size="sm" color="gray.700">
            走走小日 Dialogue Toolkit
          </Heading>
          <Text fontSize="xs" color="gray.500">
            快速複製 Unity 對話系統指令
          </Text>
        </Box>
        <Box />
      </Flex>
    </Flex>
  );
}
