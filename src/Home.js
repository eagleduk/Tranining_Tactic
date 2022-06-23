import Ball from "./tools/Ball";
import Foot from "./tools/Foot";
import Ladder from "./tools/Ladder";
import Player from "./tools/Player";

export default function Home() {
  return (
    <>
      <Foot />
      <Ladder />
      <Player position={{ x: 112, y: 223 }} label="RB" />

      <Ball position={{ x: 110, y: 225 }} />
    </>
  );
}
