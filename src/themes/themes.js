const TRANSITIONTIME = "2s";

export const defaultTheme = {
  backgroundColor: "white",
  borderColor: "darkgrey",
  textColor: "black",

  ladderSideColor: "black",
  ladderCrossColor: "red",

  footColor: "tomato",

  ball: {
    color: "black",
    duration: TRANSITIONTIME,
  },

  home: {
    color: "white",
    borderColor: "darkgrey",
    borderColor2: "crimson",
    hoverColor: "aqua",
  },

  menu: {
    containerBGColor: "rgba(0, 0, 0, .6)",
    menuBGColor: "rgba(0, 0, 0, 1)",
    color: "white",
    color2: "white",
    hoverColor: "gray",
  },

  player: {
    playerColor: "tomato",
    playerColor2: "violet",
    playerLabel: "white",
    duration: TRANSITIONTIME,
  },

  ground: {
    groundColor1: "green",
    groundColor2: "greenyellow",
    lineColor: "white",
  },

  button: {
    background: "tomato",
    color: "white",
  },

  icon: {
    normal: "rgba(0,0,0, .6)",
    hover: "rgba(0,0,0, .8)",
    active: "rgba(10,10,10, 1)",
    disabled: "rgba(0,0,0, .3)",
  },

  messages: {
    color: "rgba(230, 230, 230, 1)",
    done: {
      content: "Saved.",
      backgroundColor: "rgba(55, 183, 29, 1)",
    },
    fail: {
      content: "An error occurred.",
      backgroundColor: "rgba(128, 0, 0, 1)",
    },
  },
};
