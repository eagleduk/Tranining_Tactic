/*
  cfRef,
  lwfRef,
  rwfRef,
  rbRef,
  lbRef,
  cbRef,
  cb2Ref,
  cmRef,
  cm2Ref,
  ballRef
  */

const locations = [];

export const actions = (...args) => {
  const action = locations.map((position) => {
    return args.map((arg, index) => {
      return {
        target: arg,
        action: (reference) => {
          reference.current.style.top = `${position[index]?.top}%`;
          reference.current.style.left = `${position[index]?.left}%`;
        },
      };
    });
  });
  return action;
};
