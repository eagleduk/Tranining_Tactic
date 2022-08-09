import { useEffect, useRef, useState } from "react";
import { actions } from "../actions/formationsAction";
import { HeaderContainer, Wrapper } from "../common/common";
import DefaultButton from "../tools/Buttons";
import Field from "../tools/Field";
import Player from "../tools/Player";
import Stadium from "../tools/Stadium";

export default function Formation({ formation }) {
  const positionInfo = actions(formation);
  const [location, setLocation] = useState("default");
  const references = useRef([]);

  useEffect(() => {
    setLocation("default");
  }, [formation]);

  useEffect(() => {
    references.current.forEach((reference, index) => {
      const [left, top] = positionInfo?.[location]?.[index];
      reference.style.left = `${left}%`;
      reference.style.top = `${top}%`;
    });
  }, [location, positionInfo, references]);

  return (
    <Wrapper>
      <HeaderContainer>
        <DefaultButton onClick={() => setLocation("defence")}>
          Defence
        </DefaultButton>
        <DefaultButton onClick={() => setLocation("default")}>
          {formation}
        </DefaultButton>
        <DefaultButton onClick={() => setLocation("offence")}>
          Offence
        </DefaultButton>
      </HeaderContainer>
      <Stadium>
        <Field></Field>

        {positionInfo.labels.map((label, index) => {
          return (
            <Player
              ref={(el) => (references.current[index] = el)}
              label={label}
              key={index}
            />
          );
        })}
      </Stadium>
    </Wrapper>
  );
}
