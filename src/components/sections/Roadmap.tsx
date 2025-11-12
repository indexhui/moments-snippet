"use client";

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

export function Roadmap() {
  return (
    <Box as="section" id="roadmap" py={16} bg="bg">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="headingText"
        >
          Roadmap / Release
        </Heading>
        <VStack gap={4} align="center">
          <Text color="text">Coming soon ・ 歡迎追蹤社群取得最新進度</Text>
          <Text color="text">Beta 內測名單籌備中</Text>
        </VStack>
      </Container>
    </Box>
  );
}
