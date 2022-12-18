import { imgutil } from "https://js.sabae.cc/imgutil.js";
import { uploadItem } from "./api.js";

const maxwidth = 1024;
const maxsize = 1024 * 1024;
const jpgquarity = 0.9;

export const showUpload = async (main) => {
  main.innerHTML = "";
  main.className = "upload";

  const div = document.createElement("div");
  div.textContent = "写真選択";
  main.appendChild(div);
  const inp = document.createElement("input");
  inp.type = "file";
  inp.style.visibility = "hidden";
  main.appendChild(inp);
  const inpname = document.createElement("input");
  inpname.placeholder = "おなまえ";
  main.appendChild(inpname);
  const inpsepa = document.createElement("input");
  inpsepa.placeholder = "分類";
  main.appendChild(inpsepa);
  const btn = document.createElement("button");
  btn.textContent = "アップロード";
  btn.disabled = true;
  main.appendChild(btn);

  div.onclick = () => {
    inp.click();
    inp.onchange = async () => {
      if (inp.files.length > 1) {
        alert("1度にアップロードできるファイルは1つだけです");
      }
      const file = inp.files[0];
      const img = await imgutil.loadResizedImage(file, maxwidth, maxsize);
      div.appendChild(img);
      btn.disabled = false;
      btn.onclick = async () => {
        if (!inpname.value) {
          alert("おなまえを入力してからアップロードしてください");
          return;
        }
        if (!inpsepa.value) {
          alert("分類を入力してからアップロードしてください");
          return;
        }
        const buf = await imgutil.getArrayBufferFromImage(img, "image/jpeg", jpgquarity);
        const bimg = new Uint8Array(buf);
        const res = await uploadItem(bimg, inpname.value, inpsepa.value);
        if (res == "ok") {
          alert("アップロード成功！");
        } else {
          alert("おや、なにかトラブル!? " + res);
        }
      };
    };
  };
};
