import ballImage from "../images/ballImage.png";

import styled from "styled-components";

export const Ball = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  background-image: url("${ballImage}");
  background-size: cover;
  transition-duration: ${(props) =>
    props.draggable ? "0s" : props.theme.ball.duration};
`;

export const AddBall = styled(Ball)`
  position: static;
  cursor: pointer;
  width: 35px;
  height: 35px;
  opacity: ${(props) => (props.useBall ? ".3" : "1")};
  transition-duration: 0s;
`;
