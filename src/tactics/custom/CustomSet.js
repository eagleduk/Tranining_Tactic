import { useRef, useState } from "react";
import styled from "styled-components";
import { HeaderContainer, Wrapper } from "../../common/common";
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

export function CustomSet() {
  const [players, setPlayers] = useState([]);
  const contentRef = useRef([]);
  const ballRef = useRef();

  const addPlayer = (against) => {
    setPlayers((current) => [...current, { against }]);
  };

  const handleDragStart = (event) => {
    const {
      currentTarget: { parentNode },
    } = event;
    console.log("start", parentNode);
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

    console.log(
      `clientX: ${clientX}, clientY: ${clientY}, offsetWidth: ${offsetWidth}, offsetHeight: ${offsetHeight}, clientWidth: ${clientWidth}, clientHeight: ${clientHeight}, left: ${left}%, top: ${top}%`,
      event
    );

    event.currentTarget.style.left = `${left}%`;
    event.currentTarget.style.top = `${top}%`;
    event.currentTarget.style.opacity = "1";
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

  return (
    <Wrapper>
      <HeaderContainer>
        <AddPlayer label="" onClick={() => addPlayer(false)} />
        <AddPlayer label="" onClick={() => addPlayer(true)} against />
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
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
              />
            );
          })}
          <Ball
            ref={ballRef}
            draggable
            onTouchMove={handleTouch}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
          />
        </Field>
      </Stadium>
    </Wrapper>
  );
}
