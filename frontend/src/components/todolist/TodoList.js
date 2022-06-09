import { useCallback, useEffect, useState } from "react";
import { Tabs, Row, Col, Layout, message } from "antd";
import {
  getTodoList,
  deleteTodo,
  updateTodo,
  createTodo,
} from "../../shared/api/service/TodoApiService";
import TodoTab from "../todotab/TodoTab";
import TodoForm from "../todoform/TodoForm";
import "./TodoList.css";

const { TabPane } = Tabs;
const { Content } = Layout;

const TodoList = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [activeTodoList, setActiveTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  const handleFormSubmit = (todo) => {
    console.log("Todo to create: ", todo);
    createTodo(todo);
    onRefresh();
    message.success("Todo created successfully");
  };

  const handleRemoveTodo = (todo) => {
    deleteTodo(todo);
    onRefresh();
    message.warn("Todo deleted successfully");
  };

  const handleToggleTodoStatus = (todo) => {
    todo.completed = !todo.completed;
    updateTodo(todo);
    onRefresh();
    message.info("Todo updated successfully");
  };

  const refresh = () => {
    getTodoList().then(({ data }) => {
      setTodoList(data);
      console.log(data);
      setActiveTodoList(data.filter((todo) => !todo.completed));
      setCompletedTodoList(data.filter((todo) => todo.completed));
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    let { data } = await getTodoList();
    setTodoList(data);
    setActiveTodoList(data.filter((todo) => !todo.completed));
    setCompletedTodoList(data.filter((todo) => todo.completed));
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    refresh();
  }, [onRefresh]);

  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <div className="todolist">
          <Row>
            <Col span={14} offset={5}>
              <h1>Todos</h1>
              <TodoForm onFormSubmit={handleFormSubmit} />
              <br />
              <Tabs defaultActiveKey="all">
                <TabPane tab="All" key="all">
                  <TodoTab
                    todos={todoList}
                    onTodoToggle={handleToggleTodoStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
                <TabPane tab="Active" key="active">
                  <TodoTab
                    todos={activeTodoList}
                    onTodoToggle={handleToggleTodoStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
                <TabPane tab="Completed" key="completed">
                  <TodoTab
                    todos={completedTodoList}
                    onTodoToggle={handleToggleTodoStatus}
                    onTodoRemoval={handleRemoveTodo}
                  />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default TodoList;
