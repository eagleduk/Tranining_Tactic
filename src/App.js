import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navigate from "./navigate";
import LadderTraining1 from "./trainings/LadderTraining1";
import SidePlay1 from "./tactics/SidePlay1";
import Home from "./Home";

function App() {
  return (
    <>
      <Navigate />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladder" element={<LadderTraining1 />} />
        <Route path="/sideplay1" element={<SidePlay1 />} />
      </Routes>
    </>
  );
}

export default App;
