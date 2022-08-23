import styled from "styled-components";

const Player = styled.div`
  width: 32px;
  height: 32px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.against
      ? props.theme.player.playerColor2
      : props.theme.player.playerColor};
  color: ${(props) => props.theme.player.playerLabel};
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: ${(props) =>
    props.draggable ? "0s" : props.theme.player.duration};

  ::before {
    content: ${(props) => (props.label ? `"${props.label}"` : "")};
  }
`;

export default Player;
