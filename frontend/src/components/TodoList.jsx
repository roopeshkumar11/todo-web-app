import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import React from "react";

const TodoList = ({ board }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch todos
  const fetchTodos = async () => {
    if (!board?._id) return; // Guard clause
    try {
      const res = await API.get(`/todos/${board._id}`);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async () => {
    if (!title.trim()) return;
    await API.post("/todos", { title, boardId: board._id });
    setTitle("");
    fetchTodos();
  };

  const toggleTodo = async (todo) => {
    await API.put(`/todos/${todo._id}`, { completed: !todo.completed });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, [board]);

  // If board is not yet loaded
  if (!board) {
    return <div className="p-6 text-gray-600 text-center">Loading board...</div>;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      {/* Dashboard Link */}
      <div className="mb-4">
        <Link
          to="/dashboard"
          className="inline-block text-blue-500 hover:underline text-sm font-semibold"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      <h3 className="text-lg font-bold mb-3 text-gray-800">{board.name}</h3>

      {/* Add Todo */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add new todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>

      {/* Todo Cards */}
      {loading ? (
        <p className="text-gray-600 text-center">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos yet. Add your first task!</p>
      ) : (
        <div className="space-y-3">
          {todos.map((t) => (
            <div
              key={t._id}
              className={`p-3 rounded-md shadow-sm flex justify-between items-center cursor-pointer transition hover:shadow-md ${
                t.completed ? "bg-green-50" : "bg-white"
              }`}
            >
              <span
                onClick={() => toggleTodo(t)}
                className={`flex-1 ${t.completed ? "line-through text-gray-400" : "text-gray-800"}`}
              >
                {t.title}
              </span>
              <span
                onClick={() => toggleTodo(t)}
                className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  t.completed ? "bg-green-200 text-green-800" : "bg-gray-200 text-gray-700"
                }`}
              >
                {t.completed ? "Done" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
