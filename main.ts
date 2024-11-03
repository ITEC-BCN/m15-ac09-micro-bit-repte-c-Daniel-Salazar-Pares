radio.setGroup(1)
//  Establece el grupo de radio para que los Micro:bits se comuniquen
//  Enviar mensaje de texto al presionar el botón A
//  Mensaje que se enviará
input.onButtonPressed(Button.A, function on_button_a_pressed() {
    radio.sendString("Hello, lil boy")
})
//  Mostrar mensaje recibido
//  Muestra el mensaje recibido en la pantalla
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
//  Función extra: Juego de dados
let my_number = 0
//  Variable global para almacenar el número enviado en el juego de dados
//  Muestra el número en la pantalla
input.onButtonPressed(Button.B, function on_button_b_pressed() {
    
    my_number = randint(1, 6)
    //  Genera un número aleatorio entre 1 y 6
    radio.sendNumber(my_number)
    //  Envía el número generado
    basic.showNumber(my_number)
})
//  Comparar número recibido en el juego de dados
//  Muestra una cara neutral si los números son iguales
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber > my_number) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < my_number) {
        //  Muestra una cara triste si el número recibido es mayor
        basic.showIcon(IconNames.Happy)
    } else {
        //  Muestra una cara feliz si el número recibido es menor
        basic.showIcon(IconNames.Asleep)
    }
    
})
