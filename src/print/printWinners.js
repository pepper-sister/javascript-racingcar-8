import { Console } from '@woowacourse/mission-utils';
import { ERROR_NO_WINNER } from '../constants/error.js';

export default function printWinners(race) {
    const maxPosition = race.reduce((max, car) => Math.max(max, car.position), 0);
    if (maxPosition === 0) throw new Error(`${ERROR_NO_WINNER}`);
    const winners = race.filter((car) => car.position === maxPosition).map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
