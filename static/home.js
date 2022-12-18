import { fetchItems, fetchCategories } from "./api.js";

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

        const elmA = document.createElement("a");
        elmA.onclick = function(){ showQuiz(main, photo); };
        elmLi.appendChild(elmA);

        const elmImg = document.createElement("img");
        elmImg.setAttribute("class", "photo");
        elmImg.setAttribute("src", `image/${photo.image}`);
        elmA.appendChild(elmImg);
}

    main.appendChild(elmUl);
};



async function showQuiz(main, photo){
    main.innerHTML = "";
    main.className = "home";

    const h1 = document.createElement("h1");
    h1.textContent = "分別クイズ!!";
    main.appendChild(h1);
  
    const elmP = document.createElement("p");
    elmP.textContent = "この\"ポイ\"の分類は？";
    main.appendChild(elmP);

    const elmImg = document.createElement("img");
    elmImg.setAttribute("class", "photo");
    elmImg.setAttribute("src", `image/${photo.image}`);
    main.appendChild(elmImg);

    const cates = await fetchCategories();
    const inpsepa = document.createElement("select");
    for (const cate of cates) {
      const opt = document.createElement("option");
      opt.textContent = cate;
      inpsepa.appendChild(opt);
    }
    main.appendChild(inpsepa);
  
    const btn = document.createElement("button");
    btn.textContent = "ポイ！";
    btn.onclick = async function(){
        if(photo.bunrui === inpsepa.value){
            alert("分類ありがとう〜〜〜");
        }else{
            alert("捨てないで！！");
        }
    };
    main.appendChild(btn);
  }
