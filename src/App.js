import getCarArray from './utils/getCarArray.js';
import getTryCount from './utils/getTryCount.js';
import getRandomNumber from './utils/getRandomNumber.js';

class App {
    async run() {
        const carArray = await getCarArray();
        const tryCount = await getTryCount();
        getRandomNumber();
    }
}

export default App;
