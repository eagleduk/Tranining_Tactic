const locations = {
  433: {
    labels: ["CF", "CM", "LWF", "CM", "CM", "RWF", "LB", "CB", "CB", "RB"],
    default: [
      [45, 25], // cfRef
      [45, 40], // cmRef
      [15, 30], // lwfRef
      [30, 53], // cm2Ref
      [60, 53], // cm3Ref
      [75, 30], // rwfRef
      [15, 65], // lbRef
      [35, 70], // cbRef
      [55, 70], // cb2Ref
      [75, 65], // rbRef
    ],
    offence: [
      [45, 15], // cfRef
      [55, 30], // cmRef
      [25, 20], // lwfRef
      [35, 30], // cm2Ref
      [45, 43], // cm3Ref
      [65, 20], // rwfRef
      [10, 35], // lbRef
      [25, 48], // cbRef
      [65, 48], // cb2Ref
      [80, 35], // rbRef
    ],
    defence: [
      [45, 52], // cfRef
      [58, 62], // cmRef
      [15, 60], // lwfRef
      [32, 62], // cm2Ref
      [45, 70], // cm3Ref
      [75, 60], // rwfRef
      [16, 77], // lbRef
      [34, 80], // cbRef
      [56, 80], // cb2Ref
      [74, 77], // rbRef
    ],
  },
  442: {
    labels: ["CF", "CF", "LMF", "CM", "CM", "RMF", "LB", "CB", "CB", "RB"],
    default: [
      [35, 30], //cfRef
      [55, 30], //cf2Ref
      [15, 50], //lmfRef
      [35, 50], //cmRef
      [55, 50], //cm2Ref
      [75, 50], //rmfRef
      [15, 70], //lbRef
      [35, 70], //cbRef
      [55, 70], //cb2Ref
      [75, 70], //rbRef
    ],
    offence: [
      [30, 15], //cfRef
      [60, 15], //cf2Ref
      [10, 20], //lmfRef
      [45, 25], //cmRef
      [45, 39], //cm2Ref
      [80, 20], //rmfRef
      [10, 40], //lbRef
      [30, 45], //cbRef
      [60, 45], //cb2Ref
      [80, 40], //rbRef
    ],
    defence: [
      [30, 53], //cfRef
      [60, 53], //cf2Ref
      [25, 68], //lmfRef
      [45, 58], //cmRef
      [45, 70], //cm2Ref
      [65, 68], //rmfRef
      [15, 80], //lbRef
      [35, 80], //cbRef
      [55, 80], //cb2Ref
      [75, 80], //rbRef
    ],
  },
};

export const actions = (position) => {
  return locations[position];
};
