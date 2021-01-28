controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 0 && unlock == true) {
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
        info.changeScoreBy(-5)
        if (info.score() < 0){
         info.setScore(0)   
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
    if (info.score() >= 50) {
        unlock = true
    }
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let unlock = false
let evilBros: Sprite = null
let projectile: Sprite = null
let ship: Sprite = null
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
info.setScore(0)
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
})