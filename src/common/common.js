export function play(fn, ms = 2000) {
  if (typeof "function") fn();
  return new Promise((resolve, reject) => {
    setTimeout((e) => {
      resolve();
    }, ms);
  });
}
