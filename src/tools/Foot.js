import styled from "styled-components";

const Foot = styled.div`
  width: 30px;
  height: 60px;
  background-color: ${(props) => {
    console.log("styled props", props);
    return props.theme.footColor;
  }};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textColor};
  position: absolute;
  top: 300px;
  left: ${(props) => (props.footSide === "R" ? "100px" : "50px")};
  &:before {
    content: "${(props) => props.footSide}";
  }
  &.action {
  }
`;

export default Foot;
