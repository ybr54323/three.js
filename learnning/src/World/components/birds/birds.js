import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { setUpModel } from './setupModels.js';

async function loadBirds() {
    const loader = new GLTFLoader();
    const [parrotData, flamingoData, storkData] = await Promise.all(
        [
            loader.loadAsync('https://discoverthreejs.com/examples/assets/models/Parrot.glb'),
            loader.loadAsync('https://discoverthreejs.com/examples/assets/models/Flamingo.glb'),
            loader.loadAsync('https://discoverthreejs.com/examples/assets/models/Stork.glb')
        ])



    console.log('Squaaawk!', parrotData);

    const parrot = setUpModel(parrotData);
    parrot.position.set(0, 0, 2.5);

    const flamingo = setUpModel(flamingoData);
    flamingo.position.set(7.5, 0, -10);

    const stork = setUpModel(storkData);
    stork.position.set(0, -2.5, -10);
    return { parrot, flamingo, stork }
}

export { loadBirds };