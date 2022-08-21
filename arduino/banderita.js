var jf = require ("johnny-five");
var circuito = new jf.board();
var bombillo, motor, celda;
var turno = 0;

circuito.on("ready", prender);

function prender()
{
    var configuracion = {pin: "A0", freq: 50};
    celda = new jf.Selda (configuracion);

    bombillo = new jf.Led (13);
    bombillo.on();

    motor = new jf.Servo(9);
    motor.to(90)
    ondear();
}

function ondear()
{
    console.log("Luz: " + celda.value);
    var luz = celda.value;
    if (luz > 800)
    {
        if(turno == 1)
        {
            turno = 0;
            motor.to(70);
        }
        else
        {
            turno = 1;
            motor.to(100);
        }
        
    }
    else 
    {
        motor.to(30);
    }
    setTimeout(ondear, 1000);
}