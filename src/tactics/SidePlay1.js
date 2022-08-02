import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { actions } from "../actions/SidePlay1Action";
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

export default function SidePlay1() {
  const cfRef = useRef(),
    lwfRef = useRef(),
    rwfRef = useRef(),
    rbRef = useRef(),
    cmRef = useRef(),
    ballRef = useRef();

  const actionSteps = actions(cfRef, lwfRef, rwfRef, rbRef, cmRef, ballRef);

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
      const action = actionSteps[step];
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
        <Player ref={rbRef} label="RB" />
        <Player ref={cmRef} label="CM" />
        <Ball ref={ballRef} />
      </Stadium>
    </Wrapper>
  );
}
