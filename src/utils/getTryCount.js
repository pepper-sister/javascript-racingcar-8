import { Console } from '@woowacourse/mission-utils';
import { INPUT_TRY_COUNT } from '../constants/message.js';

export default async function getTryCount() {
    const tryCount = Number(await Console.readLineAsync(INPUT_TRY_COUNT));

    return tryCount;
}
