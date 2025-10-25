import getCarArray from './getCarArray.js';
import getTryCount from './getTryCount.js';

export default async function userInput() {
    const carArray = await getCarArray();
    const tryCount = await getTryCount();

    return { carArray, tryCount };
}
