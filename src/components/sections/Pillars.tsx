"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

const PILLARS = [
  { title: "療癒", desc: "小小片刻、剛剛好的放鬆。" },
  { title: "蒐集", desc: "把日常的光點，一起收藏起來。" },
  { title: "任務", desc: "輕鬆完成，累積小確幸。" },
  { title: "社群", desc: "與彼此連結，分享你的瞬間。" },
];

export function Pillars() {
  return (
    <Box as="section" id="pillars" py={16} bg="bg">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="headingText"
        >
          核心體驗
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {PILLARS.map((p) => (
            <Flex
              key={p.title}
              direction="column"
              gap={2}
              p={6}
              borderRadius="16px"
              border="1px solid"
              borderColor="border"
              bg="whiteAlpha.300"
            >
              <Heading as="h3" size="md" color="headingText">
                {p.title}
              </Heading>
              <Text color="text">{p.desc}</Text>
              <Box
                mt={2}
                h="140px"
                borderRadius="12px"
                bgImage="url('/hero.jpg')"
                bgSize="cover"
                bgPos="center"
              />
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
