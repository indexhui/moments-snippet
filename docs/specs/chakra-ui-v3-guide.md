# Chakra UI v3 使用指南

## 📋 版本說明

本專案使用 **Chakra UI v3**，請注意語法與 v2 版本有顯著差異。

## 🚨 重要提醒

### v3 語法變更

- 不再使用 `@chakra-ui/react` 的舊語法
- 使用新的 `@chakra-ui/next-js` 或 `@chakra-ui/react` v3 語法
- 組件 API 有所調整

## 📦 安裝

```bash
npm install @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
```

## 🔧 基本設置

### 1. Provider 設置

```tsx
// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
```

### 2. Layout 整合

```tsx
// app/layout.tsx
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

## 🎨 主題配置

```tsx
// app/theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#f0f9ff",
      500: "#3b82f6",
      900: "#1e3a8a",
    },
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
});
```

## 📱 響應式設計

### v3 響應式語法

```tsx
// 正確的 v3 語法
<Box
  width={{ base: "100%", md: "50%", lg: "33.333%" }}
  padding={{ base: 4, md: 6, lg: 8 }}
>
  內容
</Box>
```

## 🧩 常用組件

### 按鈕

```tsx
import { Button } from "@chakra-ui/react";

<Button colorScheme="brand" size="lg">
  行動召喚
</Button>;
```

### 容器

```tsx
import { Container, Box } from "@chakra-ui/react";

<Container maxW="container.xl" py={8}>
  <Box>內容</Box>
</Container>;
```

### 網格系統

```tsx
import { SimpleGrid, Grid, GridItem } from '@chakra-ui/react'

// 簡單網格
<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
  {items.map(item => (
    <Box key={item.id}>{item.content}</Box>
  ))}
</SimpleGrid>

// 複雜網格
<Grid templateColumns={{ base: "1fr", lg: "repeat(12, 1fr)" }} gap={6}>
  <GridItem colSpan={{ base: 1, lg: 8 }}>主要內容</GridItem>
  <GridItem colSpan={{ base: 1, lg: 4 }}>側邊欄</GridItem>
</Grid>
```

## 🎯 區塊實現建議

### Header 導覽列

```tsx
import { Box, Flex, Button, useDisclosure } from "@chakra-ui/react";

<Box as="header" position="sticky" top={0} zIndex={10}>
  <Flex justify="space-between" align="center" px={4} py={4}>
    <Box>Logo</Box>
    <Flex display={{ base: "none", md: "flex" }} gap={4}>
      <Button variant="ghost">首頁</Button>
      <Button variant="ghost">關於我們</Button>
    </Flex>
  </Flex>
</Box>;
```

### Hero 首屏

```tsx
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from "@chakra-ui/react";

<Box as="section" minH="100vh" display="flex" alignItems="center">
  <Container maxW="container.xl">
    <VStack spacing={8} textAlign="center">
      <Heading size="2xl">FansNetwork</Heading>
      <Text fontSize="xl">核心價值主張</Text>
      <Button size="lg" colorScheme="brand">
        開始使用
      </Button>
    </VStack>
  </Container>
</Box>;
```

## ⚠️ 注意事項

1. **避免混用 v2 語法**：確保所有組件都使用 v3 語法
2. **響應式設計**：使用物件語法而非陣列語法
3. **主題配置**：統一使用 extendTheme
4. **性能優化**：適當使用 `useMemo` 和 `useCallback`

## 📚 參考資源

- [Chakra UI v3 官方文檔](https://chakra-ui.com/)
- [Next.js 整合指南](https://chakra-ui.com/getting-started/nextjs-guide)
- [v3 遷移指南](https://chakra-ui.com/migration-guide)
