import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { actions } from "../actions/SidePlay1Action";
import { play } from "../common/common";
import Ball from "../tools/Ball";
import Field from "../tools/Field";
import Player from "../tools/Player";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Groud = styled.div`
  width: 90vw;
  height: 400px;
  position: relative;
  overflow: hidden;
`;

export default function SidePlay1() {
  const [step, setStep] = useState(0);
  const [pause, setPause] = useState(false);
  const cfRef = useRef(),
    lwfRef = useRef(),
    rwfRef = useRef(),
    rbRef = useRef(),
    cmRef = useRef(),
    ballRef = useRef();

  const actionSteps = actions(cfRef, lwfRef, rwfRef, rbRef, cmRef, ballRef);

  const onAction = async () => {
    console.log("======", pause);
    const action = actionSteps[step];
    const actions = action.map(({ target, action }) => {
      return play(() => action(target), 3000);
    });
    if (!pause) await (() => Promise.all(actions))();
  };

  const onPlay = async () => {
    for (let count = step + 1; count < actionSteps.length; count++) {
      console.log(count, pause);
      setStep(count);
      await onAction();
      //await play(undefined, 3000);
    }
  };

  const onReset = () => {
    setStep(0);
  };

  const onPrevStep = () => {
    setPause(false);
    setStep((current) => current - 1);
  };

  const onNextStep = () => {
    setPause(false);
    setStep((current) => current + 1);
  };

  const onPause = () => {
    setPause(true);
  };

  useEffect(() => {
    // console.log("#####", pause);
    // if (pause) return;
    const action = actionSteps[step];
    const actions = action.map(({ target, action }) => {
      return play(() => action(target), 3000);
    });
    (async () => await Promise.all(actions))();
  }, [step, actionSteps, pause]);

  return (
    <Wrapper>
      <div>
        <button onClick={onPrevStep} disabled={step === 0}>
          {" "}
          PREV{" "}
        </button>
        <button onClick={onPause}>PAUSE</button>
        <button onClick={onPlay} disabled={step === actionSteps.length - 1}>
          {" "}
          PLAY{" "}
        </button>
        <button onClick={onReset} disabled={step === 0}>
          {" "}
          RESET{" "}
        </button>
        <button onClick={onNextStep} disabled={step === actionSteps.length - 1}>
          {" "}
          NEXT{" "}
        </button>
        {step}, {pause ? "true" : "false"}
      </div>
      <Groud>
        <Field></Field>
        <Player ref={cfRef} label="CF" />
        <Player ref={rwfRef} label="RWF" />
        <Player ref={lwfRef} label="LWF" />
        <Player ref={rbRef} label="RB" />
        <Player ref={cmRef} label="CM" />
        <Ball ref={ballRef} />
      </Groud>
    </Wrapper>
  );
}
