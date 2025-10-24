import getCarArray from './utils/getCarArray.js';
import getTryCount from './utils/getTryCount.js';

class App {
    async run() {
        const carArray = await getCarArray();
        const tryCount = await getTryCount();
    }
}

export default App;
