import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { HeaderContainer, play, Wrapper } from "../common/common";
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
import { actions } from "../actions/sidePlay1Action";

export default function SidePlay1() {
  const cfRef = useRef(),
    lwfRef = useRef(),
    rwfRef = useRef(),
    rbRef = useRef(),
    cmRef = useRef(),
    ballRef = useRef();

  const actionSteps = actions(
    cfRef.current,
    lwfRef.current,
    rwfRef.current,
    rbRef.current,
    cmRef.current,
    ballRef.current
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
        if (target) {
          return play(() => action(target), 3000);
        }
        return null;
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
        <Field>
          <Player ref={cfRef} label="CF" />
          <Player ref={rwfRef} label="RWF" />
          <Player ref={lwfRef} label="LWF" />
          <Player ref={rbRef} label="RB" />
          <Player ref={cmRef} label="CM" />
          <Ball ref={ballRef} />
        </Field>
      </Stadium>
    </Wrapper>
  );
}
