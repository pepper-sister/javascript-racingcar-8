import { Console } from '@woowacourse/mission-utils';
import { INPUT_CAR_NAMES } from '../constants/message.js';

export default async function getCarArray() {
    const carNames = await Console.readLineAsync(INPUT_CAR_NAMES);

    return carNames.split(',');
}
