import { useEffect, useRef, useState } from "react";
import { actions } from "../actions/positionsAction";
import { HeaderContainer, Wrapper } from "../common/common";
import Field from "../tools/Field";
import Player from "../tools/Player";
import Stadium from "../tools/Stadium";

export default function Position442() {
  const cfRef = useRef(),
    cf2Ref = useRef(),
    lmfRef = useRef(),
    cmRef = useRef(),
    cm2Ref = useRef(),
    rmfRef = useRef(),
    rbRef = useRef(),
    lbRef = useRef(),
    cbRef = useRef(),
    cb2Ref = useRef();

  const [location, setLocation] = useState("default");
  const formation = actions("442");
  useEffect(() => {
    [
      cfRef,
      cf2Ref,
      lmfRef,
      cmRef,
      cm2Ref,
      rmfRef,
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
        <button onClick={() => setLocation("default")}>442</button>
        <button onClick={() => setLocation("offence")}>Offence</button>
      </HeaderContainer>
      <Stadium>
        <Field></Field>
        <Player ref={cfRef} label="CF" />
        <Player ref={cf2Ref} label="CF" />
        <Player ref={lmfRef} label="LMF" />
        <Player ref={cmRef} label="CM" />
        <Player ref={cm2Ref} label="CM" />
        <Player ref={rmfRef} label="RMF" />
        <Player ref={lbRef} label="LB" />
        <Player ref={cbRef} label="CB" />
        <Player ref={cb2Ref} label="CB" />
        <Player ref={rbRef} label="RB" />
      </Stadium>
    </Wrapper>
  );
}
