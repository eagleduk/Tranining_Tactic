import styled from "styled-components";

const Player = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25px;
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
  transition-duration: 2s;

  ::before {
    content: ${(props) => (props.label ? `"${props.label}"` : "")};
  }
`;

export default Player;
