import { keyframes } from "styled-components";
import { play } from "../common/common";

export const UpStepAnimation = (y) => keyframes`
    from {
        top: ${y}px;
    }
    to {

        top: ${y - 50}px;
    }
`;

export const RightUpStepAnimation = keyframes`
from {
    top: 0px;
    left: 100px;
}
to {
    top: 100px;
    left: 200px;
}
`;

export const LeftUpStepAnimation = keyframes``;

export const UpStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop - 50}px`;
  });
};

export const DownStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop + 50}px`;
  });
};

export const UpRightStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop - 50}px`;
    reference.current.style.left = `${reference.current.offsetLeft + 50}px`;
  });
  // reference.current.animate(
  //   {
  //     transform: "translateY(-20px) translateX(20px)",
  //   },
  //   {
  //     duration: 2000,
  //   }
  // );
};

export const DownLeftStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop + 50}px`;
    reference.current.style.left = `${reference.current.offsetLeft - 50}px`;
  });
};

export const UpLeftStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop - 50}px`;
    reference.current.style.left = `${reference.current.offsetLeft - 50}px`;
  });
};

export const DownRightStep = async (reference, duration) => {
  await play(() => {
    reference.current.style.transitionDuration = `${duration}s`;
    reference.current.style.top = `${reference.current.offsetTop + 50}px`;
    reference.current.style.left = `${reference.current.offsetLeft + 50}px`;
  });
};
