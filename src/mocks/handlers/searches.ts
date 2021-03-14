import { rest } from "msw";
import type { Search } from "src/models/search";
import { EXAMPLE_SEARCH } from "src/models/search";

export const searchesHandlers = [
  // 自分の検索履歴を表示する
  rest.get<never, Search[], { userId: string }>("/users/:userId/searches", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(200), ctx.json(EXAMPLE_SEARCH));
  }),

  // 自分の検索履歴に追加する
  rest.post<string, { id: string }, { userId: string }>("/users/:userId/searches", (req, res, ctx) => {
    const body: Pick<Search, "keyword"> = JSON.parse(req.body);
    // eslint-disable-next-line no-console
    console.log(body.keyword);
    return res(ctx.delay(1000), ctx.status(201), ctx.json({ id: "var" }));
  }),

  // 自分の特定の検索履歴を削除する
  rest.delete<never, { id: string }, { userId: string; searchesId: string }>(
    "/users/:userId/searches/:searchesId",
    (_req, res, ctx) => {
      return res(ctx.delay(1000), ctx.status(200), ctx.json({ id: "var" }));
    }
  ),
];
