import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createLights } from './components/lights.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

let camera
let renderer
let scene
let loop
class World {
    constructor(container) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)


        container.append(renderer.domElement)

        // const cube = createCube()
        const meshGroup = createMeshGroup()

        loop.updatables.push(meshGroup)
        loop.updatables.push(camera)

        const {
            ambientLight,
            directionalLight,
            hemisphereLight,

        } = createLights(camera, scene,)


        scene.add(
            // cube,
            meshGroup,

            directionalLight,

        )


        directionalLight.tick = () => {
            directionalLight.position.copy(camera.position)
        }
        loop.updatables.push(directionalLight)


        const controls = createControls(camera, renderer.domElement, directionalLight)

        const resizer = new Resizer(container, camera, renderer)
        loop.updatables.push(controls)

    }

    render() {
        renderer.render(scene, camera)
    }
    start() {
        loop.start()
    }
    stop() {
        loop.stop()
    }
}
export {
    World
}