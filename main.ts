music.setVolume(127)
basic.forever(function () {
    serial.writeLine("" + (sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )))
    basic.showNumber(sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ))
})
basic.forever(function () {
    music.playTone(880, music.beat(BeatFraction.Half))
    basic.pause(100)
    music.playTone(988, music.beat(BeatFraction.Half))
})
