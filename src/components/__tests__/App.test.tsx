import { ReactNode } from "react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { waitFor } from "@testing-library/react";
import server from "../../mocks/server";
import { customRender, Store } from "../../test-utils/test-utils";
import { SearchStore } from "../../contexts/SearchContext";
import "intersection-observer";
import App from "../App";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Store store={SearchStore}>{children}</Store>;
};

describe("Less than 10 main articles from API call", () => {
  it("Welcome page is shown and removed from the page after 3.5 seconds and the articles are on the page", async () => {
    const { getAllByRole, getAllByText, queryByTestId } = customRender(
      Wrapper,
      <App />
    );

    const welcomePageElements = getAllByRole("heading", {
      name: "Hacker News",
    }) as HTMLHeadingElement[];

    welcomePageElements.forEach((ele: HTMLHeadingElement) =>
      expect(ele).toBeInTheDocument()
    );

    await waitFor(() => expect(queryByTestId("placeholder")).toBeNull(), {
      timeout: 4000,
    });

    await waitFor(() => {
      expect(getAllByText("Page 1 Main Articles")[0]).toBeInTheDocument();
      welcomePageElements.forEach((ele: HTMLHeadingElement) =>
        expect(ele).not.toBeInTheDocument()
      );
    });
  });
});
