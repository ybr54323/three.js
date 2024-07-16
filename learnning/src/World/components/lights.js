import { DirectionalLight, Color, PointLight, AmbientLight, HemisphereLight, Object3D, } from 'three';

function createLights(camera, scene) {
  // Create a directional light

  const ambientLight = new AmbientLight('white', 5)
  const directionalLight = new DirectionalLight('white', 10, 10)

  // move the light right, up, and towards us
  const hemisphereLight = new HemisphereLight('white', 'darkslategrey', 5)

  ambientLight.visible = false;
  // directionalLight.visible = false;
  hemisphereLight.visible = false;


  return {
    ambientLight,
    directionalLight,
    hemisphereLight,

  }


}

export { createLights };