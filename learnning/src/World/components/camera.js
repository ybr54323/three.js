import { PerspectiveCamera } from "three";

function createCamera() {
    const fov = 35
    const aspect = 1
    const near = 0.1
    const far = 100
    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 0, 10)

    camera.tick = (delta) => {
        const ratioPerSecond = 10
        const res = camera.fov + ratioPerSecond * delta
        console.log(res)
        camera.fov += res % 180
        
        camera.updateProjectionMatrix()

    }
    return camera
}

export { createCamera }