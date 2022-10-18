let camera = document.getElementById('rig')
let firstGift = document.getElementById('firstGift')

var magicSound = document.getElementById('magic')
var i = 0
camera.addEventListener('componentchanged', hideGift)

function hideGift(e) {
    var cameraPos = camera.getAttribute('position')
    let giftPosition = firstGift.getAttribute('position')


    if (giftPosition.z - 20 <= cameraPos.z && giftPosition.x + 20 >= cameraPos.x && giftPosition.x - 22 <= cameraPos.x) {
        /* firstGift.setAttribute('animation', { 'property': visible, 'from': true, 'to': false, 'dur': 2000 }) */
        firstGift.setAttribute('visible', 'false')
        playMagicSound()
    }

    console.log(giftPosition.x + 20)
    console.log(i)

}

function playMagicSound() {
    if (i === 0) {
        magicSound.play()
    }

    i++
}
