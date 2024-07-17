
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas)


    // controls.tick = (delta, callback = () => { }) => {


    //     callback()



    //     controls.update()
    // }

    return controls
}
export {
    createControls
}