import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createMeshGroup } from './components/meshGroup.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createLights } from './components/lights.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';
import { loadBirds } from './components/birds/birds.js';
import { Object3D } from 'three';


let camera
let renderer
let scene
let loop
let controls
class World {
    constructor(container) {
        camera = createCamera()
        scene = createScene()
        renderer = createRenderer()
        loop = new Loop(camera, scene, renderer)

        container.append(renderer.domElement)


        loop.updatables.push(camera)

        const {
            ambientLight,
            directionalLight,
            hemisphereLight,

        } = createLights(camera, scene,)


        scene.add(

            directionalLight,

        )


        directionalLight.tick = () => {
            directionalLight.position.copy(camera.position)
        }
        loop.updatables.push(directionalLight)

        controls = createControls(camera, renderer.domElement)

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
    async init() {
        const { parrot, flamingo, stork } = await loadBirds()
        scene.add(parrot, flamingo, stork)
        loop.updatables.push(
            parrot,
            // flamingo,
            // stork,
        )
        controls.target.copy(parrot.position)
        this.list = [parrot, flamingo, stork,]
        this.index = 0
        const center = new Object3D()
        center.position.set(
            1, 1, 1
        )
        scene.add(center)
        this.list.push(center)

        const btn = document.querySelector("#btn")
        btn.addEventListener('click', () => {
            this.focusNext()
        })

        const range = document.querySelector('#range')
        range.addEventListener('change', evt => {

            const value = evt.target.value / 100;

            const target = this.list[this.index]

            target._action.setEffectiveWeight(value)

        })
    }
    focusNext() {
        this.index = ++this.index % this.list.length
        const target = this.list[this.index]
        let start = 0
        let flag = false
        controls.tick = (delta) => {
            controls.update()
            if (flag) return;
            start += delta
            if (start >= 1) {
                controls.target.copy(
                    target.position
                )
                flag = true
            } else {
                controls.target.lerp(target.position, start / 1)
            }

        }


    }
}
export {
    World
}