# Header 組件開發筆記

## 開發日期

2024 年 12 月 19 日

## 主要功能實現

### 1. 導覽列滾動檢測與 URL 同步

**實現方式：**

- 使用 Framer Motion 的 `useScroll` hook 檢測滾動位置
- 通過 `getBoundingClientRect()` 判斷當前可見的 section
- 使用 `window.history.replaceState()` 更新 URL hash
- 實現雙向同步：滾動時更新 URL，點擊導覽時滾動到對應位置

**關鍵代碼：**

```tsx
const { scrollY } = useScroll();

useEffect(() => {
  const unsubscribe = scrollY.onChange((latest) => {
    const currentNav = navItems.find((item) => {
      const id = item.href.substring(1);
      const el = document.getElementById(id);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 200 && rect.bottom >= 200;
    });

    if (currentNav) {
      setActiveNav(currentNav.href);
      window.history.replaceState(null, "", currentNav.href);
    }
  });
  return unsubscribe;
}, [scrollY]);
```

### 2. 滑動背景動畫效果

**實現方式：**

- 使用 `LayoutGroup` 包裝所有動畫元素
- 使用 `layoutId="nav-pill-bg"` 創建共享的動畫上下文
- 只有 active 狀態時才渲染背景元素
- 使用 `position="absolute"` 和 `inset={0}` 讓背景完全覆蓋

**關鍵代碼：**

```tsx
<LayoutGroup>
  {navItems.map((item) => {
    const isActive = activeNav === item.href;
    return (
      <Box key={item.href} position="relative">
        {isActive && (
          <MotionBox
            layoutId="nav-pill-bg"
            position="absolute"
            inset={0}
            borderRadius="full"
            bgColor="navBgActive"
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
          />
        )}
        {/* 按鈕內容 */}
      </Box>
    );
  })}
</LayoutGroup>
```

### 3. 漸層邊框按鈕

**實現方式：**

- 外層 Box 使用漸層背景作為邊框
- 內層 Button 使用黑色背景填充
- 通過 `padding="2px"` 控制邊框粗細

**關鍵代碼：**

```tsx
<Box
  position="relative"
  borderRadius="full"
  p="2px"
  bgGradient="linear-gradient(to right, #667eea, #764ba2, #ff6cab)"
>
  <Button bg="black" color="pink.200" borderRadius="full" w="full" h="full">
    Get Started
  </Button>
</Box>
```

## 技術難點與解決方案

### 1. Chakra UI v3 語法變更

**問題：** 漸層語法不正確導致編譯警告
**錯誤語法：**

```css
bgGradient="linear(to-r, #667eea, #764ba2, #ff6cab)"
```

**正確語法：**

```css
bgGradient="linear-gradient(to right, #667eea, #764ba2, #ff6cab)"
```

**知識點：**

- Chakra UI v3 需要使用標準 CSS `linear-gradient` 語法
- 方向關鍵字要完整：`to-r` → `to right`

### 2. Framer Motion 與 Chakra UI 整合

**問題：** 需要將 Framer Motion 動畫應用到 Chakra UI 組件
**解決方案：**

```tsx
import { motion } from "framer-motion";
const MotionBox = motion(Box);
```

**知識點：**

- 使用 `motion()` 函數包裝 Chakra UI 組件
- 保持 Chakra UI 的 props 語法，同時獲得 Framer Motion 動畫能力

### 3. 滾動檢測優化

**問題：** 手動 `addEventListener` 性能不佳
**解決方案：** 使用 Framer Motion 的 `useScroll` hook
**優勢：**

- 更好的性能優化
- 自動清理事件監聽器
- 與動畫系統整合

### 4. 動畫參數調優

**背景滑動動畫：**

```tsx
transition={{ type: "spring", stiffness: 500, damping: 40 }}
```

- `stiffness: 500` - 高彈性，快速響應
- `damping: 40` - 適中阻尼，避免過度震盪

**按鈕互動動畫：**

```tsx
transition={{ type: "spring", stiffness: 300, damping: 30 }}
```

- `stiffness: 300` - 中等彈性
- `damping: 30` - 較少阻尼，保持活潑感

## 最終效果

### 視覺效果

- 平滑的滑動背景指示器
- 漸層邊框按鈕
- 響應式 hover 和 tap 動畫
- URL 與滾動位置同步

### 用戶體驗

- 直觀的導覽狀態指示
- 流暢的動畫過渡
- 可分享的錨點連結
- 一致的互動反饋

## 技術架構

### 組件結構

```
Header
├── 品牌標識 (FansNetwork)
├── Nav (導覽列)
│   ├── LayoutGroup
│   ├── 滑動背景動畫
│   └── 導覽項目
└── HeaderCta (漸層邊框按鈕)
```

### 狀態管理

- `activeNav`: 當前活躍的導覽項目
- `scrollY`: 滾動位置 (Framer Motion)

### 動畫系統

- Framer Motion 提供滾動檢測和動畫
- Chakra UI 提供樣式和佈局
- 兩者通過 `motion()` 函數整合

## 最佳實踐總結

1. **動畫性能：** 使用 Framer Motion 的 hooks 而非手動事件監聽
2. **語法正確性：** 確保 Chakra UI v3 使用正確的 CSS 語法
3. **組件整合：** 使用 `motion()` 包裝 Chakra UI 組件
4. **動畫調優：** 根據動畫類型調整 spring 參數
5. **用戶體驗：** 保持動畫流暢且有意義

## Sticky 定位問題解決

### 問題描述

Header 的 `position="sticky"` 不生效，滾動時沒有固定在頂部。

### 根本原因

`body` 元素沒有設置高度，導致 sticky 定位無法正確計算滾動容器。

### 解決方案

在 `globals.css` 中為 `html, body` 添加 `height: 100%`：

```css
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  height: 100%; /* 關鍵修復 */
}
```

### 知識點

- **Sticky 定位依賴滾動容器**：需要明確的滾動上下文
- **Body 高度設置**：確保 `body` 有完整的高度才能觸發滾動
- **CSS 基礎設置**：全局樣式會影響所有定位行為

### 其他嘗試的方法

1. 使用 `sx` prop 強制樣式（`!important`）
2. 調整頁面結構和容器
3. 設置 `minH="200vh"` 確保滾動空間

**最終解決方案**：只需要在 `body` 添加 `height: 100%` 即可。
