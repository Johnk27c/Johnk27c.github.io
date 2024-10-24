let imagenes = ["images/carrusel/carrusel1.jpeg", "images/carrusel/carrusel2.png", "images/carrusel/carrusel3.jpg", "images/carrusel/carrusel4.jpeg", "images/carrusel/carrusel5.jpg", "images/carrusel/carrusel6.jpg"];
let botonAnterior = document.createElement("button");
botonAnterior.innerHTML = " << "
let botonSiguiente = document.createElement("button");
botonSiguiente.innerHTML = " >> "
let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");
let contador = 0;

document.Carrusel.src = imagenes[contador]

anterior.append(botonAnterior);
siguiente.append(botonSiguiente);

botonAnterior.onclick = e => {
    contador--;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    document.Carrusel.src = imagenes[contador];
}
botonSiguiente.onclick = e => {
    contador++;
    if (contador > imagenes.length - 1) {
        contador = 0;
    }
    document.Carrusel.src = imagenes[contador];
}