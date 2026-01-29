import { useEffect, useState } from "react";
import API from "../api/api";

const TodoList = ({ board }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await API.get(`/todos/${board._id}`);
    setTodos(res.data);
  };

  const addTodo = async () => {
    await API.post("/todos", { title, boardId: board._id });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await API.put(`/todos/${todo._id}`, {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [board]);

  return (
    <div>
      <h3>{board.name} Todos</h3>
      <input
        placeholder="New Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      {todos.map((t) => (
        <div key={t._id}>
          <span
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
            onClick={() => toggleTodo(t)}
          >
            {t.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
