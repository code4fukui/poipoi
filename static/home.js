import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

export const showHome = async (main) => {
    main.innerHTML = "";

    const photos = [
        { file: "IMG_8933.jpg", muzu: 2, },
        { file: "IMG_8934.jpg", muzu: 0, },
        { file: "IMG_8935.jpg", muzu: 2, },
        { file: "IMG_8936.jpg", muzu: 0, },
        { file: "IMG_8937.jpg", muzu: 0, },
        { file: "IMG_8938.jpg", muzu: 0, },
        { file: "IMG_8940.jpg", muzu: 0, },
        { file: "IMG_8941.jpg", muzu: 0, },
        { file: "IMG_8942.jpg", muzu: 0, },
        { file: "IMG_8943.jpg", muzu: 0, },
        { file: "IMG_8944.jpg", muzu: 0, },
        { file: "IMG_8945.jpg", muzu: 0, },
        { file: "IMG_8947.jpg", muzu: 0, },
        { file: "IMG_8948.jpg", muzu: 0, },
        { file: "IMG_8949.jpg", muzu: 0, },
        { file: "IMG_8950.jpg", muzu: 0, },
        { file: "IMG_8951.jpg", muzu: 0, },
        { file: "IMG_8952.jpg", muzu: 0, },
        { file: "IMG_8953.jpg", muzu: 0, },
        { file: "IMG_8954.jpg", muzu: 0, },
        { file: "IMG_8955.jpg", muzu: 0, },
        { file: "IMG_8956.jpg", muzu: 0, },
        { file: "IMG_8957.jpg", muzu: 0, },
        { file: "IMG_8958.jpg", muzu: 0, },
        { file: "IMG_8959.jpg", muzu: 0, },
    ];

    const elmUl = document.createElement("ul");
    elmUl.setAttribute("class", "home_list");

    for(const photo of photos){
        const elmLi = document.createElement("li");
        elmUl.appendChild(elmLi);

        if(photo.muzu === 2){
            const elmImgMuzu = document.createElement("img");
            elmImgMuzu.setAttribute("style", "width:35vw; text-align:right; position:absolute; right: 0vw; ");
            elmImgMuzu.setAttribute("src", "photo/gmuzu.png");
            elmLi.appendChild(elmImgMuzu);
        }

        const elmImg = document.createElement("img");
        elmImg.setAttribute("class", "photo");
        elmImg.setAttribute("src", `photo/${photo.file}`);
        elmLi.appendChild(elmImg);
}

    main.appendChild(elmUl);
};
