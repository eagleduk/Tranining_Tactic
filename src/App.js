import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import Navigate from "./navigate";
import LadderTraining1 from "./trainings/LadderTraining1";
import SidePlay1 from "./tactics/SidePlay1";
import Home from "./Home";
import styled from "styled-components";
import { useEffect, useState } from "react";
import SwitchPlay1 from "./tactics/SwitchPlay1";
import Position433 from "./position/Position433";
import Position442 from "./position/Position442";
import Positions from "./position/Positions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultButton from "./tools/Buttons";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  height: 50px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
`;

const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  padding: 10px;
  cursor: pointer;
  width: 45px;
  box-sizing: border-box;
`;

const TitlaContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`;

function App() {
  const [openMenu, setOpenMenu] = useState(true);
  const location = useLocation();
  //console.log("App js ", key);

  useEffect(() => setOpenMenu(false), [location?.key]);

  return (
    <Body>
      <Header>
        <MenuButton onClick={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuButton>
        <TitlaContainer>{location?.state?.title}</TitlaContainer>
      </Header>
      {openMenu ? <Navigate setOpenMenu={setOpenMenu} /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ladder" element={<LadderTraining1 />} />
        <Route path="/sideplay1" element={<SidePlay1 />} />
        <Route path="/switchplay1" element={<SwitchPlay1 />} />
        <Route path="/position442" element={<Position442 />} />
        <Route path="/position433" element={<Position433 />} />
        <Route path="/positions">
          <Route path="442" element={<Positions formation={"442"} />} />
          <Route path="433" element={<Positions formation={"433"} />} />
        </Route>
      </Routes>
    </Body>
  );
}

export default App;
