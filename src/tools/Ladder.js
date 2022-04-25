import styled from "styled-components";

const Ladder = styled.div`
  width: 200px;
  height: 300px;

  border-left: ${(props) => `10px solid ${props.theme.ladderSideColor}`};
  border-right: ${(props) => `10px solid ${props.theme.ladderSideColor}`};
  background: ${(props) => `linear-gradient(
    to bottom,
    ${props.theme.ladderCrossColor} 1%,
    transparent 1% 24%,
    ${props.theme.ladderCrossColor} 24% 25%,
    transparent 25% 49%,
    ${props.theme.ladderCrossColor} 49% 50%,
    transparent 50% 74%,
    ${props.theme.ladderCrossColor} 74% 75%,
    transparent 75% 99%,
    ${props.theme.ladderCrossColor} 99% 100%
  );`};
`;

export default Ladder;
