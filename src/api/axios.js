import axios from "axios";

export default axios.create({
  baseURL: "https://finmanlocal.herokuapp.com/api",
});
