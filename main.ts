controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (unlock == true) {
        projectile = sprites.createProjectileFromSprite(img`
            ................
            ...2555555552...
            ...2454245542...
            ...2554245452...
            2222454245542222
            2422ffffffff2242
            5422444444442245
            4522255225522254
            5422224444222245
            4522255225522254
            5422444444442245
            2422ffffffff2242
            2222455424542222
            ...2545424552...
            ...2455424542...
            ...2555555552...
            ...2454245542...
            ...2554245452...
            2222454245542222
            2422ffffffff2242
            5422444444442245
            4522255225522254
            5422224444222245
            4522255225522254
            5422444444442245
            2422ffffffff2242
            2222455424542222
            ...2545424552...
            ...2455424542...
            ...2555555552...
            ...2555555552...
            ...2454245542...
            ...2554245452...
            2222454245542222
            2422ffffffff2242
            5422444444442245
            4522255225522254
            5422224444222245
            4522255225522254
            5422444444442245
            2422ffffffff2242
            2222455424542222
            ...2545424552...
            ...2455424542...
            ...2555555552...
            ................
            ................
            ................
            ................
            ................
            `, ship, 75, 0)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 f f f f f f f f 2 2 . . . 
        . 2 2 4 4 4 4 4 4 4 4 2 2 . . . 
        . 2 2 2 5 5 2 2 5 5 2 2 2 . . . 
        . 2 2 2 2 4 4 4 4 2 2 2 2 . . . 
        . 2 2 2 5 5 2 2 5 5 2 2 2 . . . 
        . 2 2 4 4 4 4 4 4 4 4 2 2 . . . 
        . 2 2 f f f f f f f f 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ship, 75, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (info.score() >= easy_change) {
        unlock = true
    }
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let evil_shoot: Sprite = null
let evilBros: Sprite = null
let projectile: Sprite = null
let unlock = false
let ship: Sprite = null
let easy_change = 0
easy_change = 100
ship = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . . . . . . . 
    f 2 2 f f f . . . . . . . . . . 
    f 2 2 2 2 2 f f . . . . . . . . 
    f 2 2 2 2 2 2 f f f f f . . . . 
    f 2 2 2 2 2 2 2 2 2 2 f f f . . 
    f 2 2 2 1 1 1 2 2 2 2 f f f 2 . 
    f 2 2 2 1 2 1 2 2 2 2 f f f . . 
    f 2 2 2 1 1 1 2 2 2 2 f . . . . 
    f 2 2 2 2 2 2 2 2 2 f . . . . . 
    f 2 2 2 2 2 f f f f . . . . . . 
    f 2 2 2 2 f . . . . . . . . . . 
    f f f f f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(1)
ship.setPosition(10, 60)
controller.moveSprite(ship, 100, 100)
ship.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(25)
game.onUpdateInterval(500, function () {
    evilBros = sprites.create(img`
        . . f f f f f f f f f . . . . . 
        . f 4 4 2 4 4 4 2 4 4 f . . . . 
        f 4 4 4 4 2 4 2 4 4 4 4 f . . . 
        f 4 2 2 4 4 2 4 4 2 2 4 f . . . 
        f 4 2 2 4 4 4 4 4 2 2 4 f . . . 
        f 4 4 4 4 4 4 4 4 4 4 4 f . . . 
        f 4 4 4 4 4 4 4 4 4 4 4 f . . . 
        f 4 4 4 2 2 2 2 2 4 4 4 f . . . 
        f 4 4 4 2 f f f 2 4 4 4 f . . . 
        . f 4 4 2 f f f 2 4 4 f . . . . 
        . . f 4 2 2 2 2 2 4 f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    evilBros.setPosition(150, randint(10, 100))
    evilBros.setVelocity(-70, 0)
    evilBros.setFlag(SpriteFlag.AutoDestroy, true)
    if (info.score() >= 25) {
        evil_shoot = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            2 2 5 5 4 2 2 5 4 4 2 2 5 5 4 4 
            5 2 2 4 4 5 2 4 4 5 5 2 2 4 4 5 
            5 5 4 4 5 5 4 4 2 5 5 5 4 4 5 5 
            5 4 4 2 2 4 4 5 2 2 5 4 4 2 2 5 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        evil_shoot.setPosition(evilBros.x - 11, evilBros.y)
        evil_shoot.setVelocity(-250, 0)
    }
})
