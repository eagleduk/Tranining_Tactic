import { Link } from "react-router-dom";
import styled from "styled-components";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavStyle = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.menu.containerBGColor};
  z-index: 10;
  top: 0px;
  left: 0px;
  font-size: 18px;
  color: ${(props) => props.theme.menu.color};
  display: grid;
  grid-template-columns: 35% 1fr;
  a {
    display: block;
    width: 100%;
    color: ${(props) => props.theme.menu.color2};

    &:visited {
      color: ${(props) => props.theme.menu.color2};
    }
  }
`;

const Main = styled.div`
  background-color: ${(props) => props.theme.menu.menuBGColor};
`;

const Header = styled.div`
  padding: 10px 0px;
  margin-bottom: 10px;
  svg {
    padding-left: 10px;
  }
  span {
    height: 100%;
    vertical-align: middle;
    padding-bottom: 15px;
  }
`;

const Body = styled.div``;

const Details = styled.details`
  margin-bottom: 5px;
  summary {
    list-style: none;
    padding: 10px 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    :hover {
      background-color: ${(props) => props.theme.menu.hoverColor};
    }
  }

  summary::after {
    content: "+";
    font-size: 22px;
  }

  &[open] summary::after {
    content: "—";
    font-size: 18px;
  }

  li {
    padding: 5px 0;
    font-size: 16px;
    :hover {
      background-color: ${(props) => props.theme.menu.hoverColor};
      cursor: pointer;
    }

    span {
      display: block;
      padding-left: 15px;
      box-sizing: border-box;
    }
  }
`;

export default function Navigate({ setOpenMenu }) {
  return (
    <NavStyle>
      <Main>
        <Header>
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} size="2x" />
            <span> HOME</span>
          </Link>
        </Header>
        <Body>
          <Details style={{ display: "" }}>
            <summary>training</summary>
            <ul>
              <li>
                <Link to="/ladder">
                  <span>ladder training</span>
                </Link>
              </li>
            </ul>
          </Details>
          <Details>
            <summary>tactics</summary>
            <ul>
              <li>
                <Link to="/sideplay1" state={{ title: "Side Play 1" }}>
                  <span>Side Play 1</span>
                </Link>
              </li>
              <li>
                <Link to="/switchplay1" state={{ title: "Switch Play 1" }}>
                  <span>Switch Play 1</span>
                </Link>
              </li>
            </ul>
          </Details>
          <Details>
            <summary>position</summary>
            <ul>
              {/* 
              <li>
                <Link to="/position442">
                  <span>4-4-2</span>
                </Link>
              </li>
              <li>
                <Link to="/position433">
                  <span>4-3-3</span>
                </Link>
              </li>
               */}
              <li>
                <Link to="/positions/442" state={{ title: "4-4-2" }}>
                  <span>4-4-2</span>
                </Link>
              </li>
              <li>
                <Link to="/positions/433" state={{ title: "4-3-3" }}>
                  <span>4-3-3</span>
                </Link>
              </li>
            </ul>
          </Details>
        </Body>
      </Main>
      <div
        style={{ backgroundColor: "inherit" }}
        onClick={() => setOpenMenu(false)}
      ></div>
    </NavStyle>
  );
}
