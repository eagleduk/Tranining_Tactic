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
  padding: 10px 15px 10px 15px;
`;

const OutLine = styled.div`
  border-color: ${(props) => props.theme.ground.lineColor};
  border-width: 3px;
  border-style: solid;
`;

const TouchLine = styled(OutLine)`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const SafetyZone = styled(OutLine)`
  width: 50%;
  height: 40%;
  border-top-width: 0px;
`;

const PenaltyZone = styled(OutLine)`
  width: 57%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-top-width: 0px;
`;

const PenaltyCircle = styled(OutLine)`
  width: 20%;
  height: 8%;
  border-bottom-left-radius: 110px;
  border-bottom-right-radius: 110px;
  border-top-width: 0px;
`;

const HalfLine = styled(OutLine)`
  width: 100%;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  box-sizing: border-box;
  top: calc(100% * 0.5);
  position: absolute;
`;

const HalfCircle = styled(OutLine)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: calc(100% * 0.5 - 40px);
  position: absolute;
`;

const SafetyZone2 = styled(OutLine)`
  width: 50%;
  height: 40%;
  border-bottom-width: 0px;
  position: absolute;
  bottom: 0;
`;

const PenaltyZone2 = styled(OutLine)`
  width: 57%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-bottom-width: 0px;
  position: absolute;
  bottom: 0;
`;

const PenaltyCircle2 = styled(OutLine)`
  width: 20%;
  height: 8%;
  border-top-left-radius: 110px;
  border-top-right-radius: 110px;
  border-bottom-width: 0px;
  position: absolute;
  bottom: 20%;
`;

export default function Field({ children }) {
  return (
    <Ground>
      <TouchLine>
        <PenaltyZone>
          <SafetyZone />
        </PenaltyZone>
        <PenaltyCircle />
        <HalfLine />
        <HalfCircle />
        <PenaltyZone2>
          <SafetyZone2 />
        </PenaltyZone2>
        <PenaltyCircle2 />
      </TouchLine>
      {children}
    </Ground>
  );
}
