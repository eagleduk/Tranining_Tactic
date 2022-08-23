import styled from "styled-components";

const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.ball.color};
  position: absolute;
  transition-duration: ${(props) =>
    props.draggable ? "0s" : props.theme.ball.duration};
`;

export default Ball;
