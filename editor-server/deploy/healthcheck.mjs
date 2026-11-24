import { get } from "node:http";
const request = get(
  `http://127.0.0.1:${process.env.EDITOR_PORT || 3019}/`,
  {
    headers: { host: new URL(process.env.EDITOR_ORIGIN).host },
  },
  (response) => {
    response.resume();
    process.exitCode = response.statusCode === 200 ? 0 : 1;
  },
);
request.setTimeout(4000, () =>
  request.destroy(new Error("Health check timed out")),
);
request.on("error", () => {
  process.exitCode = 1;
});
