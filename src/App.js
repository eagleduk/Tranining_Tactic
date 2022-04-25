import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navigate from "./navigate";
import LadderTraining1 from "./trainings/LadderTraining1";

function App() {
  return (
    <>
      <Navigate />

      <Routes>
        <Route path="/" />
        <Route path="/ladder" element={<LadderTraining1 />} />
      </Routes>
    </>
  );
}

export default App;
