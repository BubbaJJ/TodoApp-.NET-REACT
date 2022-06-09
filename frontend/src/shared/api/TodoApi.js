import axios from "axios";

const TodoAPI = axios.create({
  baseURL: "https://localhost:44337/api/todos",
});

TodoAPI.defaults.headers.post["Content-Type"] = "application/json";
TodoAPI.defaults.headers.put["Content-Type"] = "application/json";

export default TodoAPI;
