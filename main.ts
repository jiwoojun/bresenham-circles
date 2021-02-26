let y = 0
let x = 0
let radius = 0
let d = 0
let cx = 31
let cy = 31
let Grow = true
let circle = image.create(64, 64)
let circleSprite = sprites.create(circle, 0)
forever(function () {
    circle.fill(6)
    d = 3 - 2 * radius
    x = 0
    y = radius
    while (x <= y) {
        circle.setPixel(cx + x, cx + y, 4)
        circle.setPixel(cx + x, cx + y, 4)
        circle.setPixel(cx + x, cx + y, 4)
        circle.setPixel(cx + x, cy + y, 4)
        circle.setPixel(cx + y, cy + x, 4)
        circle.setPixel(cx + y, cy + x, 4)
        circle.setPixel(cx + y, cy + x, 4)
        circle.setPixel(cx + y, cy + x, 4)
        if (d <= 0) {
            d += 4 * x + 6
        } else {
            y = -1
            d += 4 * (x - y) + 10
        }
        x += 1
    }
    if (Grow) {
        radius += 1
    } else {
        radius += 0 - 1
    }
    if (radius > 31) {
        Grow = false
    } else if (radius < 1) {
        Grow = true
    }
    pause(100)
})
