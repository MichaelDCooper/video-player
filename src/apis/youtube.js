import axios from "axios";

const KEY = "AIzaSyA2w0CqqYm8uqlyT67uvigfliDlgceOcSU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY
  }
});
