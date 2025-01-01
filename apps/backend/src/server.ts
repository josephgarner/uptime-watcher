import express, { Request, Response } from "express";

const app = express();

app.get("/api", (req: Request, res: Response) => {
  res.send({ message: "Hello from Vite Backend with TypeScript!" });
});

// Start the server (only in standalone execution, not during Vite dev mode)
if (!process.env.VITE_NODE_RUNNING) {
  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
  });
}

// Export app for Vite plugin
export const viteNodeApp = app;
