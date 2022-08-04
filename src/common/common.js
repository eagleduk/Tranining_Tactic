export function play(fn, ms = 2000) {
  return new Promise((resolve, reject) => {
    if (typeof fn === "function") fn();
    setTimeout((e) => {
      resolve();
    }, ms);
  }).catch((err) => console.log("play ", err));
}
