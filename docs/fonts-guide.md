# 字體使用指南

## 可用字體

### 1. Bruno Ace (標題字體)

- **用途**: 主要用於標題和重要文字
- **CSS 變數**: `var(--font-bruno-ace)`
- **Chakra UI**: `fontFamily="heading"`
- **特點**: 現代、科技感強烈

### 2. Roboto (正文字體)

- **用途**: 主要用於正文內容
- **CSS 變數**: `var(--font-roboto)`
- **Chakra UI**: `fontFamily="body"`
- **權重**: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
- **特點**: 清晰易讀、Material Design 風格

## 使用方法

### 在 Chakra UI 組件中：

```tsx
// 使用標題字體
<Text fontFamily="heading" fontSize="2xl">
  Fans Network
</Text>

// 使用正文字體
<Text fontFamily="body" fontSize="md">
  這是正文內容
</Text>

// 使用 Roboto 特定權重
<Text fontFamily="body" fontWeight="300">
  Light text
</Text>
<Text fontFamily="body" fontWeight="500">
  Medium text
</Text>
<Text fontFamily="body" fontWeight="700">
  Bold text
</Text>
```

### 在 CSS 中：

```css
.heading-text {
  font-family: var(--font-bruno-ace);
}

.body-text {
  font-family: var(--font-roboto);
}

.light-text {
  font-family: var(--font-roboto);
  font-weight: 300;
}

.bold-text {
  font-family: var(--font-roboto);
  font-weight: 700;
}
```

## 字體搭配建議

- **標題**: Bruno Ace (科技感、現代)
- **正文**: Roboto (清晰、易讀)
- **按鈕**: Roboto Medium (500)
- **重要資訊**: Roboto Bold (700)
- **次要文字**: Roboto Light (300)
