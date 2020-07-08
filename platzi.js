//// bloque de definicion de VARIABLES TIPO OBJETOS DE TODAS LAS FUNCIONES A TRABAJAR JASON

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

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

var x = 150;
var y = 150;


//console.log(teclas);

///ESCUCHA DE EVENTO TECLADO Y DISPARA LA FUNCION dibujarTeclado///////////////////
document.addEventListener("keydown", dibujarTeclado);

////trae el CANVAS hacia el javascript pra trabajarlo en contecto 2d////////////////
var villaM = document.getElementById("villaMaria");
var papel = villaM.getContext("2d");

///define VARIABLE CANTIDAD que se obtendra por el parametro que arroja la funcion aleatorio()
///aleatorio trabaja el rango para obtener el numero aleatorio.
var cantidad = aleatorio(5, 25);

/// Se trabajan los metodos de cada objeto definido arriba, que corresponde a cada imagen que se cargara.
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
//cerdo.imagen.addEventListener("load", cargarCerdos)

////funciones que cargan las imgenes en posiciones aleatorias////////
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

function aleatorio(min, max)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (max- min + 1)) + min;
    return resultado;
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
      //if(cerdo.cargaOk == true)
       //{
        // console.log(cantidad);
         //for(var v=0; v < cantidad; v++)
          //  {
           //var x = aleatorio(0,7);
           //var y = aleatorio(0,7);
           //var x = x * 60;
           //var y = y * 60;
          // papel.drawImage(cerdo.imagen, x , y);
        //  }
    //  }
    }

  function dibujarTeclado(evento) //funcion que dibuja el cerdo a partir de la dos coordenadas
    {
          //  var colorcito = new Image();
          //  colorcito = cerdo.imagen.src;
            var movimiento = 3;
          //definicion de variable imagen-objeto para retener la imagen
            cerdo2 = new Image();
            cerdo2 = cerdo.imagen;

             switch (evento.keyCode) {
             case teclas.UP:
            //   dibujarLinea(colorcito, x, y, x, y - movimiento, papel); ESTA LIENA ES ORIGINAL DEL CODIGO dibujarLinea
              dibujarLinea(cerdo2, x, y, x, y - movimiento, papel); // LA HE CAMBIADO POR ESTO PARA DIBUJAR EL CERDO
               y = y - movimiento;
               break;
             case teclas.DOWN:
               dibujarLinea(cerdo2, x, y, x, y + movimiento, papel);
               y = y + movimiento;
               break;
             case teclas.LEFT:
               dibujarLinea(cerdo2, x, y, x - movimiento, y, papel);
               x = x - movimiento;
               console.log("izquierda");
               break;
             case teclas.RIGHT:
               dibujarLinea(cerdo2, x, y, x + movimiento, y, papel);
               x = x + movimiento;
               console.log("derecha");
               break;
               default:
               console.log("Otra tecla");
               break;
              // dibujarLinea("red", 149, 149, 151, 151, papel);
           }
    }

  function dibujarLinea(cerdo1, xinicial, yinicial, xfinal, yfinal, lienzo)
    {
       cerdo1 = new Image();
       cerdo1 = cerdo.imagen;

      lienzo.beginPath();
    //  lienzo.strokeStyle = color;
      lienzo.lineWidth = 3;
      lienzo.drawImage(cerdo1, xinicial, yinicial);
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }
