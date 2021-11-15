import axios from "axios";

export default async function Api() {
  const res = await axios.get("https://panjs.com/ywc18.json");
  return res.data;
}
