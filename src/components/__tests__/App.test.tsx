import { ReactNode } from "react";
import { customRender, Store } from "../../test-utils/test-utils";
import { SearchStore } from "../../contexts/SearchContext";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Store store={SearchStore}>{children}</Store>;
};


