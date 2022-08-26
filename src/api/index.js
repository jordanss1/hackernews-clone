import axios from "axios";

export default axios.create({
  baseURL: "https://newsapi.org",
  headers: {
    Authorization: "518bbdcd0563416688b803efc38f98b4",
  },
});
