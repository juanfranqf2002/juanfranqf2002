console.log('Hello!');
var imagenes = [
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/85247947-27dc-488c-a6cb-d81c5e391559/09-ROBERT_LEWANDOWSKI.jpg?width=1200&height=750',
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/68339d90-282b-4e03-98fa-54395765867c/30-GAVI_.jpg?width=1200&height=750',
  'https://www.fcbarcelona.com/photo-resources/2022/11/02/d57390d3-5cd5-426f-a1b2-e4cefb1a3d9a/01-MARC-ANDRE_TER_STEGEN.jpg?width=1200&height=750',
];
var indiceImagen = 0;
function cambiarImagen() {
  // Obtener el elemento de la imagen
  var imagen = document.getElementById('imagen');

  // Actualizar la imagen con la siguiente en el arreglo
  imagen.src = imagenes[indiceImagen];

  // Incrementar el índice de la imagen actual
  indiceImagen++;

  // Si se alcanza el final del arreglo, volver al principio
  if (indiceImagen == imagenes.length) {
    indiceImagen = 0;
  }
}

setInterval(cambiarImagen, 1500);
