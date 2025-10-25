import userInput from './utils/userInput.js';
import carRace from './race/carRace.js';
import printWinners from './print/printWinners.js';

class App {
    async run() {
        const { carArray, tryCount } = await userInput();
        const race = await carRace(carArray, tryCount);
        printWinners(race);
    }
}

export default App;
