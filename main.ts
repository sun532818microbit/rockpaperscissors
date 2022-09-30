let RPS = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Breve))
    RPS = randint(0, 2)
    if (RPS == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            `)
    }
    if (RPS == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (RPS == 2) {
        images.createImage(`
            # # . # #
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            `).showImage(0)
    }
})
