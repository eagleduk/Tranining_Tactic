import { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  padding: 0px 20px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  font-size: 24px;
  color: ${(props) => props.theme.messages.color};
  margin-top: 20px;
  cursor: pointer;

  &::before {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
    border-radius: 5px;
  }

  &.done::before {
    content: "${(props) => props.theme.messages.done.content}";
    background-color: ${(props) => props.theme.messages.done.backgroundColor};
  }

  &.fail::before {
    content: "${(props) => props.theme.messages.fail.content}";
    background-color: ${(props) => props.theme.messages.fail.backgroundColor};
  }
`;

export default function ToastMessage({ className, setMessage }) {
  /*
  const handleToastClick = (event, setMessage) => {
    event.currentTarget.remove();
    setMessage(false);
  };
  */

  useEffect(() => {
    setTimeout(() => setMessage(false), 3000);
  }, [setMessage]);

  return (
    <ToastContainer
      className={className}
      onClick={(event) => setMessage(false)}
    />
  );
}
