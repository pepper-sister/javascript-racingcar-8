import { Console } from '@woowacourse/mission-utils';
import { INPUT_CAR_NAMES } from '../constants/message.js';

export default async function getCarArray() {
    const carNames = await Console.readLineAsync(INPUT_CAR_NAMES);
    const carArray = carNames.split(',').map((name) => name.trim());

    return carArray;
}
