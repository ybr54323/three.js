import { WebGLRenderer } from 'three'

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: false })
    renderer.physicallyCorrectLights = true;
    return renderer
}

export { createRenderer }