import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "@/components/ui/provider";

import App from "../App";

describe("App コンポーネント", () => {
  test("タイトルが表示される", () => {
    render(
      <Provider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText("デジタル名刺アプリ")).toBeInTheDocument();
  });
});
