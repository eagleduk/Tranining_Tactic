import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul``;

const Li = styled.li`
  a {
    display: block;
    width: 100%;
  }
`;

export function TrainingMenu() {
  return (
    <Ul>
      <Li>
        <Link to="/ladder">
          <span>ladder training</span>
        </Link>
      </Li>
    </Ul>
  );
}

export function TacticsMenu() {
  return (
    <Ul>
      <Li>
        <Link to="/sideplay1" state={{ title: "Side Play 1" }}>
          <span>Side Play 1</span>
        </Link>
      </Li>
      <Li>
        <Link to="/switchplay1" state={{ title: "Switch Play 1" }}>
          <span>Switch Play 1</span>
        </Link>
      </Li>
    </Ul>
  );
}

export function FormationMenu() {
  return (
    <Ul>
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
      <Li>
        <Link to="/formation/442" state={{ title: "4-4-2" }}>
          <span>4-4-2</span>
        </Link>
      </Li>
      <Li>
        <Link to="/formation/433" state={{ title: "4-3-3" }}>
          <span>4-3-3</span>
        </Link>
      </Li>
    </Ul>
  );
}

export function CustomSetMenu() {
  return (
    <Ul>
      <Li>
        <Link to="/custom">
          <span>Create Custom</span>
        </Link>
      </Li>
    </Ul>
  );
}
