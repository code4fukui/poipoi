import { fetchCBOR } from "https://js.sabae.cc/fetchCBOR.js";
import { fetchJSON } from "https://js.sabae.cc/fetchJSON.js";

export const uploadItem = async (img, text) => {
  const res = await fetchCBOR("/api/upload", { img, text });
  return res;
};

export const fetchItems = async () => {
  const res = await fetchJSON("/api/timeline");
  return res;
};
