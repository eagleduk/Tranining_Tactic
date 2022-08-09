import Tactics from "../Tactics";
import { players, actions } from "../../actions/sidePlay1Action";

export default function SidePlay1() {
  return <Tactics players={players} actions={actions} />;
}
