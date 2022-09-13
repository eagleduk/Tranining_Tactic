import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTactics } from "../fbInstance";

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

const Select = styled.select`
  width: 100%;
  height: 25px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 5px;
`;

const Option = styled.option`
  width: 100%;
  &:first-child {
    text-align: center;
  }
`;

export function ManualTacticsHome() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    (async () => {
      const tactics = await getTactics();
      setMenus(tactics.map((t) => ({ id: t.id, ...t.data() })));
    })();
  }, []);

  const handleSelectChange = (event) => {
    const {
      currentTarget: { value },
    } = event;
    if (value) {
      navigate(`/tactics/${value}`, {
        state: {
          title: value,
        },
      });
    }
  };

  return (
    <Ul>
      <Select onChange={handleSelectChange}>
        <Option value=""> ------ select ------ </Option>
        {menus.map((data) => {
          return (
            <Option key={data.id} value={data.id}>
              {data.id}
            </Option>
          );
        })}
      </Select>
    </Ul>
  );
}

export function ManualTacticsNav() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    (async () => {
      const tactics = await getTactics();
      setMenus(tactics.map((t) => ({ id: t.id, ...t.data() })));
    })();
  }, []);

  return (
    <Ul>
      {menus.map((data) => {
        return (
          <Li key={data?.id}>
            <Link to={`/tactics/${data.id}`} state={{ title: data.id }}>
              <span>{data.id}</span>
            </Link>
          </Li>
        );
      })}
    </Ul>
  );
}

export function CustomSetMenu() {
  return (
    <Ul>
      <Li>
        <Link to="/custom" state={{ title: "Create Manual" }}>
          <span>Create Manual</span>
        </Link>
      </Li>
    </Ul>
  );
}
