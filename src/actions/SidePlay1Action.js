const locations = [
  [
    [48, 15], // cfRef : left, top
    [16, 26], // lwfRef : left, top
    [82, 22], // rwfRef : left, top
    [88, 48], // rbRef : left, top
    [55, 44], // cmRef : left, top
    [59, 42], // ballRef : left, top
  ],
  [
    [46, 21], // cfRef : left, top
    [18, 22], // lwfRef : left, top
    [68, 28], // rwfRef : left, top
    [88, 37], // rbRef : left, top
    [55, 44], // cmRef : left, top
    [66, 32], // ballRef : left, top
  ],
  [
    [48, 23], // cfRef : left, top
    [20, 20], // lwfRef : left, top
    [68, 20], // rwfRef : left, top
    [88, 30], // rbRef : left, top
    [55, 44], // cmRef : left, top
    [55, 30], // ballRef : left, top
  ],
  [
    [40, 16], // cfRef : left, top
    [24, 16], // lwfRef : left, top
    [56, 14], // rwfRef : left, top
    [80, 14], // rbRef : left, top
    [55, 44], // cmRef : left, top
    [78, 18], // ballRef : left, top
  ],
];

export const actions = (...args) => {
  const action = locations.map((position) => {
    return args.map((arg, index) => {
      return {
        target: arg,
        action: (reference) => {
          const [left, top] = position?.[index];
          reference.current.style.left = `${left}%`;
          reference.current.style.top = `${top}%`;
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
