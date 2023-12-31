let visorCalculadora = 0
let operacion

function boton(valor){
    const valorRecibido = document.getElementById('resultadoVisor').value
    document.getElementById('resultadoVisor').value = valorRecibido + valor
    visorCalculadora = document.getElementById('resultadoVisor').value = valorRecibido + valor
}

function suma(numero){
    numero1 = visorCalculadora
    operacion = "+"
    limpiar()
}

function resta(numero){
    numero1 = visorCalculadora
    operacion = "-"
    limpiar()
}

function multiplicacion(numero){
    numero1 = visorCalculadora
    operacion = "*"
    limpiar()
}

function division(numero){
    numero1 = visorCalculadora
    operacion = "/"
    limpiar()
}

function resultado(){
    numero2 = visorCalculadora
    calcular()
}

function reset(){
    document.getElementById('resultadoVisor').value = ''
    visorCalculadora = 0
    operacion = ''
}

function limpiar(){
    document.getElementById('resultadoVisor').value = ''
}

function calcular(){
    let resultado = 0
    let ultimoResultado = 0
    switch(operacion){
        case "+":
            resultado = parseFloat(numero1) + parseFloat(numero2)
            break
            case "-":
                resultado = parseFloat(numero1) - parseFloat(numero2)
                break
                case "*":
                    resultado = parseFloat(numero1) * parseFloat(numero2)
                    break
                    case "/":
                        resultado = parseFloat(numero1) / parseFloat(numero2)
                        break
    }
    ultimoResultado = resultado;
    reset()
    document.getElementById('resultadoVisor').value = resultado
    visorCalculadora = ultimoResultado
}