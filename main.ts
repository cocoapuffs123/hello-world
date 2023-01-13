input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # #
        . # # . .
        . # # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 90 * 90; index++) {
        music.playMelody("B E B F E G E G ", 500)
    }
})
