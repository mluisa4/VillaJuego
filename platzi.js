var villaM = document.getElementById("villaMaria");
var papel = villaM.getContext("2d");

/// definicion de variables-objetos JASON
var fondo = {
  url: "tile.png",
  cargaOk: false
}
var pollo = {
  url: "pollo.png",
  cargaOk: false
}
var vaca = {
  url: "vaca.png",
  cargaOk: false
}
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image(); // creo objeto Image en imagen
fondo.imagen.src = fondo.url; //cargo la imagen tile-mapa en el objeto imagen con el metodo src
fondo.imagen.addEventListener("load", cargarFondo);//escucho el evento de cargar la imagen con "load"

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas)

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos)

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos)

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

function cargarPollos()
{
  pollo.cargaOk = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOk = true;
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
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
          var x = aleatorio(0,7);
          var y = aleatorio(0,7);
          var x = x * 60;
          var y = y * 60;
          papel.drawImage(vaca.imagen, x , y);
        }
      }

      if(pollo.cargaOk == true)
        {
            console.log(cantidad);
            for(var v=0; v < cantidad; v++)
            {
              var x = aleatorio(0,7);
              var y = aleatorio(0,7);
              var x = x * 60;
              var y = y * 60;
              papel.drawImage(pollo.imagen, x , y);
            }
        }

      if(cerdo.cargaOk == true)
        {
              console.log(cantidad);
              for(var v=0; v < cantidad; v++)
              {
                var x = aleatorio(0,7);
                var y = aleatorio(0,7);
                var x = x * 60;
                var y = y * 60;
                papel.drawImage(cerdo.imagen, x , y);
              }
          }

}


function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max- min + 1)) + min;
  return resultado;
}
