import { useEffect, useState } from "react";
import API from "../api/api";
import React from "react";
const BoardList = ({ setSelectedBoard }) => {
  const [boards, setBoards] = useState([]);
  const [name, setName] = useState("");

  const fetchBoards = async () => {
    const res = await API.get("/boards");
    setBoards(res.data);
  };

  const createBoard = async () => {
    await API.post("/boards", { name });
    setName("");
    fetchBoards();
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <div>
      <h3>Boards</h3>
      <input
        placeholder="New Board"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={createBoard}>Add</button>

      {boards.map((b) => (
        <div key={b._id} onClick={() => setSelectedBoard(b)}>
          {b.name}
        </div>
      ))}
    </div>
  );
};

export default BoardList;
