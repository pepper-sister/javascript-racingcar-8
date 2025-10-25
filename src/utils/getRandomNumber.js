import { Random } from '@woowacourse/mission-utils';
import { RANDOM_MIN, RANDOM_MAX, FORWARD_CONDITION } from '../constants/randomNumber.js';

export default function getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(RANDOM_MIN, RANDOM_MAX);

    return randomNumber >= FORWARD_CONDITION;
}
