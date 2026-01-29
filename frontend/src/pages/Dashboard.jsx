import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
import React from "react";
const Dashboard = () => {
  const [boards, setBoards] = useState([]);

  // Fetch all boards for logged-in user
  const fetchBoards = async () => {
    try {
      const res = await API.get("/boards"); // Make sure your backend endpoint is /boards
      setBoards(res.data);
    } catch (err) {
      console.error("Error fetching boards:", err);
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Your Boards</h1>

      {boards.length === 0 ? (
        <p className="text-gray-600">No boards yet. Create one to get started!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {boards.map((board) => (
            <Link
              key={board._id}
              to={`/todolist/${board._id}`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{board.name}</h2>
              <p className="text-sm text-gray-500">
                {board.todos?.length || 0} todos
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
