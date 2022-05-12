import axios from "axios";

const KEY = "AIzaSyAYCb6Oq9yFC-J4M7O5Wh7emv-ZwN62c7w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
