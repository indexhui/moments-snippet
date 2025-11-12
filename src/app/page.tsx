import { Flex } from "@chakra-ui/react";
import { Header } from "@/components/layout/Header";
import { SnippetBuilder } from "@/components/sections/SnippetBuilder";

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" bgColor="bg">
      <Header />
      <SnippetBuilder />
    </Flex>
  );
}
