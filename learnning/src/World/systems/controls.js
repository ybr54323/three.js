
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function createControls(camera, canvas, directionalLight) {
    const controls = new OrbitControls(camera, canvas)



    controls.tick = () => {
        controls.update()
    }

    return controls
}
export {
    createControls
}