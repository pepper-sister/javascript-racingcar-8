import { Console } from '@woowacourse/mission-utils';
import { INPUT_TRY_COUNT } from '../constants/message.js';
import { ERROR_TRY_COUNT } from '../constants/error.js';

export default async function getTryCount() {
    const tryCount = Number(await Console.readLineAsync(INPUT_TRY_COUNT));
    if (isNaN(tryCount)) throw new Error(`${ERROR_TRY_COUNT}`);

    return tryCount;
}
