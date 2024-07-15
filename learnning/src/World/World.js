import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createLights } from './components/lights.js';
import { Loop } from './systems/Loop.js';

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
        
        const cube = createCube()

        loop.updatables.push(cube)
        loop.updatables.push(camera)

        const light = createLights()
        light.position.set(1, 1, 1)
        scene.add(cube, light)

        const resizer = new Resizer(container, camera, renderer)
        // resizer.onResize = () => {
        //     this.render()
        // }
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