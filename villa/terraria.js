var vn = document.getElementById("villaNope");
var papel = vn.getContext("2d");

// Ubicacion de Imagenes

var mapa = {
    url: "/imagenes/tile.png",
    cargaOk: false
}

var vaca = {
    url: "/imagenes/vaca.png",
    cargaOk: false
}

var pollo = {
    url: "/imagenes/pollo.png",
    cargaOk: false
}

var cerdo = {
    url: "/imagenes/cerdo.png",
    cargaOk: false
}


// Carga de Imagenes

mapa.imagen = new Image ();
mapa.imagen.src = mapa.url;
mapa.imagen.addEventListener("load", cargarMapa);

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


// Funciones de Cargar Imagenes

function cargarMapa()
{
    mapa.cargaOk = true;
    dibujarMapa();
}

function cargarVaca()
{
    vaca.cargaOk = true;
    dibujarVaca();
}

function cargarPollo()
{
    mapa.cargaOk = true;
    dibujarPollo();
}

function cargarCerdo()
{
    mapa.cargaOk = true;
    dibujarCerdo();
}


// Funcion de Dibujar

function dibujarMapa ()
{
    if(mapa.cargaOk)
    {
        papel.drawImage(mapa.imagen, 0, 0);
    }
}

function dibujarVaca ()
{
    if(vaca.cargaOk)
    {
        for(var v=0; v < cantidadVacas; v++)
        {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            var x = x * 30;
            var y = y * 30;
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    console.log("Cantidad de Vacas: ", cantidadVacas);
}

function dibujarPollo ()
{
    if(pollo.cargaOk)
    {
        for(var p=0; p < cantidadPollos; p++)
        {
            var x = aleatorio(0, 5);
            var y = aleatorio(0, 5);
            var x = x * 70;
            var y = y * 70;
            papel.drawImage(pollo.imagen, x, y);
        }
    }

    console.log("Cantidad de Pollos: ", cantidadPollos);
}

function dibujarCerdo ()
{
    if(cerdo.cargaOk)
    {
        for(var c=0; c < cantidadCerdos; c++)
        {
            var x = aleatorio(0, 2);
            var y = aleatorio(0, 2);
            var x = x * 10;
            var y = y * 10;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

    console.log("Cantidad de Cerdos: ", cantidadCerdos);
}


var cantidadVacas = aleatorio(1,2);
var cantidadPollos = aleatorio(3,4);
var cantidadCerdos = aleatorio(5,6);

// Funcion de Aleatorio

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()*(maxi - min + 1)) + min;
    return resultado;
}