import "./global.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin" element={<Main />} />
    </Routes>
  );
}

export default App;
