import { useState } from "react";
import BoardList from "../components/BoardList";
import TodoList from "../components/TodoList";

const Dashboard = () => {
  const [selectedBoard, setSelectedBoard] = useState(null);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <BoardList setSelectedBoard={setSelectedBoard} />
      {selectedBoard && <TodoList board={selectedBoard} />}
    </div>
  );
};

export default Dashboard;
