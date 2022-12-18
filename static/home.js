import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

export const showHome = async (main) => {
    main.innerHTML = "";

    const photos = [
        "IMG_8933.jpg",
        "IMG_8934.jpg",
        "IMG_8935.jpg",
        "IMG_8936.jpg",
        "IMG_8937.jpg",
        "IMG_8938.jpg",
        "IMG_8940.jpg",
        "IMG_8941.jpg",
        "IMG_8942.jpg",
        "IMG_8943.jpg",
        "IMG_8944.jpg",
        "IMG_8945.jpg",
        "IMG_8947.jpg",
        "IMG_8948.jpg",
        "IMG_8949.jpg",
        "IMG_8950.jpg",
        "IMG_8951.jpg",
        "IMG_8952.jpg",
        "IMG_8953.jpg",
        "IMG_8954.jpg",
        "IMG_8955.jpg",
        "IMG_8956.jpg",
        "IMG_8957.jpg",
        "IMG_8958.jpg",
        "IMG_8959.jpg",
    ];

    const elmUl = document.createElement("ul");
    elmUl.setAttribute("class", "home_list");

    for(const photo of photos){
        const elmLi = document.createElement("li");
        elmUl.appendChild(elmLi);

        const elmImg = document.createElement("img");
        elmImg.setAttribute("class", "photo");
        elmImg.setAttribute("src", `photo/${photo}`);
        elmLi.appendChild(elmImg);
    }

    main.appendChild(elmUl);
};
