import styled from "styled-components";
import {
  UpStepAnimation,
  RightUpStepAnimation,
  LeftUpStepAnimation,
} from "../actions/LadderTraining1Action";

const Foot = styled.div`
  width: 30px;
  height: 60px;
  background-color: ${(props) => props.theme.footColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  position: absolute;
  top: 270px;
  left: ${(props) => (props.footSide === "R" ? "100px" : "50px")};
  &:before {
    content: "${(props) => props.footSide}";
  }
  &.trainingStart {
    animation-name: ${UpStepAnimation(100)};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  &.UpStep {
    transform: "translateY(-20px)";
  }
  &.RightUpStep {
    transform: translateY(-20px) translateX(20px);
  }
  &.LeftUpStep {
    transform: translateY(-20px) translateX(-20px);
  }
`;

export default Foot;
