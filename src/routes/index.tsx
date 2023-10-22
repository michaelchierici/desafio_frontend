import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Repository from "../pages/Repository";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="repo/:name/:title" element={<Repository />} />
    </Routes>
  );
}
