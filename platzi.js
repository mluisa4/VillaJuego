var villaM = document.getElementById("villaMaria");
var papel = villaM.getContext("2d");
//var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOk: false
}
var vaca = {
  url: "vaca.png",
  cargaOk: false
}

fondo.imagen = new Image(); // creo objeto Image en imagen
fondo.imagen.src = fondo.url; //cargo la imagen tile-mapa en el objeto imagen con el metodo src
fondo.imagen.addEventListener("load", cargarFondo);//escucho el evento de cargar la imagen con "load"

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOk = true;
  dibujar();
}

function dibujar()
{
    if(fondo.cargaOk == true)
      {
          papel.drawImage(fondo.imagen, 0,0);
      }
    if(vaca.cargaOk == true)
      {
          papel.drawImage(vaca.imagen, 100,100);
      }
}

//var cerdo = new Image();
//cerdo.src = "cerdo.png";
//cerdo.addEventListener("load", cargarCerdos);

//var pollo = new Image();
//pollo.src = "pollo.png";
//pollo.addEventListener("load", cargarPollos);

//function dibujar()
//{
//  papel.drawImage(fondo, 0, 0);
//}


//function dibujarVacas()
//{
//  papel.drawImage(vaca, 10, 10);
//}

//function dibujarCerdos()
//{
//  papel.drawImage(cerdo, 10, 300);
//}

//function dibujarPollos()
//{
//  papel.drawImage(pollo, 300, 150);
//}

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
