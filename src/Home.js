import styled from "styled-components";
import {
  CustomSetMenu,
  FormationMenu,
  ManualTacticsHome,
  TacticsMenu,
} from "./common/Components/Menu";

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

const CategoryWapper = styled.div`
  margin-right: 5px;
  padding: 5px 20px;
  width: 230px;
  box-sizing: border-box;
  border: 3px solid;
  border-color: ${(props) => props.theme.home.borderColor};
  border-radius: 10px;
  color: ${(props) => props.theme.home.color};

  :hover {
    border-color: ${(props) => props.theme.home.borderColor2};
  }

  ul {
    font-size: 22px;
    li {
      padding: 5px;
      display: block;
      text-align: right;
      :hover {
        background-color: ${(props) => props.theme.home.hoverColor};
      }
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
      <CategoryWapper>
        <Category>Manual</Category>
        <ManualTacticsHome />
      </CategoryWapper>
      <CategoryWapper>
        <CustomSetMenu />
      </CategoryWapper>
    </HomeContainer>
  );
}
