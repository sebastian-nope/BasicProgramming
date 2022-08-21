var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var cuadro = document.getElementById ("area_de_dibujo");
var papel = cuadro.getContext ("2d");
var x = 300;
var y = 300;

dibujarLinea("orange", x-1, y-1, x+1, y+1, papel);

function dibujarLinea (color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo (xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal)
    lienzo.stroke();
    lienzo.closePath();
}

document.addEventListener("keyup", dibujarTeclado)

function dibujarTeclado(evento)
{
    console.log(evento.keyCode);
    var colorcito = "orange";
    var movimiento = 3;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("Arriba");
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("Abajo");
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x  - movimiento, y, papel);
            x = x - movimiento;
            console.log("Izquierda");
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("Derecha");
        break;
        default:
            console.log("Otra Tecla");
        break;
    }
}