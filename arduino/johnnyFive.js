var jf = require ("johnny-five");
var circuito = new jf.board();

circuito.on("ready", prender);

function prender()
{
    var bombillito = new jf.Led(9);
    var rojito = new jf.Led(13);
    bombillito.blink(200);
    rojito.blink(700);
    console.log("Hola mamá se hacer hardware")
}
