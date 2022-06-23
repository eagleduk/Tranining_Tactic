import styled from "styled-components";

const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.ballColor};
  position: absolute;
  transition-duration: 2s;
`;

export default Ball;
