import { Console } from '@woowacourse/mission-utils';

export default function printRoundResult(race) {
    race.forEach((car) => {
        Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
    Console.print('');
}
