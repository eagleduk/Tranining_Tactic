import styled from "styled-components";

const Ground = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => `linear-gradient(
    to bottom,
    ${props.theme.ground.groundColor1} 0% 20%,
    ${props.theme.ground.groundColor2} 20% 40%,
    ${props.theme.ground.groundColor1} 40% 60%,
    ${props.theme.ground.groundColor2} 60% 80%,
    ${props.theme.ground.groundColor1} 80% 100%
  );`};
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 10px 15px 0px 15px;
`;

const TouchLine = styled.div`
  width: 100%;
  height: 100%;
  border-color: ${(props) => props.theme.ground.lineColor};
  border-width: 5px;
  border-style: solid;
  border-bottom-width: 0px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const SafetyZone = styled.div`
  width: 50%;
  height: 40%;
  border-color: ${(props) => props.theme.ground.lineColor};
  border-width: 5px;
  border-top-width: 0px;
  border-style: solid;
`;

const PenaltyZone = styled(SafetyZone)`
  width: 57%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const PenaltyCircle = styled.div`
  width: 20%;
  height: 8%;
  border-bottom-left-radius: 110px;
  border-bottom-right-radius: 110px;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.theme.ground.lineColor};
  border-top-width: 0px;
`;

const HalfLine = styled.div`
  width: 100%;
  border-top-color: ${(props) => props.theme.ground.lineColor};
  border-top-width: 5px;
  border-top-style: solid;
  box-sizing: border-box;
  top: calc(100% * 0.92);
  position: absolute;
`;

const HalfCircle = styled.div`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: ${(props) => props.theme.ground.lineColor};
  top: calc(100% * 0.92 - 10%);
  position: absolute;
`;

export default function Field() {
  return (
    <Ground>
      <TouchLine>
        <PenaltyZone>
          <SafetyZone />
        </PenaltyZone>
        <PenaltyCircle />
        <HalfLine />
        <HalfCircle />
      </TouchLine>
    </Ground>
  );
}
