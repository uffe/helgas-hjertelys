input.onButtonPressed(Button.A, function () {
    basic.showString("helga")
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # . # .
        . # . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("helga")
    basic.showLeds(`
        . # . # .
        # # . # #
        # # . # #
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
})
