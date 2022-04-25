import { useRef } from "react";

import Foot from "../tools/Foot";
import Ladder from "../tools/Ladder";
import TrainingContainer from "../tools/TrainingContainer";

function LadderTraining1() {
  const leftFoot = useRef();
  //   console.log(leftFoot.current.classList);
  return (
    <>
      <h1>Ladder Training</h1>
      <TrainingContainer>
        <Ladder />
        <Foot ref={leftFoot} footSide="L" />
        <Foot footSide="R" />
      </TrainingContainer>
    </>
  );
}

export default LadderTraining1;
