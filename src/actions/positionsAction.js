const locations = {
  433: {
    default: [
      [45, 25], // cfRef
      [15, 30], // lwfRef
      [75, 30], // rwfRef
      [45, 40], // cmRef
      [30, 55], // cm2Ref
      [60, 55], // cm3Ref
      [15, 65], // lbRef
      [55, 70], // cbRef
      [35, 70], // cb2Ref
      [75, 65], // rbRef
    ],
    offence: [
      [45, 15], // cfRef
      [25, 25], // lwfRef
      [65, 25], // rwfRef
      [55, 35], // cmRef
      [35, 35], // cm2Ref
      [45, 50], // cm3Ref
      [10, 35], // lbRef
      [65, 52], // cbRef
      [25, 52], // cb2Ref
      [80, 35], // rbRef
    ],
    defence: [
      [45, 50], // cfRef
      [15, 60], // lwfRef
      [75, 60], // rwfRef
      [58, 62], // cmRef
      [32, 62], // cm2Ref
      [45, 70], // cm3Ref
      [16, 77], // lbRef
      [56, 80], // cbRef
      [34, 80], // cb2Ref
      [74, 77], // rbRef
    ],
  },
  442: {
    default: [
      [35, 25], //cfRef
      [55, 25], //cf2Ref
      [15, 50], //lmfRef
      [35, 50], //cmRef
      [55, 50], //cm2Ref
      [75, 50], //rmfRef
      [15, 75], //lbRef
      [35, 75], //cbRef
      [55, 75], //cb2Ref
      [75, 75], //rbRef
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
      [30, 50], //cfRef
      [60, 50], //cf2Ref
      [25, 65], //lmfRef
      [45, 53], //cmRef
      [45, 65], //cm2Ref
      [65, 65], //rmfRef
      [15, 75], //lbRef
      [35, 75], //cbRef
      [55, 75], //cb2Ref
      [75, 75], //rbRef
    ],
  },
};

export const actions = (position) => {
  return locations[position];
};
