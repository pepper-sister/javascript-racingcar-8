import userInput from './utils/userInput.js';
import carRace from './race/carRace.js';
import printWinners from './print/printWinners.js';

class App {
    async run() {
        try {
            const { carArray, tryCount } = await userInput();
            const race = await carRace(carArray, tryCount);
            printWinners(race);
        } catch (error) {
            throw new Error(`[ERROR]: ${error.message}`);
        }
    }
}

export default App;
