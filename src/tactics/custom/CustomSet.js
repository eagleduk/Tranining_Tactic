import { faFloppyDisk, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { FooterContainer, HeaderContainer, Wrapper } from "../../common/common";
import DefaultButton from "../../common/Components/Buttons";
import CustomIcon from "../../common/Components/CustomIcon";
import Popup from "../../common/Components/Popup";
import { AddBall, Ball } from "../../tools/Ball";
import Field from "../../tools/Field";
import { Player, AddPlayer } from "../../tools/Player";
import Stadium from "../../tools/Stadium";

export function CustomSet() {
  const [step, setStep] = useState(0);

  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSeletedPlayer] = useState(-1);
  const contentRef = useRef([]);

  const [useBall, setUseBall] = useState(false);
  const [ballLocation, setBallLocation] = useState(undefined);
  const ballRef = useRef();

  const [result, setResult] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const addPlayer = (against) => {
    const player = {
      against,
      left: 46.5,
      top: 47,
    };
    setPlayers((current) => [...current, player]);
  };

  const deletePlayer = (index) => {
    setPlayers((current) => [
      ...current.slice(0, index),
      ...current.slice(index + 1),
    ]);
  };

  const handleDragStart = (event, index) => {
    handleSelectPlayer(event, index);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.currentTarget.style.opacity = ".3";
  };

  const handleMoveComponent = (
    event,
    isPlayer,
    { clientX, clientY, offsetWidth, offsetHeight, clientWidth, clientHeight }
  ) => {
    const left = ((clientX - 10 - offsetWidth / 2) / clientWidth) * 100;
    const top =
      ((clientY - (50 + 10 + 35 + 10) - offsetHeight / 2) / clientHeight) * 100;

    event.currentTarget.style.left = `${left}%`;
    event.currentTarget.style.top = `${top}%`;
    event.currentTarget.style.opacity = "1";

    if (isPlayer) {
      setPlayers((current) => [
        ...current.slice(0, selectedPlayer),
        { ...current[selectedPlayer], left, top },
        ...current.slice(selectedPlayer + 1),
      ]);
    } else {
      setBallLocation({ left, top });
    }
  };

  const handleDragEnd = (event, isPlayer) => {
    const {
      clientX,
      clientY,
      currentTarget: {
        offsetWidth,
        offsetHeight,
        parentNode: { clientWidth, clientHeight },
      },
    } = event;

    handleMoveComponent(event, isPlayer, {
      clientX,
      clientY,
      offsetWidth,
      offsetHeight,
      clientWidth,
      clientHeight,
    });
  };

  const handleTouch = (event, isPlayer) => {
    const {
      changedTouches: [{ clientX, clientY }],
      currentTarget: {
        offsetWidth,
        offsetHeight,
        parentNode: { clientWidth, clientHeight },
      },
    } = event;

    handleMoveComponent(event, isPlayer, {
      clientX,
      clientY,
      offsetWidth,
      offsetHeight,
      clientWidth,
      clientHeight,
    });
  };

  const handleSelectPlayer = (event, index) => {
    const prevSelected = contentRef.current[selectedPlayer];
    if (prevSelected) {
      prevSelected.classList.remove("selected");
      setSeletedPlayer(-1);
    }
    if (event && index !== undefined) {
      event.target.classList.add("selected");
      setSeletedPlayer(index);
    }
  };

  const handleBallUse = (event) => setUseBall((current) => !current);

  const handleDeletePlayer = (event) => {
    if (selectedPlayer > -1) deletePlayer(selectedPlayer);
  };

  const handlePrevStep = (event) => {
    setPlayers((current) => result[step - 1].players);
    setUseBall(Boolean(result[step - 1].ball));
    setBallLocation((current) => result[step - 1].ball);
    setStep((current) => current - 1);
  };

  const handleNextStep = (event) => {
    handleSaveResult(event, true);

    setPlayers((current) =>
      result[step + 1] ? result[step + 1].players : players
    );
    setBallLocation((current) =>
      result[step + 1] ? result[step + 1].ball : ballLocation
    );
    setUseBall(
      Boolean(result[step + 1]?.ball ? result[step + 1].ball : useBall)
    );
    setStep((current) => current + 1);
  };

  const handleSaveResult = (event, isPopup) => {
    setResult((current) => [
      ...current.slice(0, step),
      { players, ball: useBall ? ballLocation : null },
      ...current.slice(step + 1),
    ]);

    if (!isPopup) setOpen(true);
  };

  return (
    <Wrapper onClick={handleSelectPlayer}>
      <Popup result={result} isOpen={isOpen} setOpen={setOpen} />
      <HeaderContainer>
        <AddPlayer label="" onClick={() => addPlayer(false)} />
        <AddPlayer label="" onClick={() => addPlayer(true)} against />
        <AddBall useBall={useBall} onClick={handleBallUse} />
        <CustomIcon
          data-is-active
          icon={faTrashCan}
          size="2x"
          onClick={handleDeletePlayer}
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
                draggable
                onTouchMove={(event) => handleTouch(event, true)}
                onDragStart={(event) => handleDragStart(event, index)}
                onDrag={handleDrag}
                onDragEnd={(event) => handleDragEnd(event, true)}
                onClick={(event) => handleSelectPlayer(event, index)}
                style={{ left: `${player.left}%`, top: `${player.top}%` }}
              />
            );
          })}
          {useBall && (
            <Ball
              ref={ballRef}
              draggable
              onTouchMove={handleTouch}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{
                left: `${ballLocation?.left}%`,
                top: `${ballLocation?.top}%`,
              }}
            />
          )}
        </Field>
      </Stadium>
      <FooterContainer>
        <span style={{ color: "white", fontSize: "22px" }}>{step}</span>
        <DefaultButton disabled={step === 0} onClick={handlePrevStep}>
          Prev
        </DefaultButton>
        <DefaultButton onClick={handleNextStep}>Next</DefaultButton>
        <CustomIcon
          data-is-active
          icon={faFloppyDisk}
          size="2x"
          onClick={handleSaveResult}
        />
      </FooterContainer>
    </Wrapper>
  );
}
