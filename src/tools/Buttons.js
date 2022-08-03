import styled from "styled-components";

const DefaultButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border-width: 0;
  background-color: ${(props) => props.theme.button.background};
  opacity: 0.6;
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

const PrevStyle = styled(DefaultButton)`
  &::before {
    content: "«";
  }
`;

function PrevButton(props) {
  return <PrevStyle {...props} />;
}

const PauseStyle = styled(DefaultButton)`
  &::before {
    content: "⇅";
  }
`;

function PauseButton(props) {
  return <PauseStyle {...props} />;
}

const PlayStyle = styled(DefaultButton)`
  &::before {
    content: "›";
  }
`;

function PlayButton(props) {
  return <PlayStyle {...props} />;
}

const StopStyle = styled(DefaultButton)`
  &::before {
    content: "↻";
  }
`;
function StopButton(props) {
  return <StopStyle {...props} />;
}

const NextStyle = styled(DefaultButton)`
  &::before {
    content: "»";
  }
`;
function NextButton(props) {
  return <NextStyle {...props} />;
}

export { PrevButton, PauseButton, PlayButton, StopButton, NextButton };
