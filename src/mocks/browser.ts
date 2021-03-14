import { setupWorker } from "msw";
import { handlers } from "src/mocks/handlers/index";

export const worker = setupWorker(...handlers);
