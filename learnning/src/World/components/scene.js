import { Scene, Color } from 'three'

function createScene() {
    const scene = new Scene()
    scene.background = new Color('blue')
    return scene
}

export { createScene }