"use client";

import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

export function Gallery() {
  const items = Array.from({ length: 6 }).map((_, i) => i);
  return (
    <Box as="section" id="gallery" py={16} bg="bg">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          textAlign="center"
          mb={8}
          color="headingText"
        >
          Moments 精選集
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
          {items.map((i) => (
            <Box
              key={i}
              position="relative"
              w="100%"
              h={240}
              borderRadius="12px"
              overflow="hidden"
              border="1px solid"
              borderColor="border"
            >
              <Image
                src="/hero.jpg"
                alt={`moment-${i}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
