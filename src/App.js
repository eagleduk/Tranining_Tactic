import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import Navigate from "./navigate";
import LadderTraining1 from "./trainings/LadderTraining1";
import SidePlay1 from "./tactics/SidePlay1";
import Home from "./Home";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  const { pathname } = useLocation();

  //useEffect(() => setOpenMenu(false), [pathname]);

  return (
    <Body>
      <button onClick={() => setOpenMenu(true)}> = </button>
      {openMenu ? <Navigate setOpenMenu={setOpenMenu} /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladder" element={<LadderTraining1 />} />
        <Route path="/sideplay1" element={<SidePlay1 />} />
      </Routes>
    </Body>
  );
}

export default App;
