import {
    SphereBufferGeometry,
    Group,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    BoxGeometry,
    CircleGeometry
} from 'three';

function createMeshGroup() {
    const group = new Group()
    const geometry = new SphereBufferGeometry(.25, 16, 16)
    const material = new MeshStandardMaterial({ color: 'indigo' })
    const protoSphere = new Mesh(geometry, material)
    group.add(protoSphere)

    let j = 0
    for (let i = 0; i < 1; i += .05) {
        let sp
        if (j % 3 === 0) {
            sp = protoSphere.clone()

        } else if (j % 3 === 1) {
            sp = new Mesh(new BoxGeometry(1, 1, 1,), material)

        } else if (j % 3 === 2) {
            sp = new Mesh(new CircleGeometry(1, 10), material)
        }

        sp.position.x = Math.cos(2 * Math.PI * i)
        sp.position.y = Math.sin(2 * Math.PI * i)
        // sp.position.z = i * 5
        sp.scale.multiplyScalar(0.01 + i)
        group.add(sp)

        j++
    }

    group.tick = delta => {
        group.rotation.z -= delta * Math.PI / 3

    }
    return group
}

export { createMeshGroup };