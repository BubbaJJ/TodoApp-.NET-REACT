import http from "../TodoApi";

export const getTodoList = () => {
  return http.get("");
};

export const getTodoById = (id) => {
  return http.get(`/${id}`);
};

export const deleteTodo = (id) => {
  return http.delete(`/${id}`);
};

export const createTodo = (todo) => {
  return http.post("", JSON.stringify(todo));
};

export const updateTodo = (todo) => {
  http.put(`/${todo.id}`, JSON.stringify(todo));
};
