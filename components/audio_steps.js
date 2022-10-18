var audioStep = document.getElementById('steps')

document.addEventListener("keydown", function (e) {
    if (e.key === 'w' || e.key === 's' || e.key === 'a' || e.key === 'd' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key == 'ArrowDown' || e.key == 'ArrowLeft') {
        audioStep.play()
    }
})

document.addEventListener("keyup", function (e) {
    audioStep.pause()
})

