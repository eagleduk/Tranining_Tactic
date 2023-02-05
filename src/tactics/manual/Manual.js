import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FooterContainer, HeaderContainer, Wrapper } from "../../common/common";
import {
  NextButton,
  PauseButton,
  PlayButton,
  PrevButton,
  StopButton,
} from "../../common/Components/Buttons";
import ToastMessage from "../../common/Components/ToastMessage";
import { findTactics, delTactics, targetDoc } from "../../common/fbInstance";
import { Ball } from "../../tools/Ball";
import Field from "../../tools/Field";
import { Player } from "../../tools/Player";
import Stadium from "../../tools/Stadium";

export default function Manual() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isError, setError] = useState(false);
  const [isMessage, setMessage] = useState(false);
  const [actionSteps, setActionSteps] = useState();

  const [step, setStep] = useState(0);
  const [fullStep, setFullStep] = useState(0);
  const [onPlay, setPlay] = useState(false);

  const [players, setPlayers] = useState([]);
  const contentRef = useRef([]);

  const [useBall, setUseBall] = useState(false);
  const [ballLocation, setBallLocation] = useState(undefined);
  const ballRef = useRef();

  useEffect(() => {
    (async () => {
      const target = await targetDoc(id);
      const tactics = await findTactics(target);
      if (tactics) {
        const { value } = tactics.data();
        setActionSteps({ ...value });
        setFullStep(value.length);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!actionSteps) return;
    const { ball, players } = actionSteps[step];

    if (Boolean(ball)) {
      const { left, top } = ball;
      setBallLocation({ left, top });
      setUseBall(Boolean(ball));
    }
    setPlayers(players);
  }, [actionSteps, step]);

  useEffect(() => {
    if (onPlay) {
      if (step < fullStep - 1) {
        setTimeout(() => setStep((current) => current + 1), 3000);
      } else {
        setPlay(false);
      }
    }
  }, [onPlay, step, fullStep]);

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

  const onDeleteHandler = () => {
    const result = delTactics(id);
    setMessage(true);
    setError(!result);
    if (result) {
      setTimeout(() => {
        navigate("/", {
          replace: true,
        });
      }, 3000);
    }
  };

  return (
    <Wrapper>
      {isMessage && (
        <ToastMessage
          className={isError ? "fail" : "done"}
          setMessage={setMessage}
        />
      )}
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
          disabled={step === fullStep - 1 || onPlay}
          title="Play"
        />
        <StopButton
          onClick={onStopButtonHandler}
          disabled={step === 0 || onPlay}
          title="Stop"
        />
        <NextButton
          onClick={onNextStepButtonHandler}
          disabled={step === fullStep - 1 || onPlay}
          title="Next"
        />
      </HeaderContainer>
      <Stadium>
        <Field>
          {players.map((player, index) => {
            return (
              <Player
                key={index}
                ref={(el) => (contentRef.current[index] = el)}
                against={player.against}
                style={{ left: `${player.left}%`, top: `${player.top}%` }}
              />
            );
          })}
          {useBall && (
            <Ball
              ref={ballRef}
              style={{
                left: `${ballLocation?.left}%`,
                top: `${ballLocation?.top}%`,
              }}
            />
          )}
        </Field>
      </Stadium>
      <FooterContainer onClick={onDeleteHandler}>
        <FontAwesomeIcon icon={faTrashCan} />
      </FooterContainer>
    </Wrapper>
  );
}
