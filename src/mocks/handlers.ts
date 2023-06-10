import { MockedRequest, RestHandler, rest } from "msw";
import { MockResponseType } from "./api";
import { ArticleType } from "../types";

type NewsFeedHandlersType = (
  mainArticles?: MockResponseType,
  topNewsArticles?: MockResponseType,
  errorTest?: boolean
) => RestHandler<MockedRequest<ArticleType[] | Error>>[];

const newsFeedHandlers: NewsFeedHandlersType = (
  mainArticles,
  topNewsArticles,
  errorTest
) => {
  const mainResponse = errorTest ? new Error("Error") : mainArticles;
  const topResponse = errorTest ? new Error("Error") : topNewsArticles;

  const statusCode = errorTest ? 500 : 200;

  return [
    rest.get("https://newsapi.org/v2/everything", (req, res, ctx) =>
      res(ctx.status(statusCode), ctx.json(mainResponse))
    ),
    rest.get("https://newsapi.org/v2/top-headlines", (req, res, ctx) =>
      res(ctx.status(statusCode), ctx.json(topResponse))
    ),
  ];
};

export default newsFeedHandlers;
