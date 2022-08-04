import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { actions } from "../actions/SwitchPlay1Action";
import { play } from "../common/common";
import Ball from "../tools/Ball";
import {
  NextButton,
  PauseButton,
  PlayButton,
  PrevButton,
  StopButton,
} from "../tools/Buttons";
import Field from "../tools/Field";
import Player from "../tools/Player";
import Stadium from "../tools/Stadium";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  gap: 5px;
  justify-content: center;
`;

export default function SwitchPlay1() {
  const cfRef = useRef(),
    lwfRef = useRef(),
    rwfRef = useRef(),
    rbRef = useRef(),
    lbRef = useRef(),
    cbRef = useRef(),
    cb2Ref = useRef(),
    cmRef = useRef(),
    cm2Ref = useRef(),
    ballRef = useRef();
  console.dir(cfRef);

  const actionSteps = actions(
    cfRef,
    lwfRef,
    rwfRef,
    rbRef,
    lbRef,
    cbRef,
    cb2Ref,
    cmRef,
    cm2Ref,
    ballRef
  );

  const [step, setStep] = useState(0);
  const [onPlay, setPlay] = useState(false);

  const onPlayButtonHandler = () => {
    setPlay(true);
    setStep((current) => current + 1);
  };

  const onStopButtonHandler = () => {
    setStep(0);
    setPlay(false);
  };

  const onPrevStepButtonHandler = () => {
    setPlay(false);
    setStep((current) => current - 1);
  };

  const onNextStepButtonHandler = () => {
    setPlay(false);
    setStep((current) => current + 1);
  };

  const onPauseButtonHandler = () => {
    setPlay(false);
  };

  useEffect(() => {
    (async () => {
      const action = actionSteps[step] || [];
      const actionPromises = action.map(({ target, action }) => {
        return play(() => action(target), 3000);
      });
      await (() =>
        Promise.all(actionPromises).then(() => {
          if (onPlay) {
            if (step === actionSteps.length - 1) {
              setPlay(false);
            } else {
              setStep((current) => current + 1);
            }
          }
        }))();
    })();
  }, [step, actionSteps, onPlay]);

  return (
    <Wrapper>
      <HeaderContainer>
        <PrevButton
          onClick={onPrevStepButtonHandler}
          disabled={step === 0 || onPlay}
        />
        <PauseButton onClick={onPauseButtonHandler} disabled={!onPlay} />
        <PlayButton
          onClick={onPlayButtonHandler}
          disabled={step === actionSteps.length - 1 || onPlay}
        />
        <StopButton
          onClick={onStopButtonHandler}
          disabled={step === 0 || onPlay}
        />
        <NextButton
          onClick={onNextStepButtonHandler}
          disabled={step === actionSteps.length - 1 || onPlay}
        />
      </HeaderContainer>
      <Stadium>
        <Field></Field>
        <Player ref={cfRef} label="CF" />
        <Player ref={rwfRef} label="RWF" />
        <Player ref={lwfRef} label="LWF" />
        <Player ref={cmRef} label="CM" />
        <Player ref={cm2Ref} label="CM" against />
        <Player ref={rbRef} label="RB" against />
        <Player ref={lbRef} label="LB" against />
        <Player ref={cbRef} label="CB" against />
        <Player ref={cb2Ref} label="CB" against />
        <Ball ref={ballRef} />
      </Stadium>
    </Wrapper>
  );
}
