import { MockedRequest, RestHandler, rest } from "msw";
import { ArticleType } from "../types";

type NewsFeedHandlersType = (
  mainArticles: ArticleType[],
  topNewsArticles: ArticleType[]
) => RestHandler<MockedRequest<ArticleType[]>>[];

const newsFeedHandlers: NewsFeedHandlersType = (
  mainArticles,
  topNewsArticles
) => {
  return [
    rest.get("https://newsapi.org/v2/everything", (req, res, ctx) =>
      res(ctx.status(200), ctx.json(mainArticles))
    ),
    rest.get("https://newsapi.org/v2/top-headlines", (req, res, ctx) =>
      res(ctx.status(200), ctx.json(topNewsArticles))
    ),
  ];
};

export default newsFeedHandlers;
