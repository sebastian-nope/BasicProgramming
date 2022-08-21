//Clase PokiAnimals
class Pokiman
{
    constructor(nombre, tipo, vida, ataque)
    {
        this.imagen = new Image ();
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre]
    }
    hablar()
    {
        alert(this.nombre);
    }

    mostrar ()
    {
        document.body.appendChild(this.imagen);
        document.write("<br/><strong>" + this.nombre + "</strong><br/>");
        document.write("Tipo: " + this.tipo + "<br/>");
        document.write("Vida: " + this.vida + "<br/>");
        document.write("Ataque: " + this.ataque + "<br/> <hr/>");
    }
}