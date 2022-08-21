var express = require("express");
var app = express();

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado)
{
    resultado.send("Esto es el <strong>Inicio</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Esto es la pagina de <strong>Cursos</strong>");
}

app.listen(8989);