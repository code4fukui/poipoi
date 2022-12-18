import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

export const showMe = async (main) => {
    main.innerHTML = "";

    const elmDiv = document.createElement("div");
    elmDiv.setAttribute("style", "margin: 2em 0em;");
    {
        const elmH2 = document.createElement("h2");
        elmH2.innerText = "🪙あなたのpoipoiポイント";
        elmDiv.appendChild(elmH2);

        const elmDiv_Shunyu = document.createElement("div");
        elmDiv_Shunyu.setAttribute("style", "text-align:center; font-size:2em; ");
        elmDiv_Shunyu.innerText = "✴️1,075";
        elmDiv.appendChild(elmDiv_Shunyu);
    }
    main.appendChild(elmDiv);
};
