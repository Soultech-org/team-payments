const { createApp } = require("./server");

describe("server", () => {
  test("exposes a readiness payload on the app stack", () => {
    const app = createApp();
    const layer = app._router.stack.find(
      (entry) => entry.route && entry.route.path === "/ready",
    );
    expect(layer).toBeDefined();
    expect(layer.route.methods.get).toBe(true);
  });
});
