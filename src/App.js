import userInput from './utils/userInput.js';
import carRace from './race/carRace.js';

class App {
    async run() {
        const { carArray, tryCount } = await userInput();
        const race = await carRace(carArray, tryCount);
    }
}

export default App;
