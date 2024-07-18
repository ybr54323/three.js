import { AnimationClip, AnimationMixer, LoopPingPong, VectorKeyframeTrack, InterpolateDiscrete , InterpolateSmooth} from "three"
function setUpModel(data) {
    const model = data.scene.children[0]
    const clip = data.animations[0]
    const mixer = new AnimationMixer(model)
    const action = mixer.clipAction(clip)

    action
        .play()

    model.tick = (delta) => {
        mixer.update(delta)
    }

    const times = [
        0,
        2,
      
    ]

    const values = [
        0, 0, -10,
        1, 1, 10,

    ]


    const positionFrame = new VectorKeyframeTrack('.position', times, values, InterpolateSmooth)
    const clip2 = new AnimationClip('goZ', -1, [
        positionFrame,
        new VectorKeyframeTrack('.scale', times, [
            0.5, 0.5, 0.5,
            1.0, 1.0, 1.0,
        ])
    ])

    const action2 = mixer.clipAction(clip2)
    action2.play()

    mixer.addEventListener("finished", () => {
        console.log(1)
    })
    model._action = action
    return model

}
export {
    setUpModel
}