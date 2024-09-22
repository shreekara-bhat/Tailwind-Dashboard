import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import GridBox from "./scenes/GridBox";
import ValueCalc from "./scenes/ValueCalc";
import DefaultPage from "./scenes/DefaultPage";
import InputBox from "./scenes/InputBox";
import EditableTableCells from "./scenes/EditableTableCells";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/DefaultPage" replace />} />
        <Route path="/DefaultPage" element={<DefaultPage />} />
        <Route path="/GridBox" element={<GridBox />} />
        <Route path="/ValueCalc" element={<ValueCalc />} />
        <Route path="/InputBox" element={<InputBox />} />
        <Route path="/EditableTableCells" element={<EditableTableCells />} />
      </Route>
    </Routes>
  );
}

// Input Box Logic
