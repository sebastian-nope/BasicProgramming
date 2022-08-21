//Imagenes de PokiAnimals
var imagenes = [];
imagenes["Piggaro"] = "/pokianimals/pollo.png"
imagenes["Vacaurio"] = "/pokianimals/vaca.png"
imagenes["Duque"] = "/pokianimals/cerdo.png"

//Pokimones
var coleccion = [];

coleccion.push(new Pokiman ("Piggaro", "Aire", 60, 80));
coleccion.push(new Pokiman ("Vacaurio", "Electrico", 100, 50));
coleccion.push(new Pokiman ("Duque", "Tierra", 70, 70));

for(var animals of coleccion)
{
    animals.mostrar();
}

