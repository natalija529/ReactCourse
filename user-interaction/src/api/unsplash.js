import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID BYJn-pvHToLx2BVGoY1agV8ziHVEKJoj_xEV_61bTd0",
  },
});
