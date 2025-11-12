"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";

const STEPS = [
  { n: 1, title: "看見", desc: "注意到日常中的小小光點" },
  { n: 2, title: "記錄", desc: "用 moments 留下你的療癒片刻" },
  { n: 3, title: "分享", desc: "和大家一起擴散溫柔能量" },
];

export function GameplayLoop() {
  return (
    <Box as="section" id="loop" py={16} bg="bg">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="headingText"
        >
          遊戲循環
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {STEPS.map((s) => (
            <Flex
              key={s.n}
              direction="column"
              p={6}
              gap={3}
              align="flex-start"
              border="1px solid"
              borderColor="border"
              borderRadius="16px"
            >
              <Box
                w={10}
                h={10}
                borderRadius="full"
                bg="accent"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontWeight="700"
              >
                {s.n}
              </Box>
              <Heading as="h3" size="md" color="headingText">
                {s.title}
              </Heading>
              <Text color="text">{s.desc}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
