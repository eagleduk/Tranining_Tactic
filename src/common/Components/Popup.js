import { useState } from "react";
import styled from "styled-components";
import { find } from "../dbInstance";
import DefaultButton from "./Buttons";
import DefaultInput from "./Inputs";

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 330px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
  div {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
`;

export default function Popup({ result, isOpen, setOpen }) {
  const [name, setName] = useState("");
  const handleSetName = (event) => {
    const {
      currentTarget: { value },
    } = event;
    setName(value);
  };

  const handleSaveResult = (event) => {
    console.log(name, result);
    find();
  };

  const handlePopupClose = (event) => {
    console.log(event.currentTarget);
  };

  return (
    <PopupWrapper isOpen={isOpen} onClick={handlePopupClose}>
      <PopupContainer>
        <div>
          <DefaultInput
            type="text"
            name="name"
            value={name}
            onChange={handleSetName}
            placeholder="Input Tactics Name"
          />
        </div>
        <div>
          <DefaultButton onClick={handleSaveResult}>save</DefaultButton>
          <DefaultButton onClick={() => setOpen(false)}>cancel</DefaultButton>
        </div>
      </PopupContainer>
    </PopupWrapper>
  );
}
