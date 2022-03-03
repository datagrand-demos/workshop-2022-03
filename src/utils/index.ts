async function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, time);
  });
}

function getPromiseWithAbort<T>(p: Promise<T>): {
  promise: Promise<T>;
  abort: () => void;
} {
  let obj: any = {};
  //内部定一个新的promise，用来终止执行
  let p1 = new Promise(function (resolve, reject) {
    obj.abort = reject;
  });
  obj.promise = Promise.race([p, p1]);
  return obj;
}

export {
  sleep,
  getPromiseWithAbort
}