var z;

//Funcion que mustra 10 numeros de forma aleatoria entr el rango especificado
for(var i=0; i<10; i++)
{
    var z = aleatorio(10, 20);
    document.write(z + ",");
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max- min + 1)) + min;
  return resultado;
}
