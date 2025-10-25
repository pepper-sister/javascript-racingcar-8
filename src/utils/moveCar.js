import getRandomNumber from './getRandomNumber.js';

export default function moveCar(car) {
    const isForward = getRandomNumber();
    if (isForward) car.position += 1;
}
