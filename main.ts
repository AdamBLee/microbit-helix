function Helix (brightness: number) {
    turtle.setBrightness(brightness)
    turtle.home()
    turtle.pen(TurtlePenMode.Down)
    for (let n = 0; n <= 3; n++) {
        for (let index = 0; index < 2; index++) {
            turtle.forward(n + 1)
            turtle.turnRight()
        }
    }
    turtle.forward(5)
}
input.onButtonPressed(Button.A, function () {
    Helix(brightness_high)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        Helix(brightness_high)
        Helix(brightness_low)
    }
})
input.onButtonPressed(Button.B, function () {
    Helix(brightness_low)
})
let brightness_low = 0
let brightness_high = 0
brightness_high = 128
brightness_low = 0
