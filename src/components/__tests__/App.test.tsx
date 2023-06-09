import { ReactNode } from "react";
import { customRender, Store } from "../../test-utils/test-utils";
import { SearchStore } from "../../contexts/SearchContext";
import App from "../App";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Store store={SearchStore}>{children}</Store>;
};

describe("Tests that don't require the API", () => {
  it("Welcome page is shown and removed from the page after 3.5 seconds", async () => {
    const { getByRole } = customRender(Wrapper, <App />);

    expect(getByRole("heading", { name: "Hacker News" })).toBeInTheDocument();
  });
});
