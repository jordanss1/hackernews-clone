import { setupServer } from "msw/node";
import newsFeedHandlers from "./handlers";
import { lessThan10MainArticles, topArticlesMock } from "./api";


const server = setupServer(
  ...newsFeedHandlers(lessThan10MainArticles, topArticlesMock)
);

export default server;
