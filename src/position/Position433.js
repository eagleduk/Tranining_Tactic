import { useEffect, useRef, useState } from "react";
import { actions } from "../actions/positionsAction";
import { HeaderContainer, Wrapper } from "../common/common";
import Field from "../tools/Field";
import Player from "../tools/Player";
import Stadium from "../tools/Stadium";

export default function Position433() {
  const cfRef = useRef(),
    lwfRef = useRef(),
    rwfRef = useRef(),
    cmRef = useRef(),
    cm2Ref = useRef(),
    cm3Ref = useRef(),
    rbRef = useRef(),
    lbRef = useRef(),
    cbRef = useRef(),
    cb2Ref = useRef();

  const [location, setLocation] = useState("default");
  const formation = actions("433");
  useEffect(() => {
    [
      cfRef,
      lwfRef,
      rwfRef,
      cmRef,
      cm2Ref,
      cm3Ref,
      lbRef,
      cbRef,
      cb2Ref,
      rbRef,
    ].forEach((reference, index) => {
      const [left, top] = formation?.[location]?.[index];
      reference.current.style.left = `${left}%`;
      reference.current.style.top = `${top}%`;
    });
  }, [location, formation]);

  return (
    <Wrapper>
      <HeaderContainer>
        <button onClick={() => setLocation("defence")}>Defence</button>
        <button onClick={() => setLocation("default")}>433</button>
        <button onClick={() => setLocation("offence")}>Offence</button>
      </HeaderContainer>
      <Stadium>
        <Field></Field>
        <Player ref={cfRef} label="CF" />
        <Player ref={lwfRef} label="LWF" />
        <Player ref={rwfRef} label="RWF" />
        <Player ref={cmRef} label="CM" />
        <Player ref={cm2Ref} label="CM" />
        <Player ref={cm3Ref} label="CM" />
        <Player ref={lbRef} label="LB" />
        <Player ref={cbRef} label="CB" />
        <Player ref={cb2Ref} label="CB" />
        <Player ref={rbRef} label="RB" />
      </Stadium>
    </Wrapper>
  );
}
