"use client";

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Footer() {
  return (
    <Flex
      as="footer"
      py={8}
      w="100%"
      bgColor="bg"
      justify="center"
      h="auto"
      pt="40px"
      pb="40px"
    >
      <Flex
        w="80%"
        maxW="1440px"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        align={{ base: "center", lg: "flex-end" }}
      >
        <Flex
          direction="column"
          gap="12px"
          justify="space-between"
          mb={{ base: "32px", lg: "0" }}
          h="100%"
        >
          <Text fontSize="lg" fontWeight="700" color="headingText">
            走走小日 moments
          </Text>
          <Text
            fontSize="12px"
            color="text"
            display={{ base: "none", lg: "block" }}
          >
            © 2025 Mugio Studio
          </Text>
        </Flex>
        <Flex
          gap="12px"
          direction="column"
          align={{ base: "center", lg: "flex-end" }}
          justify="flex-end"
          textAlign={{ base: "center", lg: "right" }}
        >
          <Text fontSize="12px" color="text">
            追蹤我們：Instagram、Threads、YouTube
          </Text>
        </Flex>
        <Text
          fontSize="12px"
          color="text"
          display={{ base: "block", lg: "none" }}
          pt="32px"
        >
          © 2025 Mugio Studio
        </Text>
      </Flex>
    </Flex>
  );
}
