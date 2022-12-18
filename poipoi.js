import { serveAPI } from "https://js.sabae.cc/wsutil.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";
import { JSONDB } from "https://js.sabae.cc/JSONDB.js";

const items = new JSONDB("data/items.json");

serveAPI("/api/", async (param, req, path, conninfo) => {
  if (path == "/api/separation") {
    const url = "https://data.odp.jig.jp/viewcsv/jp/fukui/sabae/203.csv";
    const data = await CSV.fetchJSON(url);
    return data;
  } else if (path == "/api/upload") {
    const dt = new DateTime();
    const name = dt.toString().replace(/:/g, "").replace(/\+/g, "P") + ".jpg";
    const muzu = Math.random() < .2 ? 2 : 0;
    const item = { dt: dt.toString(), image: name, name: param.text, bunrui: param.bunrui, muzu };
    items.data.push(item);
    await Deno.writeFile("./static/image/" + name, param.img);
    await items.write();
    return "ok";
  } else if (path == "/api/timeline") {
    return items.data;
  }
  return "poipoi";
});
