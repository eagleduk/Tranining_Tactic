import { Link } from "react-router-dom";
import styled from "styled-components";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormationMenu, TacticsMenu } from "./common/Components/Menu";

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
    ::-webkit-details-marker {
      display: none;
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
          <Details>
            <summary>Tactics</summary>
            <TacticsMenu />
          </Details>
          <Details>
            <summary>Formation</summary>
            <FormationMenu />
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
