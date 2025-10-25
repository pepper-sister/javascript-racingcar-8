import { Random } from '@woowacourse/mission-utils';

export default async function getRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    return randomNumber;
}
