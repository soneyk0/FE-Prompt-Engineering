// eslint-disable-next-line no-restricted-globals
self.onmessage = function () {
  let t = 0;
  for (let i = 0; i < 1e8; i++) {
    t += i;
  }
  // eslint-disable-next-line no-restricted-globals
  // @ts-ignore
  self.postMessage(t);
};

export {}; 