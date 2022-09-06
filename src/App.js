import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import Navigate from "./navigate";
import LadderTraining1 from "./trainings/LadderTraining1";
import Home from "./Home";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Formation433 from "./formation/Formation433";
import Formation442 from "./formation/Formation442";
import Formation from "./formation/Formation";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SidePlay1 from "./tactics/SidePlay1";
// import SwitchPlay1 from "./tactics/SwitchPlay1";
import SidePlay1 from "./tactics/sideplay/SidePlay1";
import SwitchPlay1 from "./tactics/switchplay/SwitchPlay1";

import Background from "./images/background.jpg";
import Footer from "./common/Components/Footer";
import { CustomSet } from "./tactics/custom/CustomSet";
import Manual from "./tactics/manual/Manual";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 560px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;

const Header = styled.header`
  height: 50px;
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  box-sizing: border-box;
  border-bottom-width: 4px;
  border-bottom-style: double;
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

const Main = styled.div`
  height: 100%;
  padding: 10px 0;
  background-image: url("${Background}");
  background-size: cover;
  background-position-x: 0px;
  background-repeat: no-repeat;
  box-sizing: border-box;
`;

const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  padding: 10px;
  cursor: pointer;
  width: 45px;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
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

  useEffect(() => setOpenMenu(false), [location?.key]);

  return (
    <Body>
      <Header>
        <MenuButton onClick={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </MenuButton>
        <TitleContainer>{location?.state?.title || "HOME"}</TitleContainer>
      </Header>
      {openMenu ? <Navigate setOpenMenu={setOpenMenu} /> : null}

      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ladder" element={<LadderTraining1 />} />
          <Route path="/sideplay1" element={<SidePlay1 />} />
          <Route path="/switchplay1" element={<SwitchPlay1 />} />
          <Route path="/position442" element={<Formation442 />} />
          <Route path="/position433" element={<Formation433 />} />
          <Route path="/formation">
            <Route path="442" element={<Formation formation={"442"} />} />
            <Route path="433" element={<Formation formation={"433"} />} />
          </Route>
          <Route path="/custom" element={<CustomSet />} />
          <Route path="/tactics">
            <Route path=":id" element={<Manual />} />
          </Route>
        </Routes>
      </Main>

      <Footer />
    </Body>
  );
}

export default App;
