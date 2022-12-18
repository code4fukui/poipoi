import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

export const showSeparation = async (main) => {
  main.innerHTML = "";
  main.className = "";

  const h1 = document.createElement("h1");
  h1.textContent = "家庭ごみの分別";
  main.appendChild(h1);

  const list = document.createElement("dl");
  main.appendChild(list);

  const data = await fetchJSON("/api/separation");

  const cates = ArrayUtil.toUnique(data.map(d => d.分別区分));
  for (const cate of cates) {
    const dt = document.createElement("dt");
    dt.textContent = cate;
    list.appendChild(dt);
    dt.onclick = () => {
      if (dt.children.length == 0) {
        const ch = data.filter(d => d.分別区分 == cate).map(d => d.名称);
        for (const c of ch) {
          const dd = document.createElement("dd");
          dd.textContent = c;
          dt.appendChild(dd);
        }
      } else {
        while (dt.children.length > 0) {
          dt.children[0].remove();
        }
      }
    };
  }
};
