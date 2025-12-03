# Vitest

## テスト環境

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

vite.config.ts

```typescript
/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

package.json

```json
"scripts": {
  "test": "vitest",
  "test:run": "vitest run",
}
```

## テスト作成

src/\_\_tests\_\_/\*.test.tsx

```typescript
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import "@testing-library/jest-dom";

import MyComponent from "../components/MyComponent";

describe("MyComponent", () => {
  test("正しく表示される", () => {
    render(<MyComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

## テスト実行

```bash
npm test
```
