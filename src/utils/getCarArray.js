import { Console } from '@woowacourse/mission-utils';
import { INPUT_CAR_NAMES } from '../constants/message.js';
import { ERROR_CAR_NAME } from '../constants/error.js';
import { MIN_NAME_LENGTH, MAX_NAME_LENGTH } from '../constants/car.js';

export default async function getCarArray() {
    const carNames = await Console.readLineAsync(INPUT_CAR_NAMES);
    const carArray = carNames.split(',').map((name) => name.trim());

    carArray.forEach((element) => {
        if (element.length < MIN_NAME_LENGTH || element.length > MAX_NAME_LENGTH) throw new Error(`${ERROR_CAR_NAME}`);
    });

    return carArray;
}
