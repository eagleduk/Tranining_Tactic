import Tactics from "../Tactics";
import { players, actions } from "../../actions/switchPlay1Action";

export default function SwitchPlay1() {
  return <Tactics players={players} actions={actions} />;
}
