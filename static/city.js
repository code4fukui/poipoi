import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

export const showCity = async (main) => {
    main.innerHTML = "";
    main.className = "";

    const elmDiv = document.createElement("div");
    elmDiv.setAttribute("style", "margin: 2em 0em;");
    {
        const elmH2 = document.createElement("h2");
        elmH2.innerText = "💰先月の市の資源収入";
        elmDiv.appendChild(elmH2);

        const elmDiv_Shunyu = document.createElement("div");
        elmDiv_Shunyu.setAttribute("style", "text-align:center; font-size:2em; ");
        elmDiv_Shunyu.innerText = "¥3,675,975";
        elmDiv.appendChild(elmDiv_Shunyu);
    }
    main.appendChild(elmDiv);

    const elmDiv2 = document.createElement("div");
    elmDiv2.setAttribute("style", "margin: 2em 0em;");
    {
        const elmH2 = document.createElement("h2");
        elmH2.innerText = "🛻収集車どこかな？";
        elmDiv.appendChild(elmH2);

        const elmImg = document.createElement("img");
        elmImg.setAttribute("style", "width:100vw;");
        elmImg.setAttribute("src", `map.png`);

        elmDiv2.appendChild(elmImg);
    }
    main.appendChild(elmDiv2);
};
