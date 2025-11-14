"use client";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { HiOutlinePause, HiOutlinePlay } from "react-icons/hi2";

export function Header() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/music/ThemeMusic.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
      setIsPlaying(true);
    }
  };

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
        <Button
          onClick={togglePlay}
          variant="ghost"
          size="sm"
          colorScheme="gray"
          leftIcon={
            <Icon as={isPlaying ? HiOutlinePause : HiOutlinePlay} boxSize={5} />
          }
        >
          {isPlaying ? "暫停" : "播放"}
        </Button>
      </Flex>
    </Flex>
  );
}
