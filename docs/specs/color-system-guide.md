# FansNetwork 顏色系統指南

## 🎨 顏色系統架構

### 1. 基礎顏色調色板

#### 品牌色彩 (Brand)

```tsx
// 使用方式
<Box bg="brand.500" color="white">主要品牌色</Box>
<Box bg="brand.100" color="brand.800">淺色背景</Box>
```

#### 次要色彩 (Secondary)

```tsx
<Box bg="secondary.500" color="white">次要品牌色</Box>
<Box bg="secondary.100" color="secondary.800">淺色背景</Box>
```

#### 狀態色彩

```tsx
<Box bg="success.500" color="white">成功狀態</Box>
<Box bg="warning.500" color="white">警告狀態</Box>
<Box bg="error.500" color="white">錯誤狀態</Box>
```

### 2. 語義化 Token

#### 主要語義色彩

```tsx
// 使用語義化 token
<Box bg="primary" color="white">主要色彩</Box>
<Box bg="primaryHover" color="white">主要色彩懸停</Box>
<Box bg="secondary" color="white">次要色彩</Box>
```

#### 背景色彩

```tsx
<Box bg="bg">主要背景</Box>
<Box bg="bgSecondary">次要背景</Box>
```

#### 文字色彩

```tsx
<Text color="text">主要文字</Text>
<Text color="textSecondary">次要文字</Text>
```

#### 邊框色彩

```tsx
<Box border="1px solid" borderColor="border">
  邊框
</Box>
```

### 3. 組件變體

#### Button 組件

```tsx
<Button variant="primary">主要按鈕</Button>
<Button variant="secondary">次要按鈕</Button>
<Button colorScheme="brand">品牌按鈕</Button>
```

#### Link 組件

```tsx
<Link>自動使用語義化色彩</Link>
```

## 🌙 深色模式支援

所有語義化 token 都支援深色模式：

```tsx
// 自動適應深色模式
<Box bg="bg" color="text">
  <Text color="textSecondary">自動適應深淺色模式</Text>
</Box>
```

## 📱 響應式色彩

```tsx
<Box
  bg={{ base: "brand.500", md: "secondary.500" }}
  color={{ base: "white", md: "black" }}
>
  響應式色彩
</Box>
```

## 🎯 使用建議

### 1. 優先使用語義化 token

```tsx
// ✅ 推薦
<Box bg="primary" color="white">

// ❌ 不推薦
<Box bg="brand.500" color="white">
```

### 2. 保持一致性

```tsx
// 使用相同的語義化 token
<Button variant="primary">按鈕</Button>
<Link>連結</Link>
<Box bg="primary">背景</Box>
```

### 3. 狀態色彩使用

```tsx
// 成功狀態
<Box bg="success" color="white">操作成功</Box>

// 警告狀態
<Box bg="warning" color="white">注意事項</Box>

// 錯誤狀態
<Box bg="error" color="white">錯誤訊息</Box>
```

## 🔧 自定義顏色

如需添加新顏色，在 `theme.ts` 中：

```tsx
colors: {
  // 添加新顏色
  custom: {
    50: "#f0f9ff",
    500: "#3b82f6",
    900: "#1e3a8a",
  },
},
semanticTokens: {
  colors: {
    // 添加語義化 token
    custom: {
      default: "custom.500",
      _dark: "custom.400",
    },
  },
},
```

## 📋 顏色對比度

確保文字與背景的對比度符合 WCAG 標準：

- **AA 級別**: 4.5:1 (正常文字)
- **AAA 級別**: 7:1 (正常文字)

## 🎨 設計系統整合

這些顏色 token 與設計系統完全整合，確保：

1. **一致性** - 所有組件使用相同的顏色系統
2. **可維護性** - 集中管理顏色定義
3. **可擴展性** - 易於添加新顏色和變體
4. **無障礙性** - 支援深色模式和對比度要求
