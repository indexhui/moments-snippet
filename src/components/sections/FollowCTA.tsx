"use client";

import {
  Box,
  Container,
  Heading,
  Button,
  HStack,
  Link,
  VStack,
  Text,
} from "@chakra-ui/react";

export function FollowCTA() {
  return (
    <Box as="section" id="follow" py={16} bg="bg">
      <Container maxW="container.xl">
        <VStack gap={4} align="center">
          <Heading as="h2" size="xl" color="headingText">
            追蹤我們
          </Heading>
          <Text color="text">Instagram、Threads、YouTube 隨時獲取最新消息</Text>
          <HStack gap={3}>
            <Link
              href="https://www.instagram.com/mugio_studio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="md"
                bg="accent"
                color="white"
                _hover={{ filter: "brightness(0.95)" }}
              >
                Instagram
              </Button>
            </Link>
            <Link
              href="https://www.threads.com/@mugio_studio?xmt=AQF02DIAlQ7wBCOVZ-VhMzDSEHaKmZHHx_JHAI31v419qAg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="md"
                variant="outline"
                borderColor="accent"
                color="headingText"
              >
                Threads
              </Button>
            </Link>
            <Link
              href="https://www.youtube.com/@Mugio-studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="md"
                variant="outline"
                borderColor="accent"
                color="headingText"
              >
                YouTube
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
