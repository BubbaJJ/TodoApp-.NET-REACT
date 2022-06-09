import { List } from "antd";
import TodoItem from "../todoitem/TodoItem";

const TodoTab = ({ todos, onTodoRemoval, onTodoToggle }) => {
  return (
    <>
      <List
        locale={{ emptyText: "No tasks available." }}
        dataSource={todos}
        renderItem={(todo) => (
          <TodoItem
            todo={todo}
            onTodoToggle={onTodoToggle}
            onTodoRemoval={onTodoRemoval}
          />
        )}
        pagination={{ position: "bottom", pageSize: 5 }}
      />
    </>
  );
};

export default TodoTab;
