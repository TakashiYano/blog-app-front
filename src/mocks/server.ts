import { setupServer } from "msw/node";
import { handlers } from "src/mocks/handlers/index";

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers);
