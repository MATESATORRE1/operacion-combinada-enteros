let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let RESULTADO_OPERACIÓN = 0
input.onButtonPressed(Button.A, function () {
    A += randint(-20, 20)
    basic.showNumber(A)
    B += randint(-20, 20)
    basic.pause(2000)
    basic.showNumber(B)
    C += randint(-20, 20)
    basic.pause(2000)
    basic.showNumber(C)
    D += randint(-20, 20)
    basic.pause(2000)
    basic.showNumber(D)
    E += randint(-20, 20)
    basic.pause(2000)
    basic.showNumber(E)
    F += randint(-20, 20)
    basic.pause(2000)
    basic.showNumber(F)
    RESULTADO_OPERACIÓN += A + B - C * (F - E) + D
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(RESULTADO_OPERACIÓN)
})
input.onButtonPressed(Button.B, function () {
    basic.showString(" La operacion es: ")
    basic.showString("" + A + "+" + B + "-" + C + "*" + "(" + F + "-" + E + ")" + "+" + D)
})
basic.forever(function () {
	
})
