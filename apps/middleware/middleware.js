import { createServer } from "@vue-storefront/middleware";
import { integrations } from "./middleware.config.js";
import cors from "cors";
import consola from "consola";

(async () => {
  const CORS_MIDDLEWARE_NAME = "corsMiddleware";
  const app = await createServer({ integrations });

  const corsMiddleware = app._router.stack.find(
    (middleware) => middleware.name === CORS_MIDDLEWARE_NAME
  );

  corsMiddleware.handle = cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  });

  const port = Number(process.argv[3]) || 8181;

  app.listen(port,  'localhost', () => {
    consola.success(`API server listening on http://localhost:${port}`);
  });
})();
