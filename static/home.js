import { fetchItems } from "./api.js";

export const showHome = async (main) => {
    main.innerHTML = "";
    main.className = "home";

    const items = (await fetchItems()).reverse();
    console.log(items);

    const elmUl = document.createElement("ul");
    elmUl.setAttribute("class", "home_list");

    for (const photo of items) {
        const elmLi = document.createElement("li");
        elmUl.appendChild(elmLi);

        if (photo.muzu === 2) {
            const elmImgMuzu = document.createElement("img");
            elmImgMuzu.setAttribute("style", "width:35vw; text-align:right; position:absolute; right: 0vw; ");
            elmImgMuzu.setAttribute("src", "icon/gmuzu.png");
            elmLi.appendChild(elmImgMuzu);
        }

        const elmImg = document.createElement("img");
        elmImg.setAttribute("class", "photo");
        elmImg.setAttribute("src", `image/${photo.image}`);
        elmLi.appendChild(elmImg);
}

    main.appendChild(elmUl);
};
