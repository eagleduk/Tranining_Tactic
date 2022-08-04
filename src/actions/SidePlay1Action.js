const positions = [
  [
    { left: 48, top: 15 }, // cfRef
    { left: 16, top: 26 }, // lwfRef
    { left: 82, top: 22 }, // rwfRef
    { left: 88, top: 77 }, // rbRef
    { left: 55, top: 82 }, // cmRef
    { left: 59, top: 80 }, // ballRef
  ],
  [
    { left: 46, top: 21 }, // cfRef
    { left: 18, top: 22 }, // lwfRef
    { left: 72, top: 33 }, // rwfRef
    { left: 88, top: 44 }, // rbRef
    { left: 55, top: 82 }, // cmRef
    { left: 72, top: 38 }, // ballRef
  ],
  [
    { left: 48, top: 23 }, // cfRef
    { left: 20, top: 20 }, // lwfRef
    { left: 72, top: 33 }, // rwfRef
    { left: 88, top: 30 }, // rbRef
    { left: 55, top: 82 }, // cmRef
    { left: 55, top: 30 }, // ballRef
  ],
  [
    { left: 40, top: 16 }, // cfRef
    { left: 24, top: 16 }, // lwfRef
    { left: 56, top: 14 }, // rwfRef
    { left: 80, top: 14 }, // rbRef
    { left: 55, top: 82 }, // cmRef
    { left: 78, top: 18 }, // ballRef
  ],
];

export const actions = (...args) => {
  const action = positions.map((position) => {
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

/*
export const actions = (cfRef, lwfRef, rwfRef, rbRef, cmRef, ballRef) => {
  return [
    [
      {
        target: cfRef,
        action: (reference) => {
          reference.current.style.top = `15%`;
          reference.current.style.left = `48%`;
        },
      },
      {
        target: rwfRef,
        action: (reference) => {
          reference.current.style.top = `22%`;
          reference.current.style.left = `82%`;
        },
      },
      {
        target: lwfRef,
        action: (reference) => {
          reference.current.style.top = `26%`;
          reference.current.style.left = `16%`;
        },
      },
      {
        target: rbRef,
        action: (reference) => {
          reference.current.style.top = `77%`;
          reference.current.style.left = `88%`;
        },
      },
      {
        target: cmRef,
        action: (reference) => {
          reference.current.style.top = `82%`;
          reference.current.style.left = `55%`;
        },
      },
      {
        target: ballRef,
        action: (reference) => {
          reference.current.style.top = `80%`;
          reference.current.style.left = `59%`;
        },
      },
    ],
    [
      {
        target: cfRef,
        action: (reference) => {
          reference.current.style.top = `21%`;
          reference.current.style.left = `46%`;
        },
      },
      {
        target: rwfRef,
        action: (reference) => {
          reference.current.style.top = `33%`;
          reference.current.style.left = `72%`;
        },
      },
      {
        target: lwfRef,
        action: (reference) => {
          reference.current.style.top = `22%`;
          reference.current.style.left = `18%`;
        },
      },
      {
        target: rbRef,
        action: (reference) => {
          reference.current.style.top = `44%`;
          reference.current.style.left = `88%`;
        },
      },
      {
        target: cmRef,
        action: (reference) => {
          reference.current.style.top = `82%`;
          reference.current.style.left = `55%`;
        },
      },
      {
        target: ballRef,
        action: (reference) => {
          reference.current.style.top = `38%`;
          reference.current.style.left = `72%`;
        },
      },
    ],
    [
      {
        target: cfRef,
        action: (reference) => {
          reference.current.style.top = `23%`;
          reference.current.style.left = `48%`;
        },
      },
      {
        target: rwfRef,
        action: (reference) => {
          reference.current.style.top = `33%`;
          reference.current.style.left = `72%`;
        },
      },
      {
        target: lwfRef,
        action: (reference) => {
          reference.current.style.top = `20%`;
          reference.current.style.left = `20%`;
        },
      },
      {
        target: rbRef,
        action: (reference) => {
          reference.current.style.top = `30%`;
          reference.current.style.left = `88%`;
        },
      },
      {
        target: cmRef,
        action: (reference) => {
          reference.current.style.top = `82%`;
          reference.current.style.left = `55%`;
        },
      },
      {
        target: ballRef,
        action: (reference) => {
          reference.current.style.top = `30%`;
          reference.current.style.left = `55%`;
        },
      },
    ],
    [
      {
        target: cfRef,
        action: (reference) => {
          reference.current.style.top = `16%`;
          reference.current.style.left = `40%`;
        },
      },
      {
        target: rwfRef,
        action: (reference) => {
          reference.current.style.top = `14%`;
          reference.current.style.left = `56%`;
        },
      },
      {
        target: lwfRef,
        action: (reference) => {
          reference.current.style.top = `16%`;
          reference.current.style.left = `24%`;
        },
      },
      {
        target: rbRef,
        action: (reference) => {
          reference.current.style.top = `14%`;
          reference.current.style.left = `80%`;
        },
      },
      {
        target: cmRef,
        action: (reference) => {
          reference.current.style.top = `82%`;
          reference.current.style.left = `55%`;
        },
      },
      {
        target: ballRef,
        action: (reference) => {
          reference.current.style.top = `18%`;
          reference.current.style.left = `78%`;
        },
      },
    ],
  ];
};
*/
