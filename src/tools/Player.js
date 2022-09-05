import styled from "styled-components";

export const Player = styled.div`
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

  &.selected {
    border-color: blue;
    border-width: 2px;
    border-style: solid;
  }
`;

export const AddPlayer = styled(Player)`
  position: static;
  cursor: pointer;
  width: 35px;
  height: 35px;
`;
