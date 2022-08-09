import styled from "styled-components";
import { FormationMenu, TacticsMenu } from "./common/Components/Menu";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

const CategoryWapper = styled.div`
  margin-right: 2px;
  padding: 5px 20px;
  width: 200px;
  box-sizing: border-box;
  border: 1px solid;
  border-color: transparent;
  border-radius: 10px;
  ul {
    display: none;
    font-size: 22px;
    li {
      padding: 5px;
      :hover {
        background-color: aqua;
      }
    }
  }
  &:hover {
    border-color: black;
    ul {
      display: block;
      text-align: right;
    }
  }
`;

const Category = styled.span`
  font-size: 30px;
  display: block;
  text-align: right;
`;

export default function Home() {
  return (
    <HomeContainer>
      <CategoryWapper>
        <Category>Tactics</Category>
        <TacticsMenu />
      </CategoryWapper>
      <CategoryWapper>
        <Category>Position</Category>
        <FormationMenu />
      </CategoryWapper>
    </HomeContainer>
  );
}
