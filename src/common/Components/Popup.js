import { useState } from "react";
import styled from "styled-components";
import { addTactics } from "../fbInstance";
import DefaultButton from "./Buttons";
import DefaultInput from "./Inputs";
import ToastMessage from "./ToastMessage";

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

  const [isError, setError] = useState(false);
  const [isMessage, setMessage] = useState(false);

  const handleSetName = (event) => {
    const {
      currentTarget: { value },
    } = event;
    setName(value);
  };

  const handleSaveResult = async (event) => {
    const saveResult = await addTactics(name, { value: result });
    setMessage(true);
    setError(!saveResult);
  };
  const closePopup = () => setOpen(false);

  const handlePopupClose = (event) => {
    if (event.target === event.currentTarget) closePopup();
  };

  return (
    <PopupWrapper isOpen={isOpen} onClick={handlePopupClose}>
      {isMessage && (
        <ToastMessage
          className={isError ? "fail" : "done"}
          setMessage={setMessage}
        />
      )}
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
          <DefaultButton onClick={handleSaveResult} disabled={isMessage}>
            save
          </DefaultButton>
          <DefaultButton onClick={closePopup}>cancel</DefaultButton>
        </div>
      </PopupContainer>
    </PopupWrapper>
  );
}
