import "./global.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/MainPage";
import AdminPage from "./Pages/AdminPage";
import LoginPage from "./Pages/LoginPage";
import KnowledgePage from "./Pages/KnowledgePage";
import Tutorial from "./Pages/Tutorial";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/knowledge/:id" element={<KnowledgePage />} />
      <Route path="/knowledge/:id" element={<KnowledgePage />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
