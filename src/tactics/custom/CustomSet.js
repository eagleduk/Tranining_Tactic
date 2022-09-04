import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import styled from "styled-components";
import { FooterContainer, HeaderContainer, Wrapper } from "../../common/common";
import Ball from "../../tools/Ball";
import Field from "../../tools/Field";
import Player from "../../tools/Player";
import Stadium from "../../tools/Stadium";

const AddPlayer = styled(Player)`
  position: static;
  cursor: pointer;
  width: 35px;
  height: 35px;
`;

const AddBall = styled(Ball)``;

export function CustomSet() {
  const [step, setStep] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSeletedPlayer] = useState(-1);
  const contentRef = useRef([]);

  const [result, setResult] = useState([]);
  const ballRef = useRef();

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
    const {
      currentTarget: { parentNode },
    } = event;
    handleSelectPlayer(event, index);
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.currentTarget.style.opacity = ".3";
  };

  const handleDragEnd = (event) => {
    const {
      clientX,
      clientY,
      currentTarget: {
        offsetWidth,
        offsetHeight,
        parentNode: { clientWidth, clientHeight },
      },
    } = event;

    const left = ((clientX - 10 - offsetWidth / 2) / clientWidth) * 100;
    const top =
      ((clientY - (50 + 10 + 35 + 10) - offsetHeight / 2) / clientHeight) * 100;

    event.currentTarget.style.left = `${left}%`;
    event.currentTarget.style.top = `${top}%`;
    event.currentTarget.style.opacity = "1";

    setPlayers((current) => [
      ...current.slice(0, selectedPlayer),
      { ...current[selectedPlayer], left, top },
      ...current.slice(selectedPlayer + 1),
    ]);
  };

  const handleTouch = (event) => {
    const {
      changedTouches: [{ clientX, clientY }],
      currentTarget: {
        offsetWidth,
        offsetHeight,
        parentNode: { clientWidth, clientHeight },
      },
    } = event;

    const left = ((clientX - 10 - offsetWidth / 2) / clientWidth) * 100;
    const top =
      ((clientY - (50 + 10 + 35 + 10) - offsetHeight / 2) / clientHeight) * 100;

    event.currentTarget.style.left = `${left}%`;
    event.currentTarget.style.top = `${top}%`;
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

  const handleDeletePlayer = (event) => {
    if (selectedPlayer > -1) deletePlayer(selectedPlayer);
  };

  const handlePrevStep = (event) => {
    setStep((current) => current - 1);
  };

  const handleNextStep = (event) => {
    setStep((current) => current + 1);
  };

  const saveResult = (event) => {
    console.log(step, players);
  };

  return (
    <Wrapper onClick={handleSelectPlayer}>
      <HeaderContainer>
        <button onClick={saveResult}>save</button>
        <button onClick={() => console.log(selectedPlayer, players)}>
          log
        </button>
        <AddPlayer label="" onClick={() => addPlayer(false)} />
        <AddPlayer label="" onClick={() => addPlayer(true)} against />
        <FontAwesomeIcon
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
                onTouchMove={handleTouch}
                onDragStart={(event) => handleDragStart(event, index)}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={(event) => handleSelectPlayer(event, index)}
                style={{ left: `${player.left}%`, top: `${player.top}%` }}
              />
            );
          })}
          {/*           
          <Ball
            ref={ballRef}
            draggable
            onTouchMove={handleTouch}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          /> */}
        </Field>
      </Stadium>
      <FooterContainer>
        <span style={{ color: "white", fontSize: "22px" }}>{step}</span>
        <button disabled={step === 0} onClick={handlePrevStep}>
          Prev
        </button>
        <button onClick={handleNextStep}>Next</button>
      </FooterContainer>
    </Wrapper>
  );
}
