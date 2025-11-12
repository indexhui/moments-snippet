"use client";

import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Partner() {
  return (
    <Flex
      as="section"
      id="partner"
      w="100%"
      align="center"
      justify="center"
      h="500px"
    >
      <Flex
        maxW="1440px"
        w={{ base: "100%", lg: "80%" }}
        justify="space-between"
        align="center"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: "40px", lg: "0" }}
        px={{ base: "24px", lg: "0" }}
      >
        <Text
          color="white"
          fontSize={{ base: "32px", lg: "48px" }}
          fontWeight="bold"
          textAlign={{ base: "center", lg: "left" }}
        >
          Partner
        </Text>
        <Flex
          gap="24px"
          flexWrap="wrap"
          justify={{ base: "center", lg: "flex-end" }}
          direction={{ base: "column", lg: "row" }}
        >
          <Image
            width={224}
            height={52}
            src="/logo.svg"
            alt="FansNetwork"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Image
            width={224}
            height={52}
            src="/logo.svg"
            alt="FansNetwork"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Image
            width={224}
            height={52}
            src="/logo.svg"
            alt="FansNetwork"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
