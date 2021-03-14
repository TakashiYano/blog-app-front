import { postsHandlers } from "src/mocks/handlers/posts";
import { searchesHandlers } from "src/mocks/handlers/searches";
import { usersHandlers } from "src/mocks/handlers/users";

export const handlers = [...usersHandlers, ...postsHandlers, ...searchesHandlers];
