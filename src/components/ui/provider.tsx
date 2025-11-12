"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { theme } from "@/app/theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={theme}>{children}</ChakraProvider>;
}
