import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

serveAPI("/api", async (param, req, path, conninfo) => {
  if (path == "/api/separation") {
    const url = "https://data.odp.jig.jp/viewcsv/jp/fukui/sabae/203.csv";
    const data = await CSV.fetchJSON(url);
    return data;
  }
  return "poipoi";
});
