import { tacticsActions } from "../common/common";

const locations = [
  [
    [45, 22], // cfRef: [left, top]
    [8, 32], // lwfRef: [left, top]
    [82, 35], // rwfRef: [left, top]
    [37, 45], // cmRef: [left, top]
    [40, 35], // cm2Ref: [left, top]
    [14, 20], // rbRef: [left, top]
    [34, 18], // cbRef: [left, top]
    [56, 18], // cb2Ref: [left, top]
    [80, 26], // lbRef: [left, top]
    [36, 47], // ballRef: [left, top]
  ],
  [
    [40, 24], // cfRef: [left, top]
    [17, 32], // lwfRef: [left, top]
    [88, 20], // rwfRef: [left, top]
    [32, 47], // cmRef: [left, top]
    [38, 40], // cm2Ref: [left, top]
    [18, 24], // rbRef: [left, top]
    [32, 20], // cbRef: [left, top]
    [47, 19], // cb2Ref: [left, top]
    [80, 19], // lbRef: [left, top]
    [22, 38], // ballRef: [left, top]
  ],
  [
    [46, 28], // cfRef: [left, top]
    [20, 26], // lwfRef: [left, top]
    [76, 28], // rwfRef: [left, top]
    [48, 48], // cmRef: [left, top]
    [44, 36], // cm2Ref: [left, top]
    [18, 20], // rbRef: [left, top]
    [36, 26], // cbRef: [left, top]
    [50, 22], // cb2Ref: [left, top]
    [78, 20], // lbRef: [left, top]
    [48, 33], // ballRef: [left, top]
  ],
  [
    [48, 30], // cfRef: [left, top]
    [28, 18], // lwfRef: [left, top]
    [72, 24], // rwfRef: [left, top]
    [58, 43], // cmRef: [left, top]
    [52, 36], // cm2Ref: [left, top]
    [18, 20], // rbRef: [left, top]
    [36, 22], // cbRef: [left, top]
    [52, 24], // cb2Ref: [left, top]
    [78, 20], // lbRef: [left, top]
    [60, 42], // ballRef: [left, top]
  ],
  [
    [48, 12], // cfRef: [left, top]
    [34, 12], // lwfRef: [left, top]
    [68, 12], // rwfRef: [left, top]
    [64, 43], // cmRef: [left, top]
    [58, 36], // cm2Ref: [left, top]
    [28, 16], // rbRef: [left, top]
    [40, 16], // cbRef: [left, top]
    [56, 16], // cb2Ref: [left, top]
    [76, 16], // lbRef: [left, top]
    [66, 12], // ballRef: [left, top]
  ],
];

export const actions = (...args) => tacticsActions(locations, [...args]);
