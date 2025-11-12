"use client";

import {
  Box,
  Button,
  Badge,
  CardBody,
  CardHeader,
  CardRoot,
  Code,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  dialogueCharacters,
  generatePortraitCommand,
  generalDialogueSnippets,
} from "@/data/dialogueSnippets";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { HiMiniCheckCircle } from "react-icons/hi2";
import { toaster } from "@/components/ui/toaster";

const buildToastDescription = (snippet: string) => (
  <Box fontFamily="mono" whiteSpace="pre-wrap">
    {snippet}
  </Box>
);

export function SnippetBuilder() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(
    dialogueCharacters[0]?.id
  );
  const [lastCopiedId, setLastCopiedId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<"portraits" | "general">(
    "portraits"
  );

  const selectedCharacter = useMemo(
    () =>
      dialogueCharacters.find(
        (character) => character.id === selectedCharacterId
      ) ?? dialogueCharacters[0],
    [selectedCharacterId]
  );

  const copyToClipboard = async (snippet: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(snippet);
        return true;
      }

      if (typeof document === "undefined") {
        return false;
      }

      const textarea = document.createElement("textarea");
      textarea.value = snippet;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand("copy");
      document.body.removeChild(textarea);
      return successful;
    } catch (error) {
      console.error("Failed to copy snippet", error);
      return false;
    }
  };

  const handleCopyPortrait = async (
    snippetId: string,
    portraitValue: string
  ) => {
    if (!selectedCharacter) return;
    const snippet = generatePortraitCommand(
      selectedCharacter.code,
      portraitValue
    );
    const didCopy = await copyToClipboard(snippet);
    if (!didCopy) {
      toaster.dismiss();
      toaster.create({
        title: "複製失敗",
        description: "瀏覽器可能不支援自動複製，請手動選取文字。",
        type: "error",
        duration: 2500,
        closable: true,
      });
      return;
    }
    setLastCopiedId(snippetId);
    toaster.dismiss();
    toaster.create({
      title: "已複製 SetPortrait 指令",
      description: buildToastDescription(snippet),
      type: "success",
      duration: 2000,
      closable: true,
    });
  };

  const handleCopyAction = async (actionId: string, rawSnippet: string) => {
    const didCopy = await copyToClipboard(rawSnippet);
    if (!didCopy) {
      toaster.dismiss();
      toaster.create({
        title: "複製失敗",
        description: "瀏覽器可能不支援自動複製，請手動選取文字。",
        type: "error",
        duration: 2500,
        closable: true,
      });
      return;
    }
    setLastCopiedId(actionId);
    toaster.dismiss();
    toaster.create({
      title: "已複製指令",
      description: buildToastDescription(rawSnippet),
      type: "success",
      duration: 2000,
      closable: true,
    });
  };

  return (
    <Container as="section" maxW="6xl" py={{ base: 12, md: 16 }}>
      <VStack align="stretch" gap={10}>
        <Flex gap={3}>
          <Button
            variant={activeView === "portraits" ? "solid" : "outline"}
            colorScheme={activeView === "portraits" ? "orange" : "gray"}
            onClick={() => setActiveView("portraits")}
          >
            表情
          </Button>
          <Button
            variant={activeView === "general" ? "solid" : "outline"}
            colorScheme={activeView === "general" ? "orange" : "gray"}
            onClick={() => setActiveView("general")}
          >
            其他
          </Button>
        </Flex>

        {activeView === "portraits" ? (
          <VStack align="stretch" gap={8}>
            <CardRoot variant="outline" borderColor="gray.200">
              <CardHeader>
                <Heading size="md">角色</Heading>
              </CardHeader>
              <CardBody>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                  {dialogueCharacters.map((character) => {
                    const isActive = character.id === selectedCharacter?.id;
                    return (
                      <Button
                        key={character.id}
                        onClick={() => setSelectedCharacterId(character.id)}
                        variant={isActive ? "solid" : "outline"}
                        colorScheme={isActive ? "orange" : "gray"}
                        justifyContent="flex-start"
                        h="auto"
                        alignItems="flex-start"
                        flexDirection="column"
                        py={4}
                        px={5}
                        gap={2}
                      >
                        <Heading size="sm">{character.name}</Heading>
                      </Button>
                    );
                  })}
                </SimpleGrid>
              </CardBody>
            </CardRoot>

            {selectedCharacter ? (
              <CardRoot variant="outline" borderColor="gray.200">
                <CardHeader>
                  <Heading size="md">表情 SetPortrait</Heading>
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    指令會自動套用{" "}
                    <Code colorScheme="orange" fontSize="sm">
                      SetPortrait({selectedCharacter.code}, pic=...)
                    </Code>{" "}
                    格式。
                  </Text>
                </CardHeader>
                <CardBody>
                  <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                    {selectedCharacter.portraits.map((portrait) => {
                      const snippetId = `${selectedCharacter.id}-${portrait.id}`;
                      const snippet = generatePortraitCommand(
                        selectedCharacter.code,
                        portrait.value
                      );
                      const wasCopied = lastCopiedId === snippetId;
                      return (
                        <Flex
                          key={portrait.id}
                          border="1px solid"
                          borderColor={wasCopied ? "green.400" : "gray.200"}
                          borderRadius="lg"
                          p={4}
                          gap={4}
                          align="center"
                        >
                          {portrait.image ? (
                            <Box
                              borderRadius="lg"
                              overflow="hidden"
                              border="1px solid"
                              borderColor="gray.200"
                              width="100px"
                              height="100px"
                              flexShrink={0}
                            >
                              <img
                                src={portrait.image}
                                alt={`${selectedCharacter.name} ${portrait.label}`}
                                style={{
                                  display: "block",
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>
                          ) : (
                            <Box
                              w="100px"
                              h="100px"
                              borderRadius="lg"
                              bg="gray.100"
                              color="gray.500"
                              fontSize="sm"
                              textAlign="center"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              flexShrink={0}
                            >
                              無頭像
                            </Box>
                          )}
                          <Flex direction="column" flex="1" gap={2}>
                            <Box>
                              <Heading size="sm">{portrait.label}</Heading>
                              <Badge colorPalette="gray" size="sm" mt={2}>
                                {portrait.value}
                              </Badge>
                            </Box>
                            <Button
                              size="sm"
                              alignSelf="flex-start"
                              variant="ghost"
                              onClick={() =>
                                handleCopyPortrait(snippetId, portrait.value)
                              }
                            >
                              <Flex align="center" gap={2}>
                                <Icon
                                  as={
                                    wasCopied
                                      ? HiMiniCheckCircle
                                      : HiOutlineClipboardDocument
                                  }
                                  boxSize={4}
                                />
                                <Box as="span">
                                  {wasCopied ? "已複製" : "複製指令"}
                                </Box>
                              </Flex>
                            </Button>
                          </Flex>
                        </Flex>
                      );
                    })}
                  </SimpleGrid>
                </CardBody>
              </CardRoot>
            ) : (
              <CardRoot variant="outline" borderColor="gray.200">
                <CardBody>
                  <Text color="gray.500">目前沒有可用角色。</Text>
                </CardBody>
              </CardRoot>
            )}
          </VStack>
        ) : null}

        {activeView === "general" ? (
          <CardRoot variant="outline" borderColor="gray.200">
            <CardHeader>
              <Heading size="md">其他指令</Heading>
              <Text fontSize="sm" color="gray.500" mt={2}>
                通用功能，不限定角色。可自由套用在任意對話段落。
              </Text>
            </CardHeader>
            <CardBody>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                {generalDialogueSnippets.map((snippet) => {
                  const wasCopied = lastCopiedId === snippet.id;
                  return (
                    <Flex
                      key={snippet.id}
                      border="1px solid"
                      borderColor={wasCopied ? "green.400" : "gray.200"}
                      borderRadius="lg"
                      direction="column"
                      p={4}
                      gap={3}
                    >
                      <VStack align="flex-start" gap={1}>
                        <Heading size="sm">{snippet.label}</Heading>
                        <Box
                          fontFamily="mono"
                          fontSize="sm"
                          color="gray.600"
                          whiteSpace="pre-wrap"
                        >
                          {snippet.value}
                        </Box>
                        {snippet.notes ? (
                          <Text fontSize="xs" color="gray.500">
                            {snippet.notes}
                          </Text>
                        ) : null}
                      </VStack>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() =>
                          handleCopyAction(snippet.id, snippet.value)
                        }
                      >
                        <Flex align="center" gap={2}>
                          <Icon
                            as={
                              wasCopied
                                ? HiMiniCheckCircle
                                : HiOutlineClipboardDocument
                            }
                            boxSize={4}
                          />
                          <Box as="span">
                            {wasCopied ? "已複製" : "複製指令"}
                          </Box>
                        </Flex>
                      </Button>
                    </Flex>
                  );
                })}
              </SimpleGrid>
            </CardBody>
          </CardRoot>
        ) : null}
      </VStack>
    </Container>
  );
}
