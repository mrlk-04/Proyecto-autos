function comentar(){

    var partefinal = document.getElementById('partefinal');

    comentario = prompt('Ingrese el comentario que desea añadir')

    partefinal.innerHTML = 'Usuario desconocido: <span style = "color : blue;"> '+ comentario + '</span>';
}
