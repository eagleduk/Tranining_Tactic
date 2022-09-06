import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  DownLeftStep,
  DownRightStep,
  DownStep,
  UpLeftStep,
  UpRightStep,
  UpStep,
} from "../actions/LadderTraining1Action";
import { play } from "../common/common";

import Foot from "../tools/Foot";
import Ladder from "../tools/Ladder";
import TrainingContainer from "../tools/TrainingContainer";

function LadderTraining1() {
  const [trainingStep, setTrainingStep] = useState(0);
  const [pause, setPause] = useState(false);
  const [playTraining, setPlayTraning] = useState();

  const leftFoot = useRef();
  const rightFoot = useRef();

  const steps = useMemo(() => {
    return [
      [],
      [rightFoot, UpRightStep],
      [leftFoot, UpRightStep],
      [rightFoot, UpRightStep],
      [leftFoot, UpStep],
      [rightFoot, UpLeftStep],
      [leftFoot, UpLeftStep],
      [rightFoot, UpStep],
      [leftFoot, UpRightStep],
      [rightFoot, UpRightStep],
    ];
  }, []);

  const reverseSteps = [
    [],
    [rightFoot, DownLeftStep],
    [leftFoot, DownLeftStep],
    [rightFoot, DownLeftStep],
    [leftFoot, DownStep],
    [rightFoot, DownRightStep],
    [leftFoot, DownRightStep],
    [rightFoot, DownStep],
    [leftFoot, DownLeftStep],
    [rightFoot, DownLeftStep],
  ];

  const onTrainingPause = () => {
    setPause(false);
    clearInterval(playTraining);
  };

  const onTrainingStart = (event) => {
    setPause(true);

    setPlayTraning(
      setInterval(() => {
        setTrainingStep((prev) => prev + 1);
      }, 2000)
    );
  };

  const onNextStep = async () => {
    const [target, action] = steps[trainingStep];
    setTrainingStep((prev) => prev + 1);
    // await action(target, 0);
  };

  const onPrevStep = async () => {
    const [target, action] = reverseSteps[trainingStep];
    setTrainingStep((prev) => prev - 1);
    // await action(target, 0);
  };

  useEffect(() => {
    if (trainingStep === steps.length) {
      setTrainingStep(0);
      clearInterval(playTraining);
    } else if (trainingStep === 0) {
    } else {
      const [target, action] = steps[trainingStep];
      if (target && action) (async () => await action(target, 2))();
    }
  }, [trainingStep, steps, playTraining]);

  return (
    <>
      <h1>Ladder Training : {trainingStep}</h1>

      <button disabled={trainingStep === 0 ? true : false} onClick={onPrevStep}>
        Prev
      </button>

      <button onClick={onTrainingPause}>TrainingPause</button>

      <button onClick={onTrainingStart}>TrainingStart</button>

      <button
        disabled={trainingStep === steps.length - 1 ? true : false}
        onClick={onNextStep}
      >
        Next
      </button>

      <TrainingContainer>
        <Ladder />
        <Foot ref={leftFoot} footSide="L" />
        <Foot ref={rightFoot} footSide="R" />
      </TrainingContainer>
    </>
  );
}

export default LadderTraining1;
