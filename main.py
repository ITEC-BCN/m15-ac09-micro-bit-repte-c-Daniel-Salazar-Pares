radio.set_group(1)  # Establece el grupo de radio para que los Micro:bits se comuniquen

# Enviar mensaje de texto al presionar el botón A
def on_button_a_pressed():
    radio.send_string("Hello, lil boy")  # Mensaje que se enviará
input.on_button_pressed(Button.A, on_button_a_pressed)

# Mostrar mensaje recibido
def on_received_string(receivedString):
    basic.show_string(receivedString)  # Muestra el mensaje recibido en la pantalla
radio.on_received_string(on_received_string)

# Función extra: Juego de dados
my_number = 0  # Variable global para almacenar el número enviado en el juego de dados

def on_button_b_pressed():
    global my_number
    my_number = randint(1, 6) # Genera un número aleatorio entre 1 y 6
    radio.send_number(my_number)  # Envía el número generado
    basic.show_number(my_number)  # Muestra el número en la pantalla
input.on_button_pressed(Button.B, on_button_b_pressed)

# Comparar número recibido en el juego de dados
def on_received_number(receivedNumber):
    if receivedNumber > my_number:
        basic.show_icon(IconNames.SAD)  # Muestra una cara triste si el número recibido es mayor
    elif receivedNumber < my_number:
        basic.show_icon(IconNames.HAPPY)  # Muestra una cara feliz si el número recibido es menor
    else:
        basic.show_icon(IconNames.ASLEEP)  # Muestra una cara neutral si los números son iguales
radio.on_received_number(on_received_number)
