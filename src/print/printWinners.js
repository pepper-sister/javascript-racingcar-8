import { Console } from '@woowacourse/mission-utils';

export default function printWinners(race) {
    const maxPosition = race.reduce((max, car) => Math.max(max, car.position), 0);
    const winners = race.filter((car) => car.position === maxPosition).map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
}
