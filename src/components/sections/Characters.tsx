"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";

export function Characters() {
  return (
    <Box as="section" id="characters" py={16} bg="bg">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="headingText"
        >
          角色介紹
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          <CharacterCard name="小麥" bio="溫柔細膩、總能在日常裡發現微光。" />
          <CharacterCard name="小貝狗" bio="活潑療癒、每天都帶來一點點笑意。" />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function CharacterCard({ name, bio }: { name: string; bio: string }) {
  return (
    <Flex direction="column" align="center" gap={4}>
      <Box
        position="relative"
        w={{ base: "100%", md: "520px" }}
        h={{ base: "220px", md: "320px" }}
        overflow="hidden"
        borderRadius="16px"
      >
        <Image src="/hero.jpg" alt={name} fill style={{ objectFit: "cover" }} />
      </Box>
      <Heading as="h3" size="md" color="headingText">
        {name}
      </Heading>
      <Text color="text" textAlign="center">
        {bio}
      </Text>
    </Flex>
  );
}
