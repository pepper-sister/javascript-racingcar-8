import { Console } from '@woowacourse/mission-utils';

export default async function getTryCount() {
    const tryCount = Number(await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'));

    return tryCount;
}
