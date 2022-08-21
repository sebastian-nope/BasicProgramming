var texto = document.getElementById("cantidad_de_lineas");
var boton = document.getElementById("botoncito");
var c = document.getElementById("colorin");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById ("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var largo = d.height;
var colorcete = c.color;

function dibujarLinea (colorcete, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = colorcete;
    lienzo.moveTo (xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal)
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick ()
{
    var xxx = parseInt(texto.value); 
    var l = 0 ;
    var lineas = xxx;
    var xI, yI, xF, yF;
    var espacio = ancho/lineas;
    var cc = (c.value);

    for(l = 0; l < lineas; l++)
    {
    yI = espacio * l ;
    xF = espacio * (l + 1); 
    dibujarLinea(cc, 1, yI, xF, 599);
    }

    for(l = 0; l < lineas; l++)
    {
    xI = espacio * l ;
    yF = espacio * (l + 1); 
    dibujarLinea(cc, xI, 1, 599, yF);
    }

    for(l = 0; l < lineas; l++)
    {
    xI = espacio * l ;
    yF = 600 - (espacio * l); 
    dibujarLinea(cc, xI, 599, 599, yF);
    }

    for(l = 0; l < lineas; l++)
    {
    xI = 600 - (espacio * l);
    yF = espacio * l ;
    dibujarLinea(cc, xI, 1, 1, yF);
    }
    //Bordes
    dibujarLinea (cc, 1,1,1,599)
    dibujarLinea (cc, 1,599,599,599)
    dibujarLinea (cc, 599,1,1,1)
    dibujarLinea (cc, 599,599,599,1)
}