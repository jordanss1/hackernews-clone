import { setupServer } from "msw/node";
import newsFeedHandlers from "./handlers";
import { lessThan10MainArticles, topArticlesMock } from "./api";

export const server = setupServer(
  ...newsFeedHandlers(lessThan10MainArticles, topArticlesMock)
);
