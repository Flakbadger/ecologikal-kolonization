namespace SpriteKind {
    export const House = SpriteKind.create()
    export const trash = SpriteKind.create()
}
function AnimatePlayer () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim1`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim0`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim0`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim2`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.trash, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.setVolume(75)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    music.setVolume(20)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
let scoare = 10
let scoare2 = -10
info.setScore(0)
let yobase = sprites.create(assets.image`myImage`, SpriteKind.House)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`0`)
scene.cameraFollowSprite(mySprite)
let vals = 0
music.setTempo(120)
music.setVolume(20)
music.play(music.createSong(hex`0078000408020900001c00010a006400f401640000040000000000000000000000000005000004060000000400011801001c000f05001202c102c20100040500280000006400280003140006020004060000000400012c03001c0001dc00690000045e01000400000000000000000000056400010400031a0008000c00012c0c00100001291c0020000214292000240002182c04001c00100500640000041e000004000000000000000000000000000a0400041a000000040001051000140002050618001c0002050634003800010505001c000f0a006400f4010a00000400000000000000000000000000000000020c0010001400012918001c00012c06001c00010a006400f4016400000400000000000000000000000000000000022b0008000c0001180c001000011410001400011418001c0001182000240001202400280001203c00400002161907001c00020a006400f4016400000400000000000000000000000000000000031c00240028000214292c003000020f2434003800020d2938003c0002112508001c000e050046006603320000040a002d00000064001400013200020100020d0024002800011d2c00300002182c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80009003c003d00040c10040b`), music.PlaybackMode.LoopingInBackground)
mySprite.setPosition(86, 96)
AnimatePlayer()
forever(function () {
    if (scoare == info.score()) {
        if (vals < 9) {
            info.changeScoreBy(scoare2)
            vals += 1
            scoare += 10
            scoare2 += -10
        }
    }
})
forever(function () {
    if (vals == 0) {
        tiles.setCurrentTilemap(tilemap`0`)
    } else {
        if (vals == 1) {
            tiles.setCurrentTilemap(tilemap`2`)
        } else {
            if (vals == 2) {
                tiles.setCurrentTilemap(tilemap`3`)
            } else {
                if (vals == 3) {
                    tiles.setCurrentTilemap(tilemap`4`)
                } else {
                    if (vals == 4) {
                        tiles.setCurrentTilemap(tilemap`5`)
                    } else {
                        if (vals == 5) {
                            tiles.setCurrentTilemap(tilemap`8`)
                        } else {
                            if (vals == 6) {
                                tiles.setCurrentTilemap(tilemap`10`)
                            } else {
                                if (vals == 7) {
                                    tiles.setCurrentTilemap(tilemap`12`)
                                } else {
                                    if (vals == 8) {
                                        tiles.setCurrentTilemap(tilemap`14`)
                                    } else {
                                        tiles.setCurrentTilemap(tilemap`16`)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.trash)
    mySprite2.setPosition(randint(32, 225), randint(32, 225))
})
forever(function () {
    if (vals == 9) {
        scene.cameraShake(8, 200)
        info.setScore(game.runtime() * 1000)
        game.setGameOverScoringType(game.ScoringType.LowScore)
        pause(10000)
        game.setGameOverMessage(true, "You Win!")
        game.setGameOverEffect(true, effects.splatter)
        game.gameOver(true)
    }
})
