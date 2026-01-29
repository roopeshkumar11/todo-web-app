// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import { AuthProvider, useAuth } from "./auth/AuthContext";
// import React from "react";
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/" />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </AuthProvider>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TodoList from "./components/TodoList";// Wrapper page for TodoList
import { AuthProvider, useAuth } from "./auth/AuthContext";
import React from "react";

// Protect routes for authenticated users
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

function App() {
  return (
    // <AuthProvider>
    //   <Routes>
    //     {/* Public Routes */}
    //     <Route path="/" element={<Login />} />
    //     <Route path="/register" element={<Register />} />

    //     {/* Protected Routes */}
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       }
    //     />

    //     <Route
    //       path="/todolist/:boardId"
    //       element={
    //         <ProtectedRoute>
    //           <TodoList />
    //         </ProtectedRoute>
    //       }
    //     />

    //     {/* Catch-all redirect */}
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </AuthProvider>
    <><Dashboard/></>
  );
}

export default App;
