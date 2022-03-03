import { sleep } from '../utils';

async function startRun() {
  await sleep(3000);
  return 'success';
}

export {
  startRun
}