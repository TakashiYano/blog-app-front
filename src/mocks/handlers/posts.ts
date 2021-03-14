import { rest } from "msw";
import type { ListPost, Post } from "src/models/post";
import { EXAMPLE_MY_POST_LIST, EXAMPLE_OTHER_USER_POST_LIST, EXAMPLE_POST } from "src/models/post";
import type { Search } from "src/models/search";

export const postsHandlers = [
  // 新しい投稿を作成する
  rest.post<string, { id: string }, never>("/posts", (_req, res, ctx) => {
    return res(ctx.delay(1000), ctx.status(201), ctx.json({ id: "var" }));
  }),

  // 特定の投稿の情報を取得する
  rest.get<never, Post, { postId: string }>("/posts/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ ...EXAMPLE_POST, id: postId }));
  }),

  // 特定の投稿を更新する
  rest.put<string, Post, { postId: string }>("/posts/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    const body: Pick<Post, "content"> = JSON.parse(req.body);
    // eslint-disable-next-line no-console
    console.log(body.content);
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ ...EXAMPLE_POST, id: postId }));
  }),

  // 特定の投稿を削除する
  rest.delete<never, Pick<Post, "id">, { postId: string }>("/posts/:postId", (req, res, ctx) => {
    const { postId } = req.params;
    return res(ctx.delay(1000), ctx.status(200), ctx.json({ id: postId }));
  }),

  // 特定の投稿を公開する
  rest.patch<never, Post, { postId: string }>("/posts/:postId/public", (req, res, ctx) => {
    const { postId } = req.params;
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json({ ...EXAMPLE_POST, id: postId, public: !EXAMPLE_POST.public })
    );
  }),

  // 自分または特定のユーザーの投稿一覧を取得する
  rest.get<never, ListPost[], { userId: string }>("/users/:userId/posts", (req, res, ctx) => {
    const { userId } = req.params;
    const notes = userId === "my" ? EXAMPLE_MY_POST_LIST : EXAMPLE_OTHER_USER_POST_LIST;
    return res(ctx.delay(1000), ctx.status(200), ctx.json(notes));
  }),

  // 自分または特定のユーザーの検索一覧を取得する
  rest.get<string, ListPost[], { userId: string }>("/users/:userId/posts/search", (req, res, ctx) => {
    const body: Pick<Search, "keyword"> = JSON.parse(req.body);
    // eslint-disable-next-line no-console
    console.log(body);
    return res(
      ctx.delay(1000),
      ctx.status(200),
      ctx.json([EXAMPLE_OTHER_USER_POST_LIST[1], EXAMPLE_OTHER_USER_POST_LIST[2]])
    );
  }),
];
