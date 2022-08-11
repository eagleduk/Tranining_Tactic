import { useEffect, useRef, useState } from "react";
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

export default function Tactics({ players, actions }) {
  const playerRefs = useRef([]);
  const ballRef = useRef();

  const [step, setStep] = useState(0);
  const [onPlay, setPlay] = useState(false);
  const [actionSteps, setActionSteps] = useState([]);

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
    setActionSteps(actions(...playerRefs.current, ballRef.current));
  }, [actions, setActionSteps]);

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
          title="Prev"
        />
        <PauseButton
          onClick={onPauseButtonHandler}
          disabled={!onPlay}
          title="Pause"
        />
        <PlayButton
          onClick={onPlayButtonHandler}
          disabled={step === actionSteps.length - 1 || onPlay}
          title="Play"
        />
        <StopButton
          onClick={onStopButtonHandler}
          disabled={step === 0 || onPlay}
          title="Stop"
        />
        <NextButton
          onClick={onNextStepButtonHandler}
          disabled={step === actionSteps.length - 1 || onPlay}
          title="Next"
        />
      </HeaderContainer>
      <Stadium>
        <Field>
          {players.map(({ label, against }, index) => {
            return (
              <Player
                ref={(el) => (playerRefs.current[index] = el)}
                label={label}
                against={against}
                key={index}
              />
            );
          })}
          <Ball ref={ballRef} />
        </Field>
      </Stadium>
    </Wrapper>
  );
}
