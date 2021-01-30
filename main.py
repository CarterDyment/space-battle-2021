def on_b_pressed():
    global projectile
    if unlock == True:
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            ship,
            75,
            0)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        ship,
        75,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    global unlock
    info.change_score_by(1)
    if info.score() >= easy_change:
        unlock = True
    otherSprite.destroy()
    sprite.destroy()
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    info.change_life_by(-1)
    otherSprite.destroy()
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

evilBros: Sprite = None
projectile: Sprite = None
unlock = False
ship: Sprite = None
easy_change = 0
easy_change = 100
ship = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.set_background_color(1)
ship.set_position(10, 60)
controller.move_sprite(ship, 100, 100)
ship.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
info.set_life(3)
info.set_score(0)

def on_update_interval():
    global evilBros
    evilBros = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    evilBros.set_position(150, randint(10, 100))
    evilBros.set_velocity(-70, 0)
    evilBros.set_flag(SpriteFlag.AUTO_DESTROY, True)
game.on_update_interval(500, on_update_interval)
