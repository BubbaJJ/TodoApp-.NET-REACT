import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodosView } from "../view/todos/todosView";
import RoutingPath from "./RoutingPath";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutingPath.todosView} element={<TodosView />} />
      </Routes>
    </BrowserRouter>
  );
};
