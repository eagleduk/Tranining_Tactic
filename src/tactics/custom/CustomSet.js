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
  const contentRef = useRef(players);
  const ballRef = useRef();

  const addPlayer = (against) => {
    setPlayers((current) => [
      ...current,
      { against, offsetLeft: 50, offsetTop: 50 },
    ]);
  };

  const handlerDragStart = (event) => {
    const { clientX, clientY } = event;
    console.log("start", clientX, clientY);
  };

  const handlerDrag = (event) => {
    //console.log("Drag", event);
  };

  const handlerDragEnd = (event) => {
    const { clientWidth, clientHeight } = event.currentTarget.parentNode;
    const {
      target: { offsetWidth, offsetHeight },
      clientX,
      clientY,
    } = event;

    console.log(
      "end",
      event,
      clientX,
      offsetWidth,
      clientWidth,
      `${(clientX / clientWidth) * 100}%`,
      clientY,
      offsetHeight,
      clientHeight,
      `${(clientY / clientHeight) * 100}%`
    );
    event.currentTarget.style.left = `${
      //   ((clientX - 20) / clientWidth) * 100 +
      //   (offsetWidth / 2 / clientWidth) * 100
      ((clientX - 20 + offsetWidth / 2) / clientWidth) * 100
    }%`;
    event.currentTarget.style.top = `${
      //   ((clientY - (50 + 20 + 35 + 15)) / clientHeight) * 100 +
      //   (offsetHeight / 2 / clientHeight) * 100
      ((clientY - (50 + 20 + 35 + 15) + offsetHeight / 2) / clientHeight) * 100
    }%`;
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
                onDragStart={handlerDragStart}
                onDrag={handlerDrag}
                onDragEnd={handlerDragEnd}
              />
            );
          })}
          <Ball
            ref={ballRef}
            draggable
            onDragStart={handlerDragStart}
            onDrag={handlerDrag}
            onDragEnd={handlerDragEnd}
          />
        </Field>
      </Stadium>
    </Wrapper>
  );
}
