import { Tag, List, Button, Tooltip, Switch, Popconfirm } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const Todo = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip title={todo.completed ? "Incomplete" : "Completed"}>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title={"Are you sure you want to remove this item?"}
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="btn-remove-todo" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="todo-list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? "green" : "red"} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};

export default Todo;
