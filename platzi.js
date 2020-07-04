var villaM = document.getElementById("villaMaria");
var papel = villaM.getContext("2d");
var mapa = "tile.png";

var fondo = new Image(); // creo objeto Image en imagen
fondo.src = mapa; //cargo la imagen tile-mapa en el objeto imagen con el metodo src
fondo.addEventListener("load", dibujar);//escucho el evento de cargar la imagen con "load"

var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", dibujarPollos);

function dibujar()
{
  papel.drawImage(fondo, 0, 0);
}


function dibujarVacas()
{
  papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos()
{
  papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos()
{
  papel.drawImage(pollo, 300, 150);
}

//Funcion que mustra 10 numeros de forma aleatoria entr el rango especificado
//for(var i=0; i<10; i++)
//{
  //  var z = aleatorio(10, 20);
    //document.write(z + ",");
//}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max- min + 1)) + min;
  return resultado;
}
