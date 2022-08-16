import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackward,
  faForward,
  faPause,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

const DefaultButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${(props) => props.theme.button.background};
  opacity: 0.8;
  color: ${(props) => props.theme.button.color};
  font-size: 22px;
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export default DefaultButton;

const PrevStyle = styled(DefaultButton)``;

function PrevButton(props) {
  return (
    <PrevStyle {...props}>
      <FontAwesomeIcon icon={faBackward} />
    </PrevStyle>
  );
}

const PauseStyle = styled(DefaultButton)``;

function PauseButton(props) {
  return (
    <PauseStyle {...props}>
      <FontAwesomeIcon icon={faPause} />
    </PauseStyle>
  );
}

const PlayStyle = styled(DefaultButton)``;

function PlayButton(props) {
  return (
    <PlayStyle {...props}>
      <FontAwesomeIcon icon={faPlay} />
    </PlayStyle>
  );
}

const StopStyle = styled(DefaultButton)``;
function StopButton(props) {
  return (
    <StopStyle {...props}>
      <FontAwesomeIcon icon={faStop} />
    </StopStyle>
  );
}

const NextStyle = styled(DefaultButton)``;
function NextButton(props) {
  return (
    <NextStyle {...props}>
      <FontAwesomeIcon icon={faForward} />
    </NextStyle>
  );
}

export { PrevButton, PauseButton, PlayButton, StopButton, NextButton };
