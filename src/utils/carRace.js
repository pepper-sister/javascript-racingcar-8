import { Console } from '@woowacourse/mission-utils';
import moveCar from './moveCar.js';
import printRoundResult from '../utils/printFunction/printRoundResult.js';

export default async function carRace(carArray, tryCount) {
    const race = carArray.map((name) => ({
        name,
        position: 0,
    }));

    let count = tryCount;
    Console.print('\n실행 결과');

    while (count > 0) {
        race.forEach(moveCar);
        printRoundResult(race);
        count -= 1;
    }

    return race;
}
