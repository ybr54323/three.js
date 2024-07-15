import { BoxBufferGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, MathUtils } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a default (white) Basic material
  // const material = new MeshBasicMaterial();
  const spec = {
    color: 'purple'
  }
  const material = new MeshStandardMaterial(spec)

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(3.6)
  // this method will be called once per frame


  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    const res = radiansPerSecond * delta
    cube.rotation.z += res;
    cube.rotation.x += res;
    cube.rotation.y += res;
  };

  return cube;
}

export { createCube };